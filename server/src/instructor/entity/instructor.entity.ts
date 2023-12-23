import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Instructor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  position: string;

  @Column('text')
  image_src: string;

  @Column('text')
  expertise: string;

  @Column('text')
  responsibility_coordinator: string;

  @Column('text')
  responsibilities: string;
}
