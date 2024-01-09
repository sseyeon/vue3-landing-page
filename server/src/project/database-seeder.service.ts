import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entity/project.entity';
import { projectData } from './project-data.seed';

@Injectable()
export class DatabaseSeederService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async seed() {
    for (const data of projectData) {
      await this.projectRepository.save(data);
    }
  }
}
