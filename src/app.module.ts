import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from './utilisateur/entities/utilisateur.entity';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { TechniqueMeditationModule } from './technique-meditation/technique-meditation.module';
import { TechniqueMeditation } from './technique-meditation/entities/technique-meditation.entity';
import * as dotenv from 'dotenv';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { TechniqueMeditationService } from './technique-meditation/technique-meditation.service';


dotenv.config({path: '.env'})

@Module({
  imports: [
    TypeOrmModule.forFeature([TechniqueMeditation]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Utilisateur, TechniqueMeditation],
      synchronize: true,
      dropSchema: true,
    }),
    UtilisateurModule,
    TechniqueMeditationModule,
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {expiresIn: '2h'},
    })
  
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, TechniqueMeditationService],
  exports: [TechniqueMeditationService],
})
export class AppModule {}
