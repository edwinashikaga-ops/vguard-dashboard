import { Controller, Post, Body } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private service: TransactionsService) {}

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}