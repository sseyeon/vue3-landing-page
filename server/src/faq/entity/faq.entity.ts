import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Faq {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 500 })
  question: string;

  @Column('text')
  answer: string;

  @Column({ type: 'boolean', default: false })
  expanded: boolean;
}
