import { Injectable } from '@nestjs/common';

@Injectable()
export class AIService {

  analyzeTransaction(data: any) {
    let suspicious = false;
    let reason = '';

    // RULE 1: transaksi terlalu besar
    if (data.total > 1000000) {
      suspicious = true;
      reason = 'Transaksi terlalu besar';
    }

    // RULE 2: pembayaran cash besar
    if (data.paymentMethod === 'CASH' && data.total > 500000) {
      suspicious = true;
      reason = 'Cash besar mencurigakan';
    }

    // RULE 3: transaksi cepat (dummy)
    if (data.items?.length === 0) {
      suspicious = true;
      reason = 'Transaksi kosong';
    }

    return {
      isSuspicious: suspicious,
      reason,
    };
  }
}