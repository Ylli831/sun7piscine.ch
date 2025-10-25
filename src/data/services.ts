import { Hammer, LucideIcon, Settings, Wrench, Shield } from "lucide-react";
import { getServiceGallery, getServicePrimary } from "./service-image-map";

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
  hero: { eyebrow: string; heading: string; subheading: string };
  metaDescription: string;
};

export const serviceDetails: readonly ServiceDetail[] = [
  {
    slug: "entretien",
    title: "Entretien & Maintenance",
    subtitle: "",
    excerpt: "Entretien professionnel toute l'année",
    description: "Un service d'entretien complet qui maintient votre piscine dans un état parfait toute l'année.",
    icon: Settings,
    image: getServicePrimary("entretien") ?? "/sun7piscine-photos/entreitenmaintenance.jpg",
    features: [
      "Entretien annuel",
      "Mise en route (printemps)",
      "Hivernage (automne)",
      "Vidange",
      "Nettoyage",
      "Remplissage",
      "Traitement manuel",
      "Traitement automatique (Sel, Chlore, Brome, Oxygène actif, Etc.)",
      "Système de filtration",
      "Conseils en entretien"
    ],
    highlights: [
      { title: "Contrats modulables", description: "Formules sur mesure." },
      { title: "Suivi digitalisé", description: "Rapports photo et historique." },
      { title: "Expertise professionnelle", description: "Techniciens certifiés." }
    ],
    process: [
      { title: "Diagnostic initial", description: "Analyse complète." },
      { title: "Interventions régulières", description: "Nettoyage et réglages." }
    ],
    gallery: getServiceGallery("entretien"),
    hero: { eyebrow: "Entretien & Maintenance", heading: "Entretien & Maintenance", subheading: "Interventions rapide discrète et soignée." },
    metaDescription: "Service d'entretien et maintenance de piscines SUN7."
  },
  {
    slug: "renovation",
    title: "Rénovation",
    subtitle: "Transformation Totale",
    excerpt: "Transformations complètes et modernisation",
    description: "Redonnez vie à votre piscine avec nos solutions de rénovation haut de gamme.",
    icon: Wrench,
    image: getServicePrimary("renovation") ?? "/sun7piscine-photos/before and after/para edhe pas/Apres-Renovation-1.jpeg",
    features: [
      "PVC armé renforcé",
      "Éclairage LED intelligent",
      "Nage à contre-courant",
      "Pompe à chaleur",
      "Aménagements (escaliers, etc.)"
    ],
    highlights: [
      { title: "Design repensé", description: "Nouvelle identité visuelle." },
      { title: "Matériaux premium", description: "Qualité et durabilité." },
      { title: "Garantie étendue", description: "Protection longue durée." }
    ],
    process: [],
    gallery: getServiceGallery("renovation"),
    hero: { eyebrow: "Transformation totale", heading: "Rénovation sur mesure", subheading: "Esthétique, confort et performance." },
    metaDescription: "SUN7 Rénovation piscine."
  },
  {
    slug: "construction",
    title: "Construction Sur-Mesure",
    subtitle: "Création d'Exception",
    excerpt: "Piscines sur-mesure de A à Z",
    description: "Conception et réalisation de piscines uniques.",
    icon: Hammer,
    image: getServicePrimary("construction") ?? "/sun7piscine-photos/Rénovation étanchéité de piscine en PVC ARMÉ/Pvc/IMG_4507.jpeg",
    features: [
      "Piscine béton skimmer",
      "Piscine à débordement",
      "Piscine miroir",
      "Piscine d'intérieur",
      "Piscine coque polyester",
      "Piscine inox",
      "Piscine avec plage immergée",
      "Piscines collectives",
      "Mini piscine",
      "Couloir de nage"
    ],
    highlights: [
      { title: "Design architectural", description: "Intégration au paysage." },
      { title: "Projet clé en main", description: "De A à Z." },
      { title: "Suivi personnalisé", description: "Chef de projet dédié." }
    ],
    process: [{ title: "Étude & conception", description: "Modélisation 3D." }],
    gallery: getServiceGallery("construction"),
    hero: { eyebrow: "Création d'Exception", heading: "Construction de piscines sur-mesure", subheading: "Esthétique, durabilité et performance." },
    metaDescription: "SUN7 Construction de piscines."
  },
  {
    slug: "securite",
    title: "Sécurité Avancée",
    subtitle: "Protection Maximale",
    excerpt: "Systèmes de sécurité intelligents",
    description: "Solutions de sécurité de pointe conformes aux normes suisses.",
    icon: Shield,
    image: getServicePrimary("securite") ?? "/sun7piscine-photos/Couverture de sécurité et Solaire/IMG_3465.JPG",
    features: [
      "Diagnostic",
      "Couverture sur mesure",
      "Mise aux normes",
      "Accessoires : installation et maintenance de couvertures de sécurité automatiques et manuelles Solaires (chauffantes)",
      "Bâches d'hiver",
      "Bâches 4 saison"
    ],
    highlights: [
      { title: "Conformité totale", description: "Normes et certification." },
      { title: "Protection enfants", description: "Sécurité maximale." },
      { title: "Installation rapide", description: "Intervention efficace." }
    ],
    process: [{ title: "Installation certifiée", description: "Pose par techniciens agréés." }],
    gallery: getServiceGallery("securite"),
    hero: { eyebrow: "Protection maximale", heading: "Sécurisez votre piscine", subheading: "Dispositifs discrets et intelligents." },
    metaDescription: "Solutions de sécurité piscine SUN7."
  }
];

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((s) => s.slug === slug) ?? null;
}

