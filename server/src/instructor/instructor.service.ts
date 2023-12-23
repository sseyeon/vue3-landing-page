import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Instructor } from './entity/instructor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InstructorService {
  constructor(
    @InjectRepository(Instructor) private instructor: Repository<Instructor>,
  ) {}

  /**
   * this function is used to create Instructor in Instructor Entity.
   * @param createInstructorDto
   * @returns promise of Instructor
   */
  async createInstructor(
    createInstructorDto: CreateInstructorDto,
  ): Promise<Instructor> {
    const newInstructor = this.instructor.create(createInstructorDto);
    return this.instructor.save(newInstructor);
  }

  /**
   * this function is used to get all Instructor from Instructor Entity.
   * @returns promise of Instructor[]
   */
  async getAllInstructor(): Promise<Instructor[]> {
    return this.instructor.find();
  }

  /**
   * this function is used to get Instructor by id from Instructor Entity.
   * @param id
   * @returns promise of Instructor
   */
  async getInstructorById(id: number): Promise<Instructor> {
    const instructor = await this.instructor.findOne({
      where: { id },
    });
    if (!instructor) {
      throw new NotFoundException(`Instructor with ID ${id} not found`);
    }
    return instructor;
  }

  /**
   * this function is used to update Instructor by id in Instructor Entity.
   * @param id
   * @param updateInstructorDto
   * @returns promise of Instructor
   * @throws NotFoundException
   */
  async updateInstructorById(
    id: number,
    updateInstructorDto: UpdateInstructorDto,
  ): Promise<Instructor> {
    const instructor = await this.instructor.preload({
      id,
      ...updateInstructorDto,
    });
    if (!instructor) {
      throw new NotFoundException(`Instructor with ID ${id} not found`);
    }
    return this.instructor.save(instructor);
  }

  /**
   * this function is used to delete Instructor by id in Instructor Entity.
   * @param id
   * @returns promise of void
   * @throws NotFoundException
   */
  async deleteInstructorById(id: number): Promise<void> {
    const result = await this.instructor.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Instructor with ID ${id} not found`);
    }
  }
}
