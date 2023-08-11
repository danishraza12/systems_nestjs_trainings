import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user', { schema: 'public' })
export class User {
  @PrimaryGeneratedColumn("uuid") userId: string;
  @Column() firstName: string;
  @Column() lastName: string;
  @Column() email: string;
  @Column() username: string;
  @Column() password: string;
  @CreateDateColumn() created_at: Date;
  @UpdateDateColumn() updated_at: Date;
}
