import { Controller, Get } from '@nestjs/common';
import { RealtimeGateway } from '../realtime/realtime.gateway';
import { FraudService } from '../fraud/fraud.service';

@Controller('vguard')
export class VguardController {
  constructor(
    private readonly realtime: RealtimeGateway,
    private readonly fraud: FraudService,
  ) {}

  // ✅ STATUS SYSTEM
  @Get('status')
  getStatus() {
    const data = {
      api: "connected",
      kasir: "connected",
      cctv: "connected",
      ai_agents: 10,
      timestamp: new Date(),
    };

    // kirim realtime ke frontend
    this.realtime.broadcast('system-status', data);

    return data;
  }

  // ✅ SIMULASI TRANSAKSI + FRAUD DETECTION
  @Get('simulate')
  simulateTransaction() {
    // contoh data transaksi (nanti dari kasir / API real)
    const transaction = {
      id: Date.now(),
      amount: 1500000,
      method: 'manual',
      time: 'midnight',
    };

    // jalankan AI fraud detection
    const result = this.fraud.check(transaction);

    // 🚨 JIKA FRAUD TERDETEKSI
    if (result.isFraud) {
      console.log('🚨 FRAUD DETECTED:', result);

      // kirim alert realtime ke frontend
      this.realtime.broadcast('fraud-alert', {
        message: "⚠ Transaksi mencurigakan terdeteksi!",
        data: result,
        level: "HIGH",
        timestamp: new Date(),
      });
    } else {
      console.log('✅ TRANSACTION SAFE:', result);

      // kirim status normal
      this.realtime.broadcast('safe-transaction', result);
    }

    return result;
  }
}