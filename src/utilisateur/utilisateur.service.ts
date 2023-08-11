import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from './entities/utilisateur.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UtilisateurService {
  constructor(
    @InjectRepository(Utilisateur)
    private readonly utilisateursRepository: Repository<Utilisateur>,
  ) { }

  async create(createUtilisateurDto: CreateUtilisateurDto): Promise<Utilisateur> {
    const { mot_de_passe, ...rest } = createUtilisateurDto;

    // Hachage du mot de passe
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(createUtilisateurDto.mot_de_passe, saltRounds);

    // Création de l'utilisateur avec le mot de passe haché
    const nouvelUtilisateur = this.utilisateursRepository.create({
      ...rest,
      mot_de_passe: hashedPassword,
    });

    return this.utilisateursRepository.save(nouvelUtilisateur);
  }

  async findAll(): Promise<Utilisateur[]> {
    return await this.utilisateursRepository.find();
  }

  async findOne(id: number): Promise<Utilisateur> {
    const user = await this.utilisateursRepository.findOne({ where: { id: id } });
    if (!user) throw new NotFoundException(`L'utilisateur ID n° ${id} n'existe pas !`);
    return user;
  }

  async update(id: number, updateUtilisateurDto: UpdateUtilisateurDto): Promise<Utilisateur> {
    const userToUpDate = await this.findOne(id);
    Object.assign(userToUpDate, updateUtilisateurDto);
    return await this.utilisateursRepository.save(userToUpDate);
  }



  async remove(id: any): Promise<void> {
    try {
      const user = await this.utilisateursRepository.findOne({ where: { id: id } });
      if (!user) {
        throw new NotFoundException(`L'utilisateur avec l'ID ${id} n'a pas été trouvé.`);
      }
      await this.utilisateursRepository.remove(user);
      console.log('Utilisateur supprimé avec succès :', user);
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur :', error);
      throw new InternalServerErrorException('Une erreur est survenue lors de la suppression de l\'utilisateur.');
    }
  }

  async findByEmailandPassword(email: string, mot_de_passe: string): Promise<Utilisateur | undefined> {
    console.log('Recherche de l\'utilisateur par e-mail et mot de passe...');
    const utilisateur = await this.utilisateursRepository.findOne({ where: { email: email } });
    if (utilisateur) {
      const match = await bcrypt.compare(mot_de_passe, utilisateur.mot_de_passe);
      if (match) {
        return utilisateur;
      }
    }

    return null; // Retourne null si l'utilisateur n'est pas trouvé ou si le mot de passe ne correspond pas.
  }

  async verifierConnexion(email: string, mdp: string): Promise<boolean> {
    const utilisateur = await this.utilisateursRepository.findOne({ where: { email: email } });
    if (utilisateur) {
      const match = await bcrypt.compare(mdp, utilisateur.mot_de_passe);
      return match;
    }
    return false; // Aucun utilisateur trouvé
  }

  async findByEmail(email: string): Promise<Utilisateur | undefined> {
    return this.utilisateursRepository.findOne({ where: { email: email } })
  }
}
