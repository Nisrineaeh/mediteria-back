import { PartialType } from '@nestjs/mapped-types';
import { CreateTechniqueMeditationDto } from './create-technique-meditation.dto';

export class UpdateTechniqueMeditationDto extends PartialType(CreateTechniqueMeditationDto) {}
