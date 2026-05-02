import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AlertService {

  async sendWhatsApp(message: string) {
    try {
      const response = await axios.post(
        "https://api.fonnte.com/send",
        {
          target: "6282122190885",
          message: message,
        },
        {
          headers: {
            Authorization: "5yaPgU85Gbdaq29tpm9Pmqv4amwZ",
          },
        }
      );

      console.log("📲 WA SENT:", response.data);

    } catch (error: any) {
      console.error("❌ WA ERROR:", error.message);
    }
  }

}