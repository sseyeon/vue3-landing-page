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
import { ProjectModule } from './project/project.module';
import { DatabaseSeederService } from './project/database-seeder.service';
import { Project } from './project/entity/project.entity';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { Article } from './article/entity/article.entity';

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
      entities: [
        ReviewData,
        Faq,
        ReviewVideoData,
        Instructor,
        Project,
        User,
        Article,
      ], // 사용할 엔티티
      synchronize: true, // 개발 환경에서만 사용하세요
    }),
    TypeOrmModule.forFeature([Project]),
    ReviewDataModule,
    FaqModule,
    ReviewVideoDataModule,
    InstructorModule,
    EmailModule,
    ProjectModule,
    ArticleModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseSeederService],
})
export class AppModule {}
