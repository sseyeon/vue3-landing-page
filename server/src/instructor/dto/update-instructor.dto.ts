import { IsOptional, IsString } from 'class-validator';

export class UpdateInstructorDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  position?: string;

  @IsString()
  @IsOptional()
  image_src?: string;

  @IsString()
  @IsOptional()
  expertise?: string;

  @IsString()
  @IsOptional()
  responsibility_coordinator?: string;

  @IsString()
  @IsOptional()
  responsibilities?: string;
}
