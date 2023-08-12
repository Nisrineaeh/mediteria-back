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
      throw new InternalServerErrorException('Erreur survenue lors de la création de la technique de méditation.');
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

 
}