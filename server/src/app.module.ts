import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewDataModule } from './review-data/review-data.module';
import { ReviewData } from './review-data/entity/review-data.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // 데이터베이스 타입
      host: 'localhost', // 호스트 주소
      port: 3306, // 포트 번호
      username: 'bigleader', // 데이터베이스 유저 이름
      password: '1234', // 데이터베이스 비밀번호
      database: 'bigleader', // 데이터베이스 이름
      entities: [ReviewData], // 사용할 엔티티
      synchronize: true, // 개발 환경에서만 사용하세요
    }),
    ReviewDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
