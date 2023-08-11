import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('employee', { schema: 'public' })
export class Employee {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column() grade: string;
  @CreateDateColumn() created_at: Date;
}
