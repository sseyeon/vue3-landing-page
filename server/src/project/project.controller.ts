import { Project } from './entity/project.entity';
import { ProjectService } from './project.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  @Get()
  getAllProject() {
    return this.projectService.getAllProject();
  }
  @Get(':id')
  getProjectById(@Param('id') id: number): Promise<Project> {
    return this.projectService.getProjectById(id);
  }
}
