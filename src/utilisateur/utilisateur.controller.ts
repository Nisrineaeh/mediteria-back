import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { Utilisateur } from './entities/utilisateur.entity';

@Controller('utilisateur')
export class UtilisateurController {
  constructor(private readonly utilisateursService: UtilisateurService) { }

  @Post()
  async create(@Body() createUtilisateurDto: CreateUtilisateurDto): Promise<Utilisateur> {
    return this.utilisateursService.create(createUtilisateurDto);
  }

  @Get()
  async findAll(): Promise<Utilisateur[]> {
    return this.utilisateursService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Utilisateur> {
    return this.utilisateursService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUtilisateurDto: UpdateUtilisateurDto): Promise<Utilisateur> {
    return this.utilisateursService.update(+id, updateUtilisateurDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.utilisateursService.remove(id);
  }
}
