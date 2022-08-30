import { Column, OneToMany } from 'typeorm';
import BaseEntity from './base.entity';
import { Review } from './review.entity';

export class Place extends BaseEntity {
  @Column({ type: 'varchar', name: 'name', comment: '장소 이름' })
  name: string;

  @Column('decimal', {
    name: 'latitude',
    nullable: true,
    comment: '위도',
    precision: 10,
    scale: 8,
    default: () => "'0.00000000'",
  })
  latitude: string;

  @Column('decimal', {
    name: 'longitude',
    nullable: true,
    comment: '경도',
    precision: 10,
    scale: 8,
    default: () => "'0.00000000'",
  })
  longitude: string;

  @OneToMany(() => Review, (review) => review.Place)
  Review: Review[];
}
