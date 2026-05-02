import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WAService {
  async sendMessage(number: string, message: string) {
    try {
      const formatted = number.startsWith('0')
        ? '62' + number.slice(1)
        : number;

      console.log('➡️ Kirim ke WA:', formatted);

      if (!process.env.FONNTE_TOKEN) {
        console.log('❌ TOKEN TIDAK ADA');
        return;
      }

      const res = await axios.post(
        'https://api.fonnte.com/send',
        {
          target: formatted,
          message,
        },
        {
          headers: {
            Authorization: process.env.FONNTE_TOKEN,
          },
        }
      );

      console.log('✅ RESP FONNTE:', res.data);
    } catch (err: any) {
      console.log('❌ ERROR WA:', err.response?.data || err.message);
    }
  }
}