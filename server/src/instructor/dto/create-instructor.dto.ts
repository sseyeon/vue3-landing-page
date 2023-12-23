import { IsNotEmpty, IsString } from 'class-validator';

export class CreateInstructorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsString()
  @IsNotEmpty()
  image_src: string;

  @IsString()
  @IsNotEmpty()
  expertise: string;

  @IsString()
  @IsNotEmpty()
  responsibility_coordinator: string;

  @IsString()
  @IsNotEmpty()
  responsibilities: string;
}
