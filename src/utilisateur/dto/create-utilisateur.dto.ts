import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateUtilisateurDto {
    @IsNotEmpty()
    nom: string;

    @IsNotEmpty()
    prenom: string;

    @IsNotEmpty()
    username: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(8)
    mot_de_passe: string;
}


