import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { TechniqueMeditation } from 'src/technique-meditation/entities/technique-meditation.entity';

@Entity('meditation_sessions')
export class MeditationSession {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    duration: number;

    @ManyToOne(() => Utilisateur)
    @JoinColumn({ name: 'user_id' })
    user: Utilisateur;

    @ManyToOne(() => TechniqueMeditation)
    @JoinColumn({ name: 'technique_id' })
    technique: TechniqueMeditation;

   
}