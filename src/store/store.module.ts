import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from './store.entity';
import { StoreService } from './store.service';        // ✅ FIX
import { StoreController } from './store.controller';  // ✅ FIX

@Module({
  imports: [TypeOrmModule.forFeature([Store])],
  providers: [StoreService],        // ✅ FIX
  controllers: [StoreController],  // ✅ FIX
  exports: [StoreService],         // ✅ FIX
})
export class StoreModule {}        // ✅ (opsional tapi disarankan singular)