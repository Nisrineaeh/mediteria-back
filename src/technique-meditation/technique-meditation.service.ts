import { Injectable } from '@nestjs/common';
import { CreateTechniqueMeditationDto } from './dto/create-technique-meditation.dto';
import { UpdateTechniqueMeditationDto } from './dto/update-technique-meditation.dto';

@Injectable()
export class TechniqueMeditationService {
  create(createTechniqueMeditationDto: CreateTechniqueMeditationDto) {
    return 'This action adds a new techniqueMeditation';
  }

  findAll() {
    return `This action returns all techniqueMeditation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} techniqueMeditation`;
  }

  update(id: number, updateTechniqueMeditationDto: UpdateTechniqueMeditationDto) {
    return `This action updates a #${id} techniqueMeditation`;
  }

  remove(id: number) {
    return `This action removes a #${id} techniqueMeditation`;
  }
}
