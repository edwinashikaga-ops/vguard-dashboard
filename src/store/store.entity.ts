import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity('stores')
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @ManyToOne(() => User, (user) => user.stores, { // ✅ FIX
    onDelete: 'CASCADE',
  })
  user: User;
}