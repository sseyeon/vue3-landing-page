import { Module } from '@nestjs/common';
import { ReviewVideoDataService } from './review-video-data.service';
import { ReviewVideoDataController } from './review-video-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewVideoData } from './entity/review-video-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewVideoData])],
  providers: [ReviewVideoDataService],
  controllers: [ReviewVideoDataController],
})
export class ReviewVideoDataModule {}
