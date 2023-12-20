import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateReviewDataDto } from './dto/create-review-data.dto';
import { ReviewData } from './entity/review-data.entity';
import { ReviewDataService } from './review-data.service';

@Controller('review-data')
export class ReviewDataController {
  constructor(private reviewDataService: ReviewDataService) {}

  @Post()
  createReviewData(
    @Body() createReviewDataDto: CreateReviewDataDto,
  ): Promise<ReviewData> {
    return this.reviewDataService.createReviewData(createReviewDataDto);
  }

  @Get()
  getAllReviewData(): Promise<ReviewData[]> {
    return this.reviewDataService.getAllReviewData();
  }

  @Get(':id')
  getReviewDataById(@Param('id') id: number): Promise<ReviewData> {
    return this.reviewDataService.getReviewDataById(id);
  }

  @Delete(':id')
  deleteReviewDataById(@Param('id') id: number): Promise<any> {
    return this.reviewDataService.deleteReviewDataById(id);
  }
}
