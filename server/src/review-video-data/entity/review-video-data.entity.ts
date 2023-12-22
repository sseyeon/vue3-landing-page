import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ReviewVideoData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 500 })
  video_title: string;

  @Column({ type: 'varchar', length: 50 })
  video_id: string;

  @Column('text')
  video_src: string;

  @Column({ type: 'varchar', length: 500 })
  reviewer_name: string;

  @Column({ type: 'varchar', length: 50 })
  review_year: string;
}
