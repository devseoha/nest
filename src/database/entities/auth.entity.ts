import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '아이디' })
  id: number;

  @Column({ type: 'varchar', name: 'name', comment: '이름' })
  name: string;

  @Column('varchar', { name: 'password', select: false })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
