import { IsOptional, IsString } from 'class-validator';

export class UpdateReviewVideoDataDto {
  @IsString()
  @IsOptional()
  video_title?: string;

  @IsString()
  @IsOptional()
  video_id?: string;

  @IsString()
  @IsOptional()
  video_src?: string;

  @IsString()
  @IsOptional()
  reviewer_name?: string;

  @IsString()
  @IsOptional()
  review_year?: string;
}
