import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  invoiceNumber: string;

  @Column()
  total: number;

  @Column()
  paymentMethod: string;

  @Column({ default: false })
  isSuspicious: boolean;

  @Column({ nullable: true })
  aiReason: string;

  @CreateDateColumn()
  createdAt: Date;
}