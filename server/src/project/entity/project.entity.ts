import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  partner: string;

  @Column()
  year: string;

  @Column({ nullable: true })
  award: string;

  @Column()
  project: string;

  @Column()
  imgSrc: string;

  @Column()
  link: string;

  @Column({ nullable: true })
  thumbnail_url: string;

  @Column({ nullable: true })
  additional_content1: string;

  @Column({ nullable: true })
  additional_content2: string;

  @Column({ default: true })
  display_on_main: boolean;
}
