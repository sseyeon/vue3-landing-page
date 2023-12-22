import { CreateReviewVideoDataDto } from './dto/create-review-video-data.dto';
import { UpdateReviewVideoDataDto } from './dto/update-review-video-data.dto';
import { ReviewVideoData } from './entity/review-video-data.entity';
import { ReviewVideoDataService } from './review-video-data.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('review-video-data')
export class ReviewVideoDataController {
  constructor(private reviewVideoDataService: ReviewVideoDataService) {}

  @Post()
  createReviewVideoData(
    @Body() createReviewVideoDataDto: CreateReviewVideoDataDto,
  ): Promise<ReviewVideoData> {
    return this.reviewVideoDataService.createReviewVideoData(
      createReviewVideoDataDto,
    );
  }

  @Get()
  getAllReviewVideoData(): Promise<ReviewVideoData[]> {
    return this.reviewVideoDataService.getAllReviewVideoData();
  }

  @Get(':id')
  getReviewVideoDataById(@Param('id') id: number): Promise<ReviewVideoData> {
    return this.reviewVideoDataService.getReviewVideoDataById(id);
  }

  @Patch(':id')
  updateReviewVideoDataById(
    @Param('id') id: number,
    @Body() updateReviewVideoDataDto: UpdateReviewVideoDataDto,
  ): Promise<ReviewVideoData> {
    return this.reviewVideoDataService.updateReviewVideoDataById(
      id,
      updateReviewVideoDataDto,
    );
  }

  @Delete(':id')
  deleteReviewVideoDataById(id: number): Promise<any> {
    return this.reviewVideoDataService.deleteReviewVideoDataById(id);
  }
}
