import { Hammer, LucideIcon, Settings, Shield, Wrench } from "lucide-react";

export type ServiceDetail = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
  highlights: { title: string; description: string }[];
  process: { title: string; description: string }[];
  gallery: string[];
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
  };
  metaDescription: string;
};

export const serviceDetails: readonly ServiceDetail[] = [
  {
    slug: "entretien",
    title: "Entretien & Maintenance",
    subtitle: "Service Signature",
    excerpt: "Entretien professionnel toute l'année",
    description:
      "Un service d'entretien complet qui maintient votre piscine dans un état parfait toute l'année.",
    icon: Settings,
    image: "/sun7piscine-images/pool22-cool.jpg",
    features: [
      "Entretien annuel complet",
      "Mise en route printanière",
      "Hivernage professionnel",
      "Traitement eau avancé"
    ],
    highlights: [
      {
        title: "Contrats modulables",
        description: "Formules sur mesure selon la fréquence souhaitée et le niveau d'assistance."
      },
      {
        title: "Techniciens certifiés",
        description: "Équipe formée aux dernières normes d'équilibrage chimique et de sécurité."
      },
      {
        title: "Suivi digitalisé",
        description: "Historique des interventions, rapports photo et recommandations disponibles en ligne."
      }
    ],
    process: [
      {
        title: "Diagnostic initial",
        description: "Analyse complète du bassin, des équipements et de la qualité de l'eau."
      },
      {
        title: "Plan d'entretien",
        description: "Définition d'un calendrier adapté à votre rythme d'utilisation et à la saison."
      },
      {
        title: "Interventions régulières",
        description: "Nettoyage, réglages, contrôles techniques et ajustement des paramètres de l'eau."
      },
      {
        title: "Reporting & conseils",
        description: "Compte rendu détaillé après chaque visite avec recommandations personnalisées."
      }
    ],
    gallery: [
      "/sun7piscine-images/pool22-cool.jpg",
      "/sun7piscine-images/pool34-cool.jpg",
      "/sun7piscine-images/pool35.jpg"
    ],
    hero: {
      eyebrow: "Service Signature",
      heading: "Entretien & Maintenance haut de gamme",
      subheading:
        "Nous veillons sur votre piscine toute l'année avec des interventions précises, discrètes et documentées."
    },
    metaDescription:
      "Service d'entretien et maintenance de piscines SUN7 : contrats sur mesure, suivi digitalisé et techniciens certifiés en Suisse Romande."
  },
  {
    slug: "renovation",
    title: "Rénovation",
    subtitle: "Transformation Totale",
    excerpt: "Transformations complètes et modernisation",
    description:
      "Redonnez vie à votre piscine avec nos solutions de rénovation haut de gamme. Technologies modernes et finitions luxueuses.",
    icon: Wrench,
    image: "/sun7piscine-images/pool-after3.jpg",
    features: [
      "PVC armé renforcé",
      "Éclairage LED intelligent",
      "Pompe à chaleur haute performance",
      "Design contemporain"
    ],
    highlights: [
      {
        title: "Design repensé",
        description: "Nouvelle identité visuelle, du bassin aux margelles en passant par les espaces lounge."
      },
      {
        title: "Technologies smart",
        description: "Pilotage à distance, automatisation de la filtration et intégration domotique."
      },
      {
        title: "Matériaux premium",
        description: "Revêtements résistants, équipements basse consommation et finitions haut de gamme."
      }
    ],
    process: [
      {
        title: "Audit & vision",
        description: "Inventaire technique, mesures et maquette 3D pour visualiser la transformation."
      },
      {
        title: "Sélection des matériaux",
        description: "Choix des revêtements, éclairages, couvertures et accessoires en showroom."
      },
      {
        title: "Chantier maîtrisé",
        description: "Interventions coordonnées avec protection du site et respect des délais annoncés."
      },
      {
        title: "Livraison & garantie",
        description: "Tests complets, formation utilisateur et garantie SUN7 sur l'ensemble des travaux."
      }
    ],
    gallery: [
      "/sun7piscine-images/pool-after1.jpg",
      "/sun7piscine-images/pool-after2.jpg",
      "/sun7piscine-images/pool-after3.jpg"
    ],
    hero: {
      eyebrow: "Transformation totale",
      heading: "Rénovation sur mesure de votre piscine",
      subheading:
        "Modernisez votre bassin avec des solutions innovantes qui allient esthétique, confort et performance."
    },
    metaDescription:
      "SUN7 Rénovation piscine : transformation complète, matériaux premium et technologies intelligentes pour piscines en Suisse Romande."
  },
  {
    slug: "construction",
    title: "Construction Sur-Mesure",
    subtitle: "Création d'Exception",
    excerpt: "Piscines sur-mesure de A à Z",
    description:
      "Conception et réalisation de piscines uniques, parfaitement adaptées à votre environnement et vos désirs.",
    icon: Hammer,
    image: "/sun7piscine-images/pool31-cool.jpg",
    features: [
      "Design 3D personnalisé",
      "Piscine à débordement",
      "Spa intégré",
      "Suivi personnalisé continu"
    ],
    highlights: [
      {
        title: "Design architectural",
        description: "Intégration parfaite au paysage, aux matériaux de la maison et à votre style de vie."
      },
      {
        title: "Ingénierie durable",
        description: "Structures béton armé, filtrations performantes et solutions énergétiques optimisées."
      },
      {
        title: "Accompagnement complet",
        description: "Un interlocuteur unique, du permis de construire à la mise en eau."
      }
    ],
    process: [
      {
        title: "Étude & conception",
        description: "Analyse du terrain, esquisses, modélisation 3D et budget détaillé."
      },
      {
        title: "Préparation du site",
        description: "Terrassement, fondations, réseaux techniques et sécurisation du chantier."
      },
      {
        title: "Construction",
        description: "Structure, revêtements, équipements, finitions et tests qualité."
      },
      {
        title: "Mise en service",
        description: "Remplissage, équilibrage, réglages domotiques et formation complète."
      }
    ],
    gallery: [
      "/sun7piscine-images/pool31-cool.jpg",
      "/sun7piscine-images/pool32-cool.jpg",
      "/sun7piscine-images/pool33-cool.jpg"
    ],
    hero: {
      eyebrow: "Création d'exception",
      heading: "Piscines sur-mesure signées SUN7",
      subheading:
        "Des bassins d'architecte pensés pour devenir la pièce maîtresse de votre propriété."
    },
    metaDescription:
      "Construction de piscines sur-mesure SUN7 : conception 3D, matériaux d'exception et accompagnement complet en Suisse Romande."
  },
  {
    slug: "securite",
    title: "Sécurité Avancée",
    subtitle: "Protection Maximale",
    excerpt: "Systèmes de sécurité intelligents",
    description:
      "Solutions de sécurité de pointe conformes aux normes suisses les plus strictes. Protégez votre famille.",
    icon: Shield,
    image: "/sun7piscine-images/pool-covered3.jpg",
    features: [
      "Couvertures automatiques",
      "Alarmes connectées",
      "Volets haute sécurité",
      "Certification complète"
    ],
    highlights: [
      {
        title: "Conformité totale",
        description: "Solutions respectant les normes NF P90 et la réglementation suisse en vigueur."
      },
      {
        title: "Technologie connectée",
        description: "Alertes en temps réel, pilotage à distance et scénarios domotiques avancés."
      },
      {
        title: "Design intégré",
        description: "Sécurité discrète qui préserve l'esthétique de votre bassin et de ses abords."
      }
    ],
    process: [
      {
        title: "Audit de sécurité",
        description: "Analyse des accès, de la configuration du terrain et des usages familiaux."
      },
      {
        title: "Sélection des solutions",
        description: "Choix guidé entre couvertures, volets, barrières, alarmes ou combinaisons."
      },
      {
        title: "Installation certifiée",
        description: "Pose par des techniciens agréés avec tests et paramétrages complets."
      },
      {
        title: "Formation & maintenance",
        description: "Explication des protocoles de sécurité et rappel des bonnes pratiques."
      }
    ],
    gallery: [
      "/sun7piscine-images/pool-covered3.jpg",
      "/sun7piscine-images/pool-after4.jpg",
      "/sun7piscine-images/pool-after5.jpg"
    ],
    hero: {
      eyebrow: "Protection maximale",
      heading: "Sécurisez votre piscine avec SUN7",
      subheading:
        "Des dispositifs discrets et intelligents pour protéger vos proches sans compromettre l'esthétique."
    },
    metaDescription:
      "Solutions de sécurité piscine SUN7 : couvertures automatiques, alarmes connectées et installations conformes aux normes suisses."
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((service) => service.slug === slug);
}
