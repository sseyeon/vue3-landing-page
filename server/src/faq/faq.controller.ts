import { FaqService } from './faq.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('faq')
export class FaqController {
  constructor(private faqService: FaqService) {}

  @Post()
  createFaq(@Body() createFaqDataDto: any): Promise<any> {
    return this.faqService.createFaq(createFaqDataDto);
  }

  @Get()
  getAllFaq(): Promise<any> {
    return this.faqService.getAllFaq();
  }

  @Delete(':id')
  deleteFaqById(@Param('id') id: number): Promise<any> {
    return this.faqService.deleteFaqById(id);
  }
}
