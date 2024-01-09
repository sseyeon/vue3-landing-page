import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseSeederService } from './project/database-seeder.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const seeder = app.get(DatabaseSeederService);
  await seeder.seed();
  app.enableCors(); // CORS 활성화
  await app.listen(3000);
}
bootstrap();
