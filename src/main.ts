/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpErrorFilter } from './filters/http-error.filter'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  //Se aplica el filtro de excepciones globalmente
  app.useGlobalFilters(new HttpErrorFilter());
  await app.listen(3000);
}
bootstrap();

//En este caso HttpErrorFilter manejará las excepciones en toda la aplicación, garantizando una respuesta de error consistente en todos los módulos y controladores.