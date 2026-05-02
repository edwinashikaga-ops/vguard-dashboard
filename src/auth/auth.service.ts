import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../user/users.service'; // ✅ FIX
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwt: JwtService,
  ) {}

  async validateUser(phone: string, password: string) {
    const user = await this.usersService.findByPhone(phone);

    if (!user) throw new UnauthorizedException('User not found');

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new UnauthorizedException('Wrong password');

    return user;
  }

  async login(data: any) {
    const user = await this.validateUser(data.phone, data.password);

    const payload = {
      sub: user.id,
      role: user.role,
    };

    return {
      access_token: this.jwt.sign(payload),
      user,
    };
  }
}