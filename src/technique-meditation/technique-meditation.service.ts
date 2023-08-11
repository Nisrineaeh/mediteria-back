import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateTechniqueMeditationDto } from './dto/create-technique-meditation.dto';
import { UpdateTechniqueMeditationDto } from './dto/update-technique-meditation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TechniqueMeditation } from './entities/technique-meditation.entity';
import { Repository } from 'typeorm';


@Injectable()
export class TechniqueMeditationService {
  constructor(
    @InjectRepository(TechniqueMeditation)
    private techniqueMeditationRepository: Repository<TechniqueMeditation>,
  ) { }

  async create(createTechniqueMeditationDto: CreateTechniqueMeditationDto): Promise<TechniqueMeditation> {
    try {
      const nouvelleTechnique = this.techniqueMeditationRepository.create(createTechniqueMeditationDto);
      return this.techniqueMeditationRepository.save(nouvelleTechnique);
    } catch (error) {
      throw new Error('Erreur survenue lors de la création de la technique de méditation.');
    }
  }

  async findAll(): Promise<TechniqueMeditation[]> {
    return await this.techniqueMeditationRepository.find();
  }

  async findOne(id: number): Promise<TechniqueMeditation> {
    const technique = await this.techniqueMeditationRepository.findOne({ where: { id: id } });
    if (!technique) throw new NotFoundException(`La technique de méditation avec l'ID ${id} n'existe pas.`);
    return technique;
  }

  async update(id: number, updateTechniqueMeditationDto: UpdateTechniqueMeditationDto): Promise<TechniqueMeditation> {
    const techniqueToUpdate = await this.findOne(id);
    Object.assign(techniqueToUpdate, updateTechniqueMeditationDto);
    return await this.techniqueMeditationRepository.save(techniqueToUpdate);
  }

  async remove(id: number): Promise<void> {
    try {
      const technique = await this.findOne(id);
      await this.techniqueMeditationRepository.remove(technique);
      console.log('Technique de méditation supprimée avec succès :', technique);
    } catch (error) {
      console.error('Erreur lors de la suppression de la technique de méditation :', error);
      throw new InternalServerErrorException('Une erreur est survenue lors de la suppression de la technique de méditation.');
    }
  }

  async techniqueData(){
    const techniques = [{
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
      }]
    console.log('Techniques à enregistrer:', techniques); // Affiche les techniques à enregistrer

    try {
      // Pour chaque technique, vérifiez si elle existe déjà
      for (const technique of techniques) {
        const exists = await this.techniqueMeditationRepository.findOne({ where: { name: technique.name } });
        if (exists) {
          console.log(`Technique avec le nom "${technique.name}" existe déjà.`);
          continue; // Passez à la technique suivante si celle-ci existe déjà
        }
        await this.techniqueMeditationRepository.save(technique);
        console.log('Technique enregistrée:', technique);
      }
    } catch (error) {
      console.error(`Erreur lors de l'enregistrement des techniques: `, error);
      throw new InternalServerErrorException(`Une erreur est survenue lors de l'enregistrement des techniques.`);
    }
}}