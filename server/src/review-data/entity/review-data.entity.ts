import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ReviewData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 500 })
  reviewer_name: string;

  @Column({ type: 'varchar', length: 50 })
  review_year: string;

  @Column('text')
  image_src: string;

  @Column({ type: 'varchar', length: 500 })
  reviewer_expertise: string;

  @Column('text')
  review_content: string;
}
