import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TechniqueMeditationService } from './technique-meditation.service';
import { CreateTechniqueMeditationDto } from './dto/create-technique-meditation.dto';
import { UpdateTechniqueMeditationDto } from './dto/update-technique-meditation.dto';
import { TechniqueMeditation } from './entities/technique-meditation.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('technique-meditation')
export class TechniqueMeditationController {
  constructor(private readonly techniqueMeditationService: TechniqueMeditationService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createTechniqueMeditationDto: CreateTechniqueMeditationDto): Promise<TechniqueMeditation> {
    return this.techniqueMeditationService.create(createTechniqueMeditationDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<TechniqueMeditation[]> {
    return this.techniqueMeditationService.findAll();
  
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TechniqueMeditation> {
    return this.techniqueMeditationService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTechniqueMeditationDto: UpdateTechniqueMeditationDto,
  ): Promise<TechniqueMeditation> {
    return this.techniqueMeditationService.update(+id, updateTechniqueMeditationDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.techniqueMeditationService.remove(+id);
  }

  
  @Post()
  addTechnique(@Body() technique: TechniqueMeditation): Promise<TechniqueMeditation>{
    return this.techniqueMeditationService.addTechnique(technique);
  }


  }


