import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Api Documentation')
  .setVersion('0.0.1')
  .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-documentation', app, documentFactory);

  await app.listen(process.env.PORT ?? 3001);
  Logger.log(await app.getUrl())
}
bootstrap();
