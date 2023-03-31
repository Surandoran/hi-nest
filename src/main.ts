import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // NestFactory.create(AppModule) 함수를 호출
  // localhost:3000 으로 설정
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
