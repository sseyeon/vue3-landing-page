import { Module } from '@nestjs/common';
import { ReviewDataController } from './review-data.controller';
import { ReviewDataService } from './review-data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewData } from './entity/review-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewData])],
  controllers: [ReviewDataController],
  providers: [ReviewDataService],
})
export class ReviewDataModule {}
