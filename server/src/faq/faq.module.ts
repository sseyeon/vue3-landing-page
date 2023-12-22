import { Module } from '@nestjs/common';
import { FaqService } from './faq.service';
import { FaqController } from './faq.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Faq } from './entity/faq.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Faq])],
  providers: [FaqService],
  controllers: [FaqController],
})
export class FaqModule {}
