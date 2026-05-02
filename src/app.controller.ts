import {
  Controller,
  Post,
  Body,
  Get,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

let logs: any[] = [];
let clients: any[] = [];

const PRICES: any = {
  "V-LITE": 299000,
  "V-PRO": 899000,
  "V-SIGHT": 1500000,
  "V-ENTERPRISE": 3500000,
  "V-ULTRA": 9999999
};

@Controller()
export class AppController {

  @Post('register')
  @UseInterceptors(FileInterceptor('ktp'))
  register(@Body() body: any, @UploadedFile() file: any) {

    const client = {
      ...body,
      ktp: file?.originalname,
      status: "pending",
      active: false,
      createdAt: new Date()
    };

    clients.push(client);

    return { status: 'ok' };
  }

  @Get('clients')
  getClients() {
    return clients;
  }

  @Post('approve')
  approve(@Body() body: any) {
    const client = clients.find(c => c.phone === body.phone);

    if (!client) return { error: "not found" };

    const price = PRICES[client.plan] || 0;

    client.status = "approved";
    client.invoice = {
      amount: price,
      status: "unpaid"
    };

    return { status: "approved", amount: price };
  }

  @Post('pay')
  pay(@Body() body: any) {
    const client = clients.find(c => c.phone === body.phone);

    if (!client) return { error: "not found" };

    client.active = true;
    client.invoice.status = "paid";

    return { status: "paid" };
  }

  @Post('event')
  event(@Body() body: any) {
    const e = {
      ...body,
      time: new Date()
    };

    logs.push(e);

    return { status: "ok" };
  }

  @Get('logs')
  logsData() {
    return logs.slice(-20).reverse();
  }
}