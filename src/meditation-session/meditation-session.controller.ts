import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeditationSessionService } from './meditation-session.service';
import { CreateMeditationSessionDto } from './dto/create-meditation-session.dto';
import { UpdateMeditationSessionDto } from './dto/update-meditation-session.dto';

@Controller('meditation-session')
export class MeditationSessionController {
  constructor(private readonly meditationSessionService: MeditationSessionService) {}

  @Post()
  create(@Body() createMeditationSessionDto: CreateMeditationSessionDto) {
    return this.meditationSessionService.create(createMeditationSessionDto);
  }

  @Get()
  findAll() {
    return this.meditationSessionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.meditationSessionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeditationSessionDto: UpdateMeditationSessionDto) {
    return this.meditationSessionService.update(+id, updateMeditationSessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meditationSessionService.remove(+id);
  }
}
