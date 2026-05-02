import { Module } from '@nestjs/common';
import { WAService } from './wa.service';

@Module({
  providers: [WAService],
  exports: [WAService], // 🔥 WAJIB supaya bisa dipakai di tempat lain
})
export class WAModule {}