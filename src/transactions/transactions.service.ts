import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';
import { Repository } from 'typeorm';
import { AIService } from '../ai/ai.service';
import { RealtimeGateway } from '../realtime/realtime.gateway';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private repo: Repository<Transaction>,
    private ai: AIService,
    private realtime: RealtimeGateway,
  ) {}

  async create(data: any) {
    // 🔥 AI ANALYSIS
    const aiResult = this.ai.analyzeTransaction(data);

    const trx = this.repo.create({
      ...data,
      isSuspicious: aiResult.isSuspicious,
      aiReason: aiResult.reason,
    });

    const saved = await this.repo.save(trx);

    // 🚀 kirim realtime
    this.realtime.sendEvent({
      type: 'TRANSACTION',
      data: saved,
    });

    return saved;
  }
}