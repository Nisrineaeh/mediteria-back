import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Utilisateur) private utilisateursRepository: Repository<Utilisateur>,
        private readonly jwtService: JwtService){}

    async validateUser(email: string, mot_de_passe: string): Promise<any> {
        const utilisateur = await this.utilisateursRepository.findOne({
            where: { email:email }
        });

        if (utilisateur) {
            const isPasswordMatching = await bcrypt.compare(mot_de_passe, utilisateur.mot_de_passe);
            if (isPasswordMatching) {
                const { mot_de_passe, ...result } = utilisateur;
                return result;
            }
        }

        throw new UnauthorizedException();
    }

    async login(utilisateur: Utilisateur) {
        const playload = { email: utilisateur.email, sub: utilisateur.id};
        return {
            access_token: this.jwtService.sign(playload),
            user_id: utilisateur.id,
            email: utilisateur.email
        }
    }
}
