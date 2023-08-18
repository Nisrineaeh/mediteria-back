import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { TechniqueMeditationService } from './technique-meditation/technique-meditation.service';
dotenv.config({ path: '.env.local' });


async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
  }

  const serviceMeditation = app.get(TechniqueMeditationService);
  await serviceMeditation.initialiserDonnees();


  app.enableCors(corsOptions);


  await app.listen(8080);

}
bootstrap();
