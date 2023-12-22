import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReviewVideoData } from './entity/review-video-data.entity';
import { Repository } from 'typeorm';
import { CreateReviewVideoDataDto } from './dto/create-review-video-data.dto';
import { UpdateReviewVideoDataDto } from './dto/update-review-video-data.dto';

@Injectable()
export class ReviewVideoDataService {
  constructor(
    @InjectRepository(ReviewVideoData)
    private reviewVideoData: Repository<ReviewVideoData>,
  ) {}

  /**
   * this function is used to create ReviewVideoData in ReviewVideoData Entity.
   * @param createReviewVideoDataDto
   * @returns promise of ReviewVideoData
   */
  async createReviewVideoData(
    createReviewVideoDataDto: CreateReviewVideoDataDto,
  ): Promise<ReviewVideoData> {
    const reviewVideoData = this.reviewVideoData.create(
      createReviewVideoDataDto,
    );
    return this.reviewVideoData.save(reviewVideoData);
  }

  /**
   * this function is used to get all ReviewVideoData from ReviewVideoData Entity.
   * @returns promise of ReviewVideoData[]
   */
  async getAllReviewVideoData(): Promise<ReviewVideoData[]> {
    return this.reviewVideoData.find();
  }

  /**
   * this function is used to get ReviewVideoData by id from ReviewVideoData Entity.
   * @param id
   * @returns promise of ReviewVideoData
   */
  async getReviewVideoDataById(id: number): Promise<ReviewVideoData> {
    const reviewVideoData = await this.reviewVideoData.findOne({
      where: { id },
    });
    if (!reviewVideoData) {
      throw new NotFoundException(`ReviewVideoData with ID ${id} not found`);
    }
    return reviewVideoData;
  }

  /**
   * this function is used to update ReviewVideoData by id in ReviewVideoData Entity.
   * @param id
   * @param updateReviewVideoDataDto
   * @returns promise of ReviewVideoData
   * @throws NotFoundException
   */
  async updateReviewVideoDataById(
    id: number,
    updateReviewVideoDataDto: UpdateReviewVideoDataDto,
  ): Promise<ReviewVideoData> {
    const reviewVideoData = await this.reviewVideoData.preload({
      id: id,
      ...updateReviewVideoDataDto,
    });

    if (!reviewVideoData) {
      throw new NotFoundException(`ReviewVideoData with ID ${id} not found`);
    }

    return this.reviewVideoData.save(reviewVideoData);
  }

  /**
   * this function is used to delete ReviewVideoData by id from ReviewVideoData Entity.
   * @param id
   * @returns promise of ReviewVideoData
   * @throws Error
   */
  async deleteReviewVideoDataById(id: number): Promise<void> {
    const reviewVideoData = await this.getReviewVideoDataById(id);
    await this.reviewVideoData.delete(id);
  }
}
