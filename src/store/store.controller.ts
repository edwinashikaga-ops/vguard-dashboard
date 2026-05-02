import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { StoreService } from './store.service'; // ✅ FIX
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('stores')
export class StoreController { // ✅ FIX (optional tapi disarankan)
  constructor(private service: StoreService) {} // ✅ FIX

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: any, @Req() req: any) {
    return this.service.create({
      ...body,
      user: { id: req.user.sub },
    });
  }
}