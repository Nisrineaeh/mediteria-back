import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly jwtService: JwtService,
        @InjectRepository(Utilisateur) private readonly userRepository: Repository<Utilisateur>,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    async validate(payload: any) {
        const { sub } = payload;
        const user = await this.userRepository.findOne(sub);

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}