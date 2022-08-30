import { Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import BaseEntity from './base.entity';
import { Place } from './place.entity';
import { User } from './user.entity';
import { ReviewComment } from './reviewComment.entity';

export class Review extends BaseEntity {
  @Column({ type: 'varchar', name: 'content', comment: '글내용' })
  content: string;

  @Column({ type: 'int', name: 'star' })
  star: number;

  @Column({ type: 'int', name: 'place_id' })
  placeId: number;

  @ManyToOne(() => Place, (place) => place.Review)
  @JoinColumn([{ name: 'place_id', referencedColumnName: 'placeId' }])
  Place: Place[];

  @Column({ type: 'int', name: 'user_id' })
  userId: number;

  @ManyToOne(() => User, (user) => user.Review)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'userId' }])
  User: User[];

  @OneToMany(() => ReviewComment, (reviewComment) => reviewComment.Review)
  ReviewComment: ReviewComment[];
}
