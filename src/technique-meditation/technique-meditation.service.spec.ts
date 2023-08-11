import { Test, TestingModule } from '@nestjs/testing';
import { TechniqueMeditationService } from './technique-meditation.service';

describe('TechniqueMeditationService', () => {
  let service: TechniqueMeditationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechniqueMeditationService],
    }).compile();

    service = module.get<TechniqueMeditationService>(TechniqueMeditationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
