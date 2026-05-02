import { Module } from '@nestjs/common';
import { VguardController } from './vguard.controller';
import { RealtimeModule } from '../realtime/realtime.module';
import { FraudModule } from '../fraud/fraud.module';

@Module({
  imports: [RealtimeModule, FraudModule],
  controllers: [VguardController],
})
export class VguardModule {}