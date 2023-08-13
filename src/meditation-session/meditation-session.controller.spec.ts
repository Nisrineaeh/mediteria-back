import { Test, TestingModule } from '@nestjs/testing';
import { MeditationSessionController } from './meditation-session.controller';
import { MeditationSessionService } from './meditation-session.service';

describe('MeditationSessionController', () => {
  let controller: MeditationSessionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeditationSessionController],
      providers: [MeditationSessionService],
    }).compile();

    controller = module.get<MeditationSessionController>(MeditationSessionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
