import { CreateReviewDataDto } from './dto/create-review-data.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReviewData } from './entity/review-data.entity';

@Injectable()
export class ReviewDataService {
  constructor(
    @InjectRepository(ReviewData)
    private reviewDataRepository: Repository<ReviewData>,
  ) {}

  /**
   * this is function is used to create ReviewData in ReviewData Entity.
   * @param createReviewDataDto
   * @returns promise of ReviewData
   */
  async createReviewData(
    createReviewDataDto: CreateReviewDataDto,
  ): Promise<ReviewData> {
    const reviewData = this.reviewDataRepository.create(createReviewDataDto);
    return this.reviewDataRepository.save(reviewData);
  }

  /**
   * this function is used to get all ReviewData from ReviewData Entity.
   * @returns promise of ReviewData[]
   */
  async getAllReviewData(): Promise<ReviewData[]> {
    return this.reviewDataRepository.find();
  }

  /**
   * this function is used to get ReviewData by id from ReviewData Entity.
   * @param id
   * @returns promise of ReviewData
   */
  async getReviewDataById(id: number): Promise<ReviewData> {
    const reviewData = await this.reviewDataRepository.findOne({
      where: { id },
    });
    if (!reviewData) {
      throw new Error(`ReviewData with ID ${id} not found`);
    }
    return reviewData;
  }

  async deleteReviewDataById(id: number): Promise<any> {
    const reviewData = await this.reviewDataRepository.findOne({
      where: { id },
    });
    if (!reviewData) {
      throw new Error(`ReviewData with ID ${id} not found`);
    }

    return this.reviewDataRepository.delete(id);
  }
}
