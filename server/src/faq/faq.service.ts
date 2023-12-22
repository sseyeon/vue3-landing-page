import { CreateFaqDataDto } from './dto/create-faq-data.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Faq } from './entity/faq.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FaqService {
  constructor(
    @InjectRepository(Faq)
    private faqRepository: Repository<Faq>,
  ) {}

  /**
   * this function is used to create Faq in Faq Entity.
   * @param createFaqDataDto
   * @returns promise of Faq
   */
  async createFaq(createFaqDataDto: CreateFaqDataDto): Promise<any> {
    const faq = this.faqRepository.create(createFaqDataDto);
    return this.faqRepository.save(faq);
  }

  /**
   * this function is used to get all Faq from Faq Entity.
   * @returns promise of Faq[]
   */
  async getAllFaq(): Promise<Faq[]> {
    return this.faqRepository.find();
  }

  /**
   * this function is used to delete Faq by id from Faq Entity.
   * @param id
   * @returns promise of Faq
   * @throws Error
   */
  async deleteFaqById(id: number): Promise<any> {
    const faq = await this.faqRepository.findOne({
      where: { id },
    });
    if (!faq) {
      throw new NotFoundException(`Faq with ID ${id} not found`);
    }

    return this.faqRepository.delete(id);
  }
}
