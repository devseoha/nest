import { Column, JoinColumn, ManyToOne } from 'typeorm';
import BaseEntity from './base.entity';
import { Review } from './review.entity';
import { Group } from './group.entity';
import { User } from './user.entity';

export class ReviewComment extends BaseEntity {
  @Column({ type: 'int', name: 'parent_id' })
  parentId: number;

  @Column({ type: 'int', name: 'group_id' })
  groupId: number;

  @ManyToOne(() => Group, (group) => group.ReviewComment)
  @JoinColumn([{ name: 'group_id', referencedColumnName: 'groupId' }])
  Group: Group[];

  @Column({ type: 'int', name: 'review_id' })
  reviewId: number;

  @ManyToOne(() => Review, (review) => review.ReviewComment)
  @JoinColumn([{ name: 'review_id', referencedColumnName: 'reviewId' }])
  Review: Review[];

  @Column({ type: 'int', name: 'user_id' })
  userId: number;

  @ManyToOne(() => User, (user) => user.ReviewComment)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'userId' }])
  User: User[];
}
