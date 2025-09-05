import { Project } from '@/lib/types/content';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "MapSync - Geospatial Data Management Platform",
    description: "Enterprise-grade geospatial data management platform serving 100,000+ daily users with 99.9% uptime. Built with Spring Boot microservices architecture and PostGIS for advanced spatial operations.",
    longDescription: "A comprehensive geospatial data management platform that revolutionized how organizations handle location-based data. The system processes millions of geographic data points daily, providing real-time spatial analysis, automated data validation, and seamless integration with existing GIS workflows.",
    image: "/images/mapsync.svg",
    technologies: ["Spring Boot", "PostgreSQL", "PostGIS", "Kotlin", "React", "AWS"],
    category: "Full Stack",
    featured: true,
    demoUrl: "https://demo.mapsync.com",
    githubUrl: "https://github.com/user/mapsync",
    highlights: [
      "Processed 10M+ geographic data points daily",
      "Achieved 99.9% system uptime",
      "Reduced data processing time by 60%",
      "Served 100,000+ daily active users"
    ],
    metrics: {
      users: "100K+",
      uptime: "99.9%", 
      performance: "60% faster",
      scale: "10M+ records"
    }
  },
  {
    id: 2,
    title: "Mobile Banking App - Consumer Finance Platform",
    description: "Cross-platform mobile banking application built with Flutter, serving 50,000+ users with comprehensive financial management features and bank-grade security.",
    longDescription: "A feature-rich mobile banking application that provides users with complete control over their financial lives. The app includes account management, transaction history, bill payments, fund transfers, and advanced budgeting tools, all secured with biometric authentication and end-to-end encryption.",
    image: "/images/banking-app.svg",
    technologies: ["Flutter", "Dart", "Firebase", "Node.js", "MongoDB", "Stripe API"],
    category: "Mobile",
    featured: true,
    demoUrl: "https://demo.bankingapp.com",
    highlights: [
      "50,000+ active users",
      "Bank-grade security implementation",
      "Real-time transaction processing",
      "4.8/5 app store rating"
    ],
    metrics: {
      users: "50K+",
      rating: "4.8/5",
      security: "Bank-grade",
      features: "20+ modules"
    }
  }
  // More projects...
];