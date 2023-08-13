import { Module } from '@nestjs/common';
import { MeditationSessionService } from './meditation-session.service';
import { MeditationSessionController } from './meditation-session.controller';

@Module({
  controllers: [MeditationSessionController],
  providers: [MeditationSessionService],
})
export class MeditationSessionModule {}
