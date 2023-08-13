import { PartialType } from '@nestjs/mapped-types';
import { CreateMeditationSessionDto } from './create-meditation-session.dto';

export class UpdateMeditationSessionDto extends PartialType(CreateMeditationSessionDto) {}
