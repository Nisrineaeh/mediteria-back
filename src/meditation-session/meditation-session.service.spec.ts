import { Test, TestingModule } from '@nestjs/testing';
import { MeditationSessionService } from './meditation-session.service';

describe('MeditationSessionService', () => {
  let service: MeditationSessionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeditationSessionService],
    }).compile();

    service = module.get<MeditationSessionService>(MeditationSessionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
