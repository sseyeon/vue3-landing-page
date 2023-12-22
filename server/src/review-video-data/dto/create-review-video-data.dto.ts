import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReviewVideoDataDto {
  @IsString()
  @IsNotEmpty()
  video_title: string;

  @IsString()
  @IsNotEmpty()
  video_id: string;

  @IsString()
  @IsNotEmpty()
  video_src: string;

  @IsString()
  @IsNotEmpty()
  reviewer_name: string;

  @IsString()
  @IsNotEmpty()
  review_year: string;
}
