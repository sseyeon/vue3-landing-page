import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { Instructor } from './entity/instructor.entity';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { CreateInstructorDto } from './dto/create-instructor.dto';

@Controller('instructor')
export class InstructorController {
  constructor(private instructorService: InstructorService) {}

  @Post()
  createInstructor(
    @Body() createInstructorDto: CreateInstructorDto,
  ): Promise<Instructor> {
    return this.instructorService.createInstructor(createInstructorDto);
  }

  @Get()
  getAllInstructor(): Promise<Instructor[]> {
    return this.instructorService.getAllInstructor();
  }

  @Get(':id')
  getInstructorById(@Param('id') id: number): Promise<Instructor> {
    return this.instructorService.getInstructorById(id);
  }

  @Patch(':id')
  updateInstructorById(
    @Param('id') id: number,
    @Body() updateInstructorDto: UpdateInstructorDto,
  ): Promise<Instructor> {
    return this.instructorService.updateInstructorById(id, updateInstructorDto);
  }

  @Delete(':id')
  deleteInstructorById(id: number): Promise<any> {
    return this.instructorService.deleteInstructorById(id);
  }
}
