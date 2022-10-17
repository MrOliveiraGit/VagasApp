import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const options = { cors: { origin: '*' } };
  const app = await NestFactory.create(AppModule,options);
  app.useGlobalPipes(new ValidationPipe({
    errorHttpStatusCode: 422,
    whitelist: true,
    transform: true
  }))
  await app.listen(3000);
}
bootstrap();
