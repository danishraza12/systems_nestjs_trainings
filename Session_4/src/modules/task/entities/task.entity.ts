import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('task', { schema: 'public' })
export class Task {
  @PrimaryGeneratedColumn("uuid") taskId: string;
  @Column() title: String;
  @Column() description: String;
  @Column() status: String;
  @Column() dueDate: Date;
  @CreateDateColumn() created_at: Date;
  @UpdateDateColumn() updated_at: Date;
}
