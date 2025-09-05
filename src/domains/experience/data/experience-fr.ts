import { Experience } from '@/lib/types/content';

export const experienceData: Experience[] = [
  {
    company: "Wlidaty",
    role: "Senior Flutter Developer",
    period: "Feb 2025 - Present",
    description: [
      "Led full-stack development of a specialized consignment management platform designed to streamline inventory submission, approval workflows, and commission processing for businesses operating on Shopify Plus, serving 100+ vendors and processing 1,000+ product submissions monthly",
      "Architected and implemented innovative \"thin database\" approach to minimize Shopify data duplication, substantially reducing API calls and significantly improving system performance through intelligent caching and smart invalidation rules",
      "Developed comprehensive React frontend with Tailwind CSS featuring intuitive vendor dashboard, real-time sales metrics, and advanced product management tools, achieving excellent user satisfaction based on vendor feedback",
      "Built robust Node.js/Express.js backend with PostgreSQL database, implementing RESTful API design supporting complex commission structures including tiered rates, category-specific rates, and time-sensitive rules",
      "Integrated deep Shopify Admin and Storefront API connections with real-time webhook processing for instant order updates, maintaining exceptional webhook delivery success rate",
      "Designed and implemented multi-stage product approval workflows with comprehensive review system, reducing approval time from 48 hours to 6 hours through automation",
      "Created automated payout processing system with financial controls and reconciliation tools, handling $50,000+ monthly vendor payouts with exceptional accuracy",
      "Developed comprehensive reporting and analytics dashboard providing business intelligence insights, significantly increasing operational efficiency",
      "Implemented OAuth 2.0 authentication with JWT token management ensuring secure vendor access and admin controls",
      "Built responsive React components using modern hooks and context API, ensuring optimal performance across desktop and mobile devices",
      "Established comprehensive error handling and retry mechanisms, achieving exceptional system uptime during peak processing periods"
    ],
    biggestContribution: [
      "Architected and delivered the complete consignment management platform from concept to production within 6 months, directly enabling the company to dramatically scale their consignment business operations. The innovative \"thin database\" architecture I designed became the foundation for the entire platform, substantially reducing infrastructure costs while maintaining real-time synchronization with Shopify.",
      "Additionally, implemented the automated commission calculation system that processes complex multi-tier commission structures, eliminating manual calculations and dramatically reducing processing errors. This contribution was crucial because it transformed manual, error-prone processes into automated, scalable systems that directly support the company's core business model and revenue generation."
    ],
    fullTechStack: [
      "React 18", "JavaScript ES6+", "Tailwind CSS", "React Context API", "React Router DOM",
      "Node.js", "Express.js", "PostgreSQL", "Shopify Admin API", "Shopify Storefront API",
      "OAuth 2.0", "JWT", "Webhook Integration", "REST API Design", "ESLint", "PostCSS",
      "Git/GitHub", "Vercel/Netlify", "Docker"
    ] 
  },
  {
    company: "GeoTech Solutions",
    role: "Senior Mobile Developer & Technical Lead",
    period: "Jan 2020 - Jan 2025",
    description: [
      "Led a team of 12+ developers in building scalable geospatial applications serving 100,000+ daily users with 99.9% uptime",
      "Architected and developed native Android applications using Kotlin, implementing advanced geospatial features with PostGIS integration",
      "Built enterprise-grade systems processing massive spatial datasets with real-time visualization and analysis capabilities"
    ],
    biggestContribution: [
      "Designed and implemented the core geospatial processing engine that became the foundation for all company products, supporting millions of spatial queries daily",
      "Led the migration from legacy systems to modern microservices architecture, reducing system response time by 60% and enabling horizontal scaling"
    ],
    fullTechStack: [
      "Kotlin", "Android SDK", "Java", "Spring Boot", "PostGIS", "PostgreSQL", 
      "React", "JavaScript", "Docker", "Kubernetes", "AWS", "Git"
    ]
  },
  {
    company: "MobileTech Innovation",
    role: "Flutter Developer",
    period: "Jun 2018 - Dec 2019",
    description: [
      "Developed cross-platform mobile applications using Flutter, serving diverse client requirements across multiple industries",
      "Collaborated with design teams to implement pixel-perfect UI/UX designs with smooth animations and responsive layouts",
      "Integrated third-party APIs and payment systems, ensuring secure and reliable transaction processing"
    ],
    biggestContribution: [
      "Built the company's first Flutter-based e-commerce application that generated $500K+ revenue in first year",
      "Established Flutter development best practices and coding standards adopted across the development team"
    ],
    fullTechStack: [
      "Flutter", "Dart", "Firebase", "REST APIs", "SQLite", "Git", 
      "Android Studio", "VS Code", "Figma", "Postman"
    ]
  },
  {
    company: "StartupHub",
    role: "Full Stack Developer",
    period: "Mar 2016 - May 2018",
    description: [
      "Built end-to-end web applications using React and Node.js for various startup clients",
      "Developed RESTful APIs and integrated with third-party services for payment processing and analytics",
      "Implemented responsive designs and optimized application performance for better user experience"
    ],
    biggestContribution: [
      "Created a scalable SaaS platform architecture that supported multiple client tenants with customizable features",
      "Optimized database queries and caching strategies, improving application response time by 40%"
    ],
    fullTechStack: [
      "React", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5", 
      "CSS3", "Bootstrap", "Git", "Heroku", "AWS S3"
    ]
  }
];