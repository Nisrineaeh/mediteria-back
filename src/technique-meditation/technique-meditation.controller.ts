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

  @Get('sample')
  async getMyTechniques(){
    return[
      {
        "id": 1,
        "name": "Sérénité Zen",
        "ambiance": "Apaisante",
        "description": "Méditation pour trouver la paix intérieure et l'harmonie avec la nature.",
        "duration": "15 minutes",
        "images": "/assets/serenité.jpg",
        "audio": "/assets/audio/Serenité.mp3",
        "mot_clefs": ["Paix intérieure", "Équilibre", "Apaisement", "Nature", "Relaxation"]
      },
      {
        "id": 2,
        "name": "Voyage Cosmique",
        "ambiance": "Spatiale",
        "description": "Méditation pour explorer l'univers intérieur et se connecter à l'infini.",
        "duration": "20 minutes",
        "images": "/assets/etoile.jpg",
        "audio": "/assets/audio/Cosmique.mp3",
        "mot_clefs": ["Exploration", "Univers infini", "Ouverture d'esprit", "Connexion cosmique", "Étoiles"]
      },
      {
        "id": 3,
        "name": "Détox Numérique",
        "ambiance": "Déconnexion",
        "description": "Méditation pour se détacher du numérique et retrouver le calme intérieur.",
        "duration": "10 minutes",
        "images": "/assets/détox.jpg",
        "audio": "/assets/audio/Détox.mp3",
        "mot_clefs": ["Détente", "Déconnexion", "Calme", "Retour à soi", "Respiration"]
      },
      {
        "id": 4,
        "name": "Forêt Enchantée",
        "ambiance": "Féérique",
        "description": "Méditation pour se ressourcer au cœur d'une forêt enchantée et magique.",
        "duration": "25 minutes",
        "images": "/assets/enchante.jpg",
        "audio": "/assets/audio/Foret.mp3",
        "mot_clefs": ["Ressourcement", "Magie", "Évasion", "Nature féérique", "Tranquillité"]
      },
      {
        "id": 5,
        "name": "Plongée Abyssale",
        "ambiance": "Océan",
        "description": "Méditation pour respirer correctement et plonger au cœur des abysses marins.",
        "duration": "22 minutes",
        "images": "/assets/ocean.jpg",
        "audio": "/assets/audio/Eau.mp3",
        "mot_clefs": ["Respiration", "Profondeur", "Océan", "Découverte marine", "Exploration"]
      },
      {
        "id": 6,
        "name": "Flux Créatif",
        "ambiance": "Créativité",
        "description": "Méditation pour stimuler la créativité et libérer son potentiel artistique.",
        "duration": "30 minutes",
        "images": "/assets/creativite.jpg",
        "audio": "/assets/audio/Creativité.mp3",
        "mot_clefs": ["Inspiration", "Expressivité", "Créativité", "Libération", "Potentiel artistique"]
      }
    ]
  }

}
