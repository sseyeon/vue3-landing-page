import { Module } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { InstructorController } from './instructor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instructor } from './entity/instructor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Instructor])],
  providers: [InstructorService],
  controllers: [InstructorController],
})
export class InstructorModule {}
