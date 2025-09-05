import { Education, Certification, ProfessionalDevelopment } from '@/lib/types/content';

export const educationData: Education[] = [
  {
    institution: "Université Hassan II",
    degree: "Master en Informatique",
    field: "Ingénierie Logicielle et Développement Mobile",
    period: "2015 - 2017",
    location: "Casablanca, Maroc",
    description: [
      "Spécialisé en architecture logicielle et développement d'applications mobiles",
      "Cours avancés complétés en algorithmes, structures de données et conception de systèmes",
      "Thèse : 'Frameworks de Développement Mobile Multi-plateformes : Analyse de Performance'",
      "Diplômé avec Très Bien (Moyenne : 3.8/4.0)"
    ],
    achievements: [
      "Liste d'honneur du Doyen pour l'Excellence Académique (2016-2017)",
      "Prix de la Meilleure Application Mobile pour Système de Gestion de Bibliothèque Android",
      "Assistant de Recherche au Laboratoire d'Informatique Mobile"
    ],
    relevantCoursework: [
      "Développement d'Applications Mobiles",
      "Architecture Logicielle et Patrons de Conception",
      "Systèmes de Gestion de Bases de Données",
      "Réseaux Informatiques et Sécurité",
      "Intelligence Artificielle et Apprentissage Automatique",
      "Interaction Homme-Machine"
    ]
  },
  {
    institution: "Université Mohammed V",
    degree: "Licence en Informatique",
    field: "Technologies de l'Information",
    period: "2012 - 2015",
    location: "Rabat, Maroc",
    description: [
      "Fondation en informatique fondamentale et programmation",
      "Accent fort sur les mathématiques, algorithmes et résolution de problèmes",
      "Projets d'équipe multiples complétés utilisant divers langages de programmation",
      "Diplômé Magna Cum Laude (Moyenne : 3.6/4.0)"
    ],
    achievements: [
      "Diplôme Magna Cum Laude avec mention",
      "Vainqueur du Concours de Programmation Universitaire (2014)",
      "Président de l'Association des Étudiants en Informatique (2014-2015)"
    ],
    relevantCoursework: [
      "Structures de Données et Algorithmes",
      "Programmation Orientée Objet (Java, C++)",
      "Développement Web (HTML, CSS, JavaScript)",
      "Conception de Bases de Données et SQL",
      "Systèmes d'Exploitation",
      "Principes de l'Ingénierie Logicielle"
    ]
  }
];

export const certifications: Certification[] = [
  {
    name: "AWS Développeur Certifié - Associé",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-DEV-2023-001",
    description: "Démontre la compétence dans le développement et la maintenance d'applications AWS"
  },
  {
    name: "Google Développeur Android Associé",
    issuer: "Google",
    date: "2022", 
    credentialId: "GAAD-2022-001",
    description: "Valide les compétences de développement Android et les meilleures pratiques"
  },
  {
    name: "Certification Spring Professionnelle",
    issuer: "Pivotal",
    date: "2021",
    credentialId: "SPRING-PRO-2021-001",
    description: "Expertise avancée en Spring Framework et Spring Boot"
  }
];

export const professionalDevelopment: ProfessionalDevelopment[] = [
  {
    title: "Patterns d'Architecture Mobile Avancée",
    provider: "Mobile Dev Summit",
    date: "2024",
    duration: "40 heures",
    description: "Plongée profonde dans MVVM, Architecture Propre et patterns d'injection de dépendance"
  },
  {
    title: "Développement d'Applications Cloud-Natives", 
    provider: "AWS Training",
    date: "2023",
    duration: "60 heures",
    description: "Microservices, conteneurisation et architectures serverless"
  },
  {
    title: "Leadership dans les Équipes Tech",
    provider: "Tech Leadership Institute",
    date: "2022",
    duration: "30 heures", 
    description: "Gestion d'équipe, mentorat et prise de décisions techniques"
  }
];