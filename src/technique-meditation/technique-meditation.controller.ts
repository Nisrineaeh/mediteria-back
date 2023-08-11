import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TechniqueMeditationService } from './technique-meditation.service';
import { CreateTechniqueMeditationDto } from './dto/create-technique-meditation.dto';
import { UpdateTechniqueMeditationDto } from './dto/update-technique-meditation.dto';

@Controller('technique-meditation')
export class TechniqueMeditationController {
  constructor(private readonly techniqueMeditationService: TechniqueMeditationService) {}

  @Post()
  create(@Body() createTechniqueMeditationDto: CreateTechniqueMeditationDto) {
    return this.techniqueMeditationService.create(createTechniqueMeditationDto);
  }

  @Get()
  findAll() {
    return this.techniqueMeditationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.techniqueMeditationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTechniqueMeditationDto: UpdateTechniqueMeditationDto) {
    return this.techniqueMeditationService.update(+id, updateTechniqueMeditationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.techniqueMeditationService.remove(+id);
  }
}
