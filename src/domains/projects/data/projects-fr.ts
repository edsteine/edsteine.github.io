import { Project } from '@/lib/types/content';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "MapSync - Plateforme de Gestion de Données Géospatiales",
    description: "Plateforme de gestion de données géospatiales de niveau entreprise desservant 100 000+ utilisateurs quotidiens avec 99,9% de disponibilité. Construite avec l'architecture microservices Spring Boot et PostGIS pour des opérations spatiales avancées.",
    longDescription: "Une plateforme complète de gestion de données géospatiales qui a révolutionné la façon dont les organisations gèrent les données basées sur la localisation. Le système traite des millions de points de données géographiques quotidiennement, fournissant une analyse spatiale en temps réel, une validation automatisée des données et une intégration transparente avec les flux de travail SIG existants.",
    image: "/images/mapsync.svg",
    technologies: ["Spring Boot", "PostgreSQL", "PostGIS", "Kotlin", "React", "AWS"],
    category: "Full Stack",
    featured: true,
    demoUrl: "https://demo.mapsync.com",
    githubUrl: "https://github.com/user/mapsync",
    highlights: [
      "Traité 10M+ points de données géographiques quotidiennement",
      "Atteint 99,9% de disponibilité système",
      "Réduit le temps de traitement des données de 60%",
      "Desservi 100 000+ utilisateurs actifs quotidiens"
    ],
    metrics: {
      users: "100K+",
      uptime: "99,9%",
      performance: "60% plus rapide",
      scale: "10M+ enregistrements"
    }
  }
  // Plus de projets...
];