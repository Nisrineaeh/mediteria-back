import { Test, TestingModule } from '@nestjs/testing';
import { TechniqueMeditationController } from './technique-meditation.controller';
import { TechniqueMeditationService } from './technique-meditation.service';

describe('TechniqueMeditationController', () => {
  let controller: TechniqueMeditationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechniqueMeditationController],
      providers: [TechniqueMeditationService],
    }).compile();

    controller = module.get<TechniqueMeditationController>(TechniqueMeditationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
