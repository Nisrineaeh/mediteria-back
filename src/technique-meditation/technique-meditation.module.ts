import { Module } from '@nestjs/common';
import { TechniqueMeditationService } from './technique-meditation.service';
import { TechniqueMeditationController } from './technique-meditation.controller';

@Module({
  controllers: [TechniqueMeditationController],
  providers: [TechniqueMeditationService],
})
export class TechniqueMeditationModule {}
