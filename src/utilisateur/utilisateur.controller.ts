import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, NotFoundException } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { Utilisateur } from './entities/utilisateur.entity';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { log } from 'console';

@Controller('utilisateur')
export class UtilisateurController {
  constructor(private readonly utilisateursService: UtilisateurService) { }

  @Post()
  async create(@Body() createUtilisateurDto: CreateUtilisateurDto): Promise<Utilisateur> {
    return this.utilisateursService.create(createUtilisateurDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Utilisateur[]> {
    return this.utilisateursService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Utilisateur> {
    return this.utilisateursService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUtilisateurDto: UpdateUtilisateurDto): Promise<Utilisateur> {
    return this.utilisateursService.update(+id, updateUtilisateurDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.utilisateursService.remove(id);
  }

  //infos de l'utilisateur connecter
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req): Promise<Utilisateur>{
    console.log(req.utilisateur)
    return this.utilisateursService.findOne(req.utilisateur.id)
  }

  // @Get('findByEmail/:email')
  // async findByEmail(@Param('email') email: string): Promise<Utilisateur> {
  //   const user = await this.utilisateursService.findByEmail(email);
  //   if (!user) {
  //     throw new NotFoundException(`Aucun utilisateur trouvé avec l'email: ${email}`);
  //   }
  //   return user;
  // }
}
