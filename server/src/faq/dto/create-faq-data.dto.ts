import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateFaqDataDto {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsString()
  @IsNotEmpty()
  answer: string;

  @IsBoolean()
  expanded: boolean;
}
