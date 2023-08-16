import { TechniqueMeditation } from 'src/technique-meditation/entities/technique-meditation.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity('utilisateurs')
export class Utilisateur {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 200, nullable: true })
    nom: string;

    @Column({ length: 200, nullable: true })
    prenom: string;

    @Column({ length: 200, unique: true, nullable: true })
    username: string;

    @Column({ length: 200, nullable: true })
    email: string;

    @Column({ length: 200, nullable: true })
    mot_de_passe: string;

    @Column({ nullable: true })
    date: Date;

    @ManyToMany(() => TechniqueMeditation, (TechniqueForUser) => TechniqueForUser.id)
    @JoinTable({ name: 'technique_user' }) technique_user: TechniqueMeditation[];

}
