import { TechniqueMeditation } from 'src/technique-meditation/entities/technique-meditation.entity'; // Assurez-vous que ce chemin est correct
import { getRepository } from 'typeorm';

export const initialTechniques: TechniqueMeditation[] = [
    {
        id: 0,
        name: "Sérénité Zen",
        ambiance: "Apaisante",
        description: "Méditation pour trouver la paix intérieure et l'harmonie avec la nature.",
        duration: 15,
        images: "/assets/serenité.jpg",
        audio: "/assets/audio/Serenité.mp3",
        mot_clefs: ["Paix intérieure", "Équilibre", "Apaisement", "Nature", "Relaxation"]
    },
    {
        id: 1,
        name: "Voyage Cosmique",
        ambiance: "Spatiale",
        description: "Méditation pour explorer l'univers intérieur et se connecter à l'infini.",
        duration: 20,
        images: "/assets/etoile.jpg",
        audio: "/assets/audio/Cosmique.mp3",
        mot_clefs: ["Exploration", "Univers infini", "Ouverture d'esprit", "Connexion cosmique", "Étoiles"]
    },
    {
        id: 2,
        name: "Détox Numérique",
        ambiance: "Déconnexion",
        description: "Méditation pour se détacher du numérique et retrouver le calme intérieur.",
        duration: 10,
        images: "/assets/détox.jpg",
        audio: "/assets/audio/Détox.mp3",
        mot_clefs: ["Détente", "Déconnexion", "Calme", "Retour à soi", "Respiration"]
    },
    {
        id: 3,
        name: "Forêt Enchantée",
        ambiance: "Féérique",
        description: "Méditation pour se ressourcer au cœur d'une forêt enchantée et magique.",
        duration: 25,
        images: "/assets/enchante.jpg",
        audio: "/assets/audio/Foret.mp3",
        mot_clefs: ["Ressourcement", "Magie", "Évasion", "Nature féérique", "Tranquillité"]
    },
    {
        id: 4,
        name: "Plongée Abyssale",
        ambiance: "Océan",
        description: "Méditation pour respirer correctement et plonger au cœur des abysses marins.",
        duration: 22,
        images: "/assets/ocean.jpg",
        audio: "/assets/audio/Eau.mp3",
        mot_clefs: ["Respiration", "Profondeur", "Océan", "Découverte marine", "Exploration"]
    },
    {
        id: 6,
        name: "Flux Créatif",
        ambiance: "Créativité",
        description: "Méditation pour stimuler la créativité et libérer son potentiel artistique.",
        duration: 30,
        images: "/assets/creativite.jpg",
        audio: "/assets/audio/Creativité.mp3",
        mot_clefs: ["Inspiration", "Expressivité", "Créativité", "Libération", "Potentiel artistique"]
    }
    
];

