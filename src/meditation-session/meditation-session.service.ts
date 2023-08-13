import { Injectable } from '@nestjs/common';
import { CreateMeditationSessionDto } from './dto/create-meditation-session.dto';
import { UpdateMeditationSessionDto } from './dto/update-meditation-session.dto';

@Injectable()
export class MeditationSessionService {
  create(createMeditationSessionDto: CreateMeditationSessionDto) {
    return 'This action adds a new meditationSession';
  }

  findAll() {
    return `This action returns all meditationSession`;
  }

  findOne(id: number) {
    return `This action returns a #${id} meditationSession`;
  }

  update(id: number, updateMeditationSessionDto: UpdateMeditationSessionDto) {
    return `This action updates a #${id} meditationSession`;
  }

  remove(id: number) {
    return `This action removes a #${id} meditationSession`;
  }
}
