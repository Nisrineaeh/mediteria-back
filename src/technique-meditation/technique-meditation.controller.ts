import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TechniqueMeditationService } from './technique-meditation.service';
import { CreateTechniqueMeditationDto } from './dto/create-technique-meditation.dto';
import { UpdateTechniqueMeditationDto } from './dto/update-technique-meditation.dto';
import { TechniqueMeditation } from './entities/technique-meditation.entity';

@Controller('technique-meditation')
export class TechniqueMeditationController {
  constructor(private readonly techniqueMeditationService: TechniqueMeditationService) { }

  @Post()
  async create(@Body() createTechniqueMeditationDto: CreateTechniqueMeditationDto): Promise<TechniqueMeditation> {
    return this.techniqueMeditationService.create(createTechniqueMeditationDto);
  }

  @Get()
  async findAll(): Promise<TechniqueMeditation[]> {
    const techniques = await this.techniqueMeditationService.findAll();
    console.log('Techniques récupérées : ', techniques);
    return techniques;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TechniqueMeditation> {
    return this.techniqueMeditationService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTechniqueMeditationDto: UpdateTechniqueMeditationDto,
  ): Promise<TechniqueMeditation> {
    return this.techniqueMeditationService.update(+id, updateTechniqueMeditationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.techniqueMeditationService.remove(+id);
  }

  @Post('/techniques')
  async techniquesTech(){
    return this.techniqueMeditationService.techniqueData();
  }
}