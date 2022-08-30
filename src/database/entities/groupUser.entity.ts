import { Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import BaseEntity from './base.entity';
import { Review } from './review.entity';
import { ReviewComment } from './reviewComment.entity';
import { User } from './user.entity';

export class GroupUser extends BaseEntity {
  @Column({ type: 'int', name: 'user_id' })
  userId: number;

  @ManyToOne(() => User, (user) => user.Group)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'userId' }])
  User: User[];

  @Column({ type: 'varchar', name: 'title', comment: '그룹 타이틀' })
  title: string;

  @Column({ type: 'text', name: 'content', comment: '내용' })
  content: string;

  @OneToMany(() => ReviewComment, (reviewComment) => reviewComment.Group)
  ReviewComment: ReviewComment[];
}
