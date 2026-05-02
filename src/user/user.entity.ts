import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Store } from '../store/store.entity';

// ===== ENUM =====
export enum UserStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  REJECTED = 'REJECTED',
}

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum UserPlan {
  BASIC = 'BASIC',
  PRO = 'PRO',
  ENTERPRISE = 'ENTERPRISE',
}

// ===== ENTITY =====
@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  // ===== BASIC INFO =====
  @Column()
  name: string;

  @Column()
  business: string;

  @Column({ unique: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  // ===== AUTH =====
  @Column({ select: false })
  password: string;

  // ===== PLAN / BILLING =====
  @Column({
    type: 'enum',
    enum: UserPlan,
    default: UserPlan.BASIC,
  })
  plan: UserPlan;

  // ===== STATUS =====
  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.PENDING,
  })
  status: UserStatus;

  // ===== ROLE =====
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  // ===== FEATURE FLAGS =====
  @Column({ default: false })
  isWhatsappActive: boolean;

  @Column({ default: false })
  isCctvActive: boolean;

  @Column({ default: false })
  isAiActive: boolean;

  // ===== TOKEN =====
  @Column({ select: false, nullable: true })
  refreshToken: string;

  // ===== RELATION (MULTI STORE) =====
  @OneToMany(() => Store, (store) => store.user, {
    cascade: true,
  })
  stores: Store[];

  // ===== TIMESTAMPS =====
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}