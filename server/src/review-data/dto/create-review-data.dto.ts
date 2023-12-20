import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReviewDataDto {
  @IsString()
  @IsNotEmpty()
  reviewer_name: string;

  @IsString()
  @IsNotEmpty()
  review_year: string;

  @IsString()
  @IsNotEmpty()
  image_src: string;

  @IsString()
  @IsNotEmpty()
  reviewer_expertise: string;

  @IsString()
  @IsNotEmpty()
  review_content: string;
}
