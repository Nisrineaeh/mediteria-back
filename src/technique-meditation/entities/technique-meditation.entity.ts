import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity('technique_meditation')
export class TechniqueMeditation {


    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 200, nullable: true })
    name: string;

    @Column({ length: 200, nullable: true })
    lien_image: string;

    @Column({ length: 200, unique: true, nullable: true })
    ambiance: string;

    @Column({ length: 200, unique: true, nullable: true })
    description: string;

    @Column({ nullable: true })
    duration: number;

    @Column({ length: 200, nullable: true })
    lien_audio: string;

    @Column({ length: 200, nullable: true })
    ressenti: string;


} 