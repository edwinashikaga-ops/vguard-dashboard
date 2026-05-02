import { WAService } from './whatsapp/wa.service';

export class InvoiceScheduler {

  constructor(private wa: WAService) {}

  start() {
    console.log('⏰ Scheduler Invoice Jalan');

    setInterval(async () => {
      const invoices = (global as any).invoices || [];
      const now = new Date();

      for (const inv of invoices) {
        const dueDate = new Date(inv.due_date);

        const diff =
          (dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);

        if (diff <= 7 && !inv.sent) {
          console.log('📨 Kirim Reminder Invoice');

          await this.wa.sendMessage(
            inv.phone,
            `📄 REMINDER INVOICE
Toko: ${inv.store}
Invoice: ${inv.invoice_no}
Jatuh Tempo: ${inv.due_date}
Total: Rp ${inv.amount}`
          );

          inv.sent = true;
        }
      }
    }, 60000);
  }
}