import {
  Controller,
  Post,
  Body,
  Get,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { WAService } from './whatsapp/wa.service';
import { WsGateway } from './ws.gateway';

let logs: any[] = [];
let pendingClients: any[] = [];
let users: any[] = [];

// 🔥 PRICE LIST
const PRICES: any = {
  "V-LITE": 299000,
  "V-PRO": 899000,
  "V-SIGHT": 1500000,
  "V-ENTERPRISE": 3500000,
  "V-ULTRA": 9999999
};

@Controller()
export class EventController {

  constructor(
    private ws: WsGateway,
    private wa: WAService, // 🔥 FIX DI SINI
  ) {}

  // =============================
  // 🔥 REGISTER
  // =============================
  @Post('register')
  @UseInterceptors(FileInterceptor('ktp'))
  register(
    @Body() body: any,
    @UploadedFile() file: Express.Multer.File
  ) {
    const client = {
      ...body,
      ktp: file?.originalname,
      kyc: body.kyc === 'true',
      status: "pending",
      active: false,
      createdAt: new Date()
    };

    pendingClients.push(client);

    console.log("CLIENT BARU:", client);

    return { status: 'ok' };
  }

  // =============================
  // 🔥 LIST CLIENT
  // =============================
  @Get('clients')
  getClients() {
    return pendingClients;
  }

  // =============================
  // 🔥 APPROVE + INVOICE
  // =============================
  @Post('approve')
  async approve(@Body() body: any) {
    const client = pendingClients.find(c => c.phone === body.phone);

    if (!client) {
      return { error: "Client tidak ditemukan" };
    }

    const price = PRICES[client.plan] || 0;

    client.status = "approved";
    client.invoice = {
      amount: price,
      status: "unpaid",
      createdAt: new Date()
    };

    await this.wa.sendMessage(
      client.phone,
      `💳 INVOICE VGUARD
Paket: ${client.plan}
Tagihan: Rp ${price.toLocaleString()}
Status: BELUM BAYAR`
    );

    return { status: "approved", amount: price };
  }

  // =============================
  // 🔥 BAYAR → AKUN AKTIF
  // =============================
  @Post('pay')
  async pay(@Body() body: any) {
    const client = pendingClients.find(c => c.phone === body.phone);

    if (!client || !client.invoice) {
      return { error: "Invoice tidak ditemukan" };
    }

    client.invoice.status = "paid";
    client.active = true;

    const user = {
      username: client.phone,
      password: "123456",
      role: "client",
      tier: client.plan,
      name: client.name,
      active: true,
      createdAt: new Date(),
      expiredAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    };

    users.push(user);

    await this.wa.sendMessage(
      client.phone,
      `✅ AKUN AKTIF
User: ${user.username}
Pass: ${user.password}
Berlaku sampai: ${user.expiredAt.toLocaleDateString()}`
    );

    return { status: "paid", user };
  }

  // =============================
  // 🔐 LOGIN
  // =============================
  @Post('login')
  login(@Body() body: any) {
    const { username, password } = body;

    if (username === "admin" && password === "123") {
      return { role: "admin", name: "Administrator" };
    }

    const user = users.find(
      u => u.username === username && u.password === password
    );

    if (!user) {
      return { error: "Login gagal" };
    }

    if (new Date() > new Date(user.expiredAt)) {
      return { error: "Subscription expired" };
    }

    return user;
  }

  // =============================
  // 🔥 EVENT POS
  // =============================
  @Post('event')
  async handleEvent(@Body() body: any) {

    const user = users.find(u => u.username === body.phone);

    if (!user || !user.active) {
      return { error: "Client tidak aktif" };
    }

    const event = {
      ...body,
      time: new Date(),
    };

    logs.push(event);

    this.ws.emitEvent(event);

    // 🔥 FRAUD DETECTION
    const isFraud =
      body.type === 'void' && body.amount >= 50000;

    if (isFraud) {
      await this.wa.sendMessage(
        body.phone,
        `🚨 VGUARD ALERT
VOID mencurigakan Rp ${body.amount}`
      );

      this.ws.emitEvent({
        ...event,
        alert: true
      });
    }

    return { status: 'ok' };
  }

  // =============================
  // 🔥 LOGS
  // =============================
  @Get('logs')
  getLogs() {
    return logs.slice(-20).reverse();
  }
}