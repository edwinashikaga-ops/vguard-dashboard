import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { InvoiceScheduler } from './invoice.scheduler';
import { WAService } from './whatsapp/wa.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const wa = new WAService();
  const scheduler = new InvoiceScheduler(wa);
  scheduler.start();

  // 🔥 PASTI TEMBUS DI WINDOWS
  await app.listen(8888, '127.0.0.1');
  console.log('🚀 VGuard + Scheduler + API Ready on 8888');
}
bootstrap();