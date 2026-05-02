import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { WsGateway } from './ws.gateway';
import { WAService } from './whatsapp/wa.service';

@Module({
  controllers: [EventController],
  providers: [
    WsGateway,
    WAService,
  ],
})
export class AppModule {}