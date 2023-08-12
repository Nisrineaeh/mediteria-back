import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity('technique_meditation')
export class TechniqueMeditation {


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    ambiance: string;

    @Column({ type: 'text' })
    description: string;

    @Column()
    duration: number;

    @Column()
    images: string;

    @Column()
    audio: string;

    @Column('text', { array: true })
    mot_clefs: string[];
} 