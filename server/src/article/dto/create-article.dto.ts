import { IsNotEmpty, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  thumbnail: string;

  @IsString()
  sourceLink: string;

  @IsString()
  @IsNotEmpty()
  createdAt: Date;
}
