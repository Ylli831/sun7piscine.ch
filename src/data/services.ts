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
      {
        title: "Notre approche",
        description: `Notre approche repose sur l’expérience, la rigueur et la confiance.\nChaque piscine est unique : nous adaptons nos interventions pour garantir une eau saine, claire et équilibrée toute l’année.`
      },
      {
        title: "Diagnostic initial 🔍",
        description: `Chaque intervention débute par une analyse complète de votre installation:\n\nContrôle de la qualité de l’eau (pH, chlore, TAC, stabilisant, etc.)\n\nVérification du système de filtration, du local technique et des pompes\n\nInspection visuelle du bassin, des joints et des équipements\n\nObjectif : établir un état des lieux précis pour un entretien sur mesure.`
      },
      {
        title: "Entretien préventif 🧼",
        description: `Nous privilégions un entretien régulier et préventif pour éviter les pannes et les eaux troubles :\n\nNettoyage complet du bassin, des filtres et des skimmers\n\nRéglages et contrôle des automatismes\n\nUtilisation de produits adaptés à votre système (manuel ou automatique)\n\nRésultat : une eau claire, équilibrée et sans surconsommation de produits.`
      },
      {
        title: "Interventions saisonnières 🌞❄",
        description: `Nos prestations sont adaptées à chaque période de l’année :\n\nPrintemps : remise en route du bassin, contrôle des équipements et ajustement du traitement\n\nÉté : suivi régulier, nettoyage approfondi, maintien des paramètres de l’eau\n\nAutomne : hivernage, abaissement du niveau d’eau, mise en sécurité du matériel\n\nBénéfice : des interventions planifiées pour prolonger la durée de vie de vos installations.`
      },
      {
        title: "Sécurité & conformité 🧪",
        description: `Nous intervenons dans le respect des normes suisses et des règles d’hygiène :\n\nPermis officiel pour l’emploi de produits biocides destinés à la désinfection de l’eau des piscines publiques\n\nProduits agréés et dosés avec précision\n\nRespect des protocoles de sécurité pour piscines privées et publiques\n\nGarantie : un service professionnel, conforme et sûr.`
      },
      {
        title: "Suivi personnalisé 🤝",
        description: `Parce que chaque client est unique, nous assurons un accompagnement personnalisé :\n\nConseils techniques et pédagogiques pour simplifier votre entretien\n\nFiches de suivi ou rapports d’intervention (sur demande)\n\nDisponibilité rapide en cas de besoin ou d’urgence\n\nNotre engagement : la confiance d’un artisan local, l’expérience d’un professionnel.`
      }
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
    image: "/sun7piscine-photos/hero-renovation.jpeg",
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
    process: [
      { title: "Diagnostic initial", description: "Analyse complète." },
      { title: "Interventions régulières", description: "Nettoyage et réglages." },
      { title: "Permis", description: "Pour l'emploi de produits biocides pour la désinfection de l'eau des piscines publiques." }
    ],
    gallery: getServiceGallery("renovation"),
    hero: { eyebrow: "", heading: "Rénovation sur mesure", subheading: "Esthétique, confort et performance." },
    metaDescription: "SUN7 Rénovation piscine."
  },
  {
    slug: "construction",
    title: "Construction Sur-Mesure",
    subtitle: "Création d'Exception",
    excerpt: "Piscines sur-mesure de A à Z",
    description: "Conception et réalisation de piscines uniques.",
    icon: Hammer,
    image: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_6770.jpeg",
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
    process: [
      {
        title: "Étude & conception 💡",
        description: `Tout commence par une analyse approfondie de votre terrain et de vos attentes :

Étude du sol, de l’exposition et des contraintes techniques

Conseils personnalisés sur le type de piscine (béton, coque, inox, miroir, etc.)

Élaboration d’un plan détaillé et modélisation 3D réaliste de votre futur bassin


Objectif : concevoir une piscine parfaitement adaptée à votre environnement et à votre style de vie.`
      },
      {
        title: "Préparation & implantation 🧱",
        description: `Une fois le projet validé, nous procédons à la préparation minutieuse du chantier :

Terrassement précis et installation des réseaux hydrauliques et électriques

Pose de la structure (coffrage béton, coque polyester ou inox)

Mise en place du système de filtration, des canalisations et des équipements


Résultat : une base solide, durable et conforme aux normes suisses de sécurité.`
      },
      {
        title: "Finitions & équipements haut de gamme 🌿",
        description: `Nous apportons un soin particulier à chaque détail pour sublimer votre bassin :

Pose des margelles, carrelages ou PVC armé renforcé

Installation de systèmes de chauffage, éclairage LED intelligent, nage à contre-courant, etc.

Aménagements personnalisés : escaliers, plage immergée, couverture automatique, pool house


But : allier esthétisme, confort et performance.`
      },
      {
        title: "Mise en service & contrôle qualité 💧",
        description: `Avant la remise des clés, nous assurons :

Le remplissage et la mise en route du système complet

Les réglages hydrauliques, thermiques et automatiques

Un contrôle qualité final pour garantir le bon fonctionnement de chaque élément


Engagement : vous livrer une piscine prête à l’emploi, sûre et parfaitement équilibrée.`
      },
      {
        title: "Accompagnement & garantie 🤝",
        description: `Notre relation ne s’arrête pas à la livraison :

Formation à l’utilisation et à l’entretien du bassin

Service après-vente rapide et à l’écoute

Garantie sur la structure, l’étanchéité et les équipements


Notre promesse : une piscine conçue pour durer, avec le savoir-faire d’un artisan de confiance.`
      }
    ],
    gallery: getServiceGallery("construction"),
    hero: { eyebrow: "", heading: "Construction de piscines sur-mesure", subheading: "Esthétique, durabilité et performance." },
    metaDescription: "SUN7 Construction de piscines."
  },
  {
    slug: "securite",
    title: "Sécurité Avancée",
    subtitle: "Protection Maximale",
    excerpt: "Systèmes de sécurité intelligents",
    description: "Solutions de sécurité de pointe conformes aux normes suisses.",
    icon: Shield,
    image: "/sun7piscine-photos/hero-security.jpeg",
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
    process: [
      {
        title: "Diagnostic & analyse du site 🔍",
        description: `Chaque projet commence par une évaluation complète de votre installation :

Mesures précises du bassin et des abords

Vérification des points d’ancrage, des margelles et du local technique

Identification des besoins spécifiques selon le type de couverture souhaité (manuelle, automatique, solaire, chauffante, etc.)


Objectif : déterminer la solution de sécurité la plus adaptée et conforme aux exigences légales.`
      },
      {
        title: "Étude technique & conception sur mesure 🧩",
        description: `Nous concevons votre couverture en fonction de vos contraintes et de votre usage :

Choix du modèle, des matériaux et du système de motorisation

Adaptation aux formes spéciales, escaliers ou plages immergées

Présentation d’un devis clair et d’un plan d’installation personnalisé


Résultat : une couverture parfaitement intégrée, esthétique et fonctionnelle.`
      },
      {
        title: "Installation certifiée 🛠",
        description: `Nos techniciens agréés assurent une pose minutieuse et sécurisée :

Installation des rails, motorisations et systèmes d’enroulement

Réglages de fin de course, alignement et tension des lames ou toiles

Tests de sécurité avant mise en service


Engagement : une installation propre, conforme et garantie.`
      },
      {
        title: "Mise aux normes & contrôles de conformité ✅",
        description: `Nous veillons à ce que chaque dispositif respecte les normes suisses et européennes de sécurité (SN EN 16582 / 16713) :

Vérification de la résistance, du verrouillage et des fixations

Contrôle des automatismes et des dispositifs anti-chute

Remise d’un rapport de conformité si nécessaire


But : assurer une sécurité totale pour les enfants, animaux et utilisateurs.`
      },
      {
        title: "Suivi & maintenance régulière 🔧",
        description: `Pour préserver la performance et la longévité de vos équipements :

Entretien périodique, nettoyage et réglages techniques

Remplacement ou réparation de pièces d’usure

Conseils d’utilisation et de protection saisonnière (bâches d’hiver, couvertures 4 saisons, etc.)


Notre promesse : votre piscine reste sûre, protégée et en parfait état tout au long de l’année.`
      }
    ],
    gallery: getServiceGallery("securite"),
    hero: { eyebrow: "", heading: "Sécurisez votre piscine", subheading: "Dispositifs discrets et intelligents." },
    metaDescription: "Solutions de sécurité piscine SUN7."
  }
];

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((s) => s.slug === slug) ?? null;
}

