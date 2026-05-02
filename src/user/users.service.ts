import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findByPhone(phone: string) {
    return this.userRepository.findOne({
      where: { phone },
      select: ['id', 'phone', 'password', 'role'],
    });
  }
}