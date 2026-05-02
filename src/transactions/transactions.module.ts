import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';
import { TransactionsService } from './transactions.service';
import { AIService } from '../ai/ai.service';
import { RealtimeModule } from '../realtime/realtime.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transaction]),
    RealtimeModule,
  ],
  providers: [
    TransactionsService,
    AIService,
  ],
  exports: [TransactionsService],
})
export class TransactionsModule {}