import { Module } from '@nestjs/common';
import { TechniqueMeditationService } from './technique-meditation.service';
import { TechniqueMeditationController } from './technique-meditation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechniqueMeditation } from './entities/technique-meditation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TechniqueMeditation])],
  controllers: [TechniqueMeditationController],
  providers: [TechniqueMeditationService],
})
export class TechniqueMeditationModule {}
