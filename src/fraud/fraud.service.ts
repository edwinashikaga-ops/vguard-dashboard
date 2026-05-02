import { Injectable } from '@nestjs/common';

@Injectable()
export class FraudService {
  check(tx: any) {
    let score = 0;

    if (tx.amount > 1000000) score += 50;
    if (tx.method === 'manual') score += 30;
    if (tx.time === 'midnight') score += 30;

    return {
      ...tx,
      score,
      isFraud: score >= 60,
    };
  }
}