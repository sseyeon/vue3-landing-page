import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  title: string;

  @Column({
    type: 'longtext', // MySQL의 경우
  })
  content: string;

  @Column()
  category: string;

  @Column({
    type: 'longtext', // MySQL의 경우
  })
  thumbnail: string;

  @Column({
    type: 'longtext', // MySQL의 경우
  })
  sourceLink: string;

  @Column()
  createdAt: Date;
}
