import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewDataModule } from './review-data/review-data.module';
import { ReviewData } from './review-data/entity/review-data.entity';
import { FaqModule } from './faq/faq.module';
import { Faq } from './faq/entity/faq.entity';
import { ReviewVideoDataModule } from './review-video-data/review-video-data.module';
import { ReviewVideoData } from './review-video-data/entity/review-video-data.entity';
import { InstructorModule } from './instructor/instructor.module';
import { Instructor } from './instructor/entity/instructor.entity';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 이 옵션으로 모든 모듈에서 ConfigService 사용 가능
    }),
    TypeOrmModule.forRoot({
      type: 'mysql', // 데이터베이스 타입
      host: 'localhost', // 호스트 주소
      port: 3306, // 포트 번호
      username: 'bigleader', // 데이터베이스 유저 이름
      password: '1234', // 데이터베이스 비밀번호
      database: 'bigleader', // 데이터베이스 이름
      entities: [ReviewData, Faq, ReviewVideoData, Instructor], // 사용할 엔티티
      synchronize: true, // 개발 환경에서만 사용하세요
    }),
    ReviewDataModule,
    FaqModule,
    ReviewVideoDataModule,
    InstructorModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
