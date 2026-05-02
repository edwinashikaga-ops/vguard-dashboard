import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from './store.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StoreService { // ✅ FIX (singular)
  constructor(
    @InjectRepository(Store)
    private repo: Repository<Store>,
  ) {}

  async create(data: any) {
    return this.repo.save(data);
  }

  async findByUser(userId: number) {
    return this.repo.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  }
}