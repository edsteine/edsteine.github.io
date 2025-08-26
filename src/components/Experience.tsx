import React from 'react';

const experienceData = [
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
    company: "GeoBat",
    role: "Senior Mobile Developer – GIS Field Systems",
    period: "May 2024 - Nov 2024",
    description: [
      "Led development of enterprise-grade geospatial data management solutions architecting comprehensive mobile and web platforms for topographic analysis and geographic data processing",
      "Architected comprehensive geospatial data management system using Angular 15 and Spring Boot, processing 10,000+ daily topographic measurements and serving 200+ field surveyors with real-time data access",
      "Developed native Android applications in Kotlin serving 200+ field surveyors with offline-first architecture, GPS integration, and real-time data synchronization capabilities",
      "Engineered scalable REST API infrastructure using Spring Boot and PostgreSQL, handling high-volume daily API requests with excellent uptime and fast response times",
      "Implemented advanced visualization engine with interactive maps, 3D terrain modeling, and multi-layer data overlays, significantly improving data interpretation accuracy",
      "Built real-time collaboration platform enabling simultaneous editing by multiple surveyors with conflict resolution and change tracking, substantially reducing coordination overhead",
      "Created modular Angular architecture with reusable components, significantly improving code maintainability and reducing development time for new features",
      "Integrated advanced mapping technologies including Google Maps SDK, OpenStreetMap, and PostGIS spatial queries, enabling precise location tracking with sub-meter accuracy",
      "Built offline data collection system allowing surveyors to work without internet connectivity, automatically syncing 500+ measurements per day when connection is restored",
      "Implemented GraphQL endpoints for complex geospatial queries, substantially reducing data transfer and improving mobile app performance on limited bandwidth",
      "Created comprehensive API documentation with Swagger/OpenAPI, streamlining integration process for new developers",
      "Optimized geospatial rendering performance achieving smooth map interactions and significantly reducing initial load times",
      "Implemented progressive web app (PWA) features enabling offline functionality and improving user retention",
      "Conducted comprehensive user research with field surveyors, implementing feedback-driven improvements that substantially increased user satisfaction"
    ],
    biggestContribution: [
      "Led cross-functional development team of 5 engineers through Agile methodologies, achieving excellent on-time delivery while significantly reducing topographic data processing time through optimized algorithms and automated validation workflows. This leadership and optimization work was crucial because it directly impacted field productivity for 200+ surveyors and enabled real-time decision-making for critical infrastructure projects across Morocco.",
      "Additionally, mentored junior developers in Angular best practices, Kotlin development, and geospatial technologies, substantially improving team code quality and established comprehensive code review process with quality gates and automated testing."
    ],
    fullTechStack: [
      "Angular 15+", "TypeScript", "RxJS", "NgRx", "Angular Material", "Spring Boot 2.7+",
      "Java 11+", "PostgreSQL 13+", "PostGIS", "Kotlin", "Android", "Google Maps SDK",
      "OpenStreetMap", "Redis", "GraphQL", "RESTful APIs", "Docker", "Kubernetes", "Git",
      "GitLab CI/CD", "Jasmine", "Karma", "Cypress", "JUnit", "MockK"
    ]
  },
  {
    company: "Implemental Systems",
    role: "Senior Mobile Architect & Smallworld Specialist",
    period: "Jun 2018 - May 2024",
    description: [
      "Led comprehensive mobile and enterprise development initiatives specializing in mission-critical applications for SmartGrid infrastructure, airport management systems, and geospatial services",
      "Architected and maintained enterprise-scale applications serving 100,000+ daily users, implementing clean architecture patterns and SOLID principles that significantly reduced bug reports",
      "Led migration from AngularJS to Angular 13 with modernized architecture and NDBX library, achieving substantial performance improvement and code complexity reduction",
      "Designed scalable microservices architecture using Spring Boot and Kafka, substantially reducing data overfetching through GraphQL implementation",
      "Developed new version of airport management system using Kotlin, significantly improving overall system performance while leading a team of 3 developers",
      "Led the architecture and development of Kotlin-based Android apps, including IsFlight, using Jetpack Compose and Google Maps API, improving map rendering performance",
      "Created native mobile applications (Kotlin) for the SmartGrid sector, integrating geospatial solutions for optimized network management",
      "Spearheaded geospatial solutions, significantly reducing map rendering time and enhancing infrastructure management user experience",
      "Developed native and cross-platform solutions using Kotlin and Flutter, employing offline-first strategies and state management with advanced patterns",
      "Successfully migrated Android projects from Eclipse to Android Studio, improving application stability and performance while ensuring compatibility with new Android versions",
      "Improved app performance, reducing memory consumption and load times, ensuring smooth user experiences",
      "Integrated backend systems (REST APIs, SOAP) into mobile apps, significantly increasing data flow efficiency",
      "Customized GIS-based applications using SMALLWORLD products and Magik programming language to streamline workflows and enhance operational efficiency",
      "Maintained and upgraded Smallworld/Magik applications (PNI, Network Viewer, CABB) with custom plugins for enhanced data integration and visualization",
      "Designed and implemented mobile architectures (MVVM, Clean Architecture) with a focus on scalability and responsiveness",
      "Enhanced app security with OAuth 2.0, JWT, and Firebase Authentication, securing data exchange for field agents",
      "Architected enterprise-level testing strategy using Jest, JUnit, Espresso, and Cypress, achieving high code coverage across applications and substantially reducing production bugs",
      "Designed and implemented CI/CD pipelines using Jenkins, GitLab CI, and Azure DevOps, dramatically reducing deployment time from hours to minutes",
      "Orchestrated zero-downtime deployment strategies for mission-critical infrastructure applications, maintaining excellent uptime across all services"
    ],
    achievements: [
      "Employee of the Quarter (Q3 2023): Recognized for outstanding performance and contributions to mobile development projects.",
      "Technical Innovation Award (2022): Awarded for the architectural design of the SmartGrid mobile application, which significantly improved data processing and field operations efficiency.",
      "Team Leadership Recognition (2021): Acknowledged for successfully leading the team through the migration of complex legacy systems to modern architecture, ensuring a seamless transition with minimal downtime."
    ],
    leadershipMentoring: [
      "Team Leadership: Led development teams of 8-12 engineers across mobile, backend, and frontend disciplines, conducting regular code reviews and establishing team coding standards.",
      "Mentoring: Mentored 8+ junior developers in mobile development best practices, clean architecture, and delivered internal tech talks on Flutter best practices.",
      "Hiring: Conducted 35+ technical interviews for mobile and full-stack developer positions, contributing to the hiring of 6 senior developers.",
      "Project Management: Managed sprint planning and delivery for multiple concurrent projects, consistently delivering projects on time with a 90%+ success rate.",
      "Process Improvement: Introduced automated testing standards that significantly increased code coverage and streamlined deployment processes, reducing release cycles."
    ],
    biggestContribution: [
      "Led and mentored a cross-functional team of developers across mobile, backend, and frontend disciplines, achieving excellent on-time delivery rates while conducting regular code reviews and establishing comprehensive coding standards that significantly improved code quality. This leadership role was crucial because it enabled the delivery of multiple mission-critical applications serving 100,000+ users while developing the next generation of technical talent.",
      "Additionally, designed and delivered technical training programs for junior developers on clean architecture, SOLID principles, and mobile development best practices, participated in hiring initiatives conducting technical interviews, and established cross-functional collaboration frameworks with UX/UI, DevOps, and QA teams."
    ],
    fullTechStack: [
      "Kotlin", "Java 17/11", "TypeScript", "JavaScript", "Magik", "Android SDK", "Flutter",
      "Jetpack Compose", "Angular 15/13", "AngularJS", "NDBX", "Spring Boot", "Spring MVC",
      "Spring Batch", "GraphQL", "Kafka", "JBoss", "Oracle 11g", "MongoDB", "SQLite", "Room",
      "ElasticSearch", "Docker", "Kubernetes", "Azure", "AWS S3", "OpenShift", "Smallworld GIS",
      "Google Maps API", "OpenStreetMap", "REST APIs", "SOAP", "WebSocket", "OAuth 2.0",
      "JWT", "Firebase Authentication", "JUnit", "Espresso", "Jest", "Android Studio",
      "VS Code", "Eclipse", "Git"
    ]
  },
  {
    company: "BeeGoh",
    role: "Mobile/Web Developer | Full Stack Developer",
    period: "Aug 2015 - May 2018",
    description: [
      "Led comprehensive mobile and web development initiatives across social media, delivery services, and education sectors",
      "Architected and developed 8+ cross-platform mobile applications using Kotlin, Flutter, and Ionic, serving over 50,000 active users across social networking, delivery services, and education sectors",
      "Led the development of a flagship delivery application that processed 10,000+ daily orders, implementing advanced geolocation algorithms that significantly improved delivery accuracy",
      "Substantially reduced delivery time through optimized routing algorithms and real-time tracking implementation using Google Maps API and WebSocket connections",
      "Increased customer satisfaction scores from 3.8 to 4.4 stars through enhanced UI/UX design and performance optimization",
      "Optimized mobile app performance across Android and iOS platforms, achieving consistent API response times under 300ms and dramatically reducing app crash rates",
      "Spearheaded cross-platform development strategy that substantially reduced overall development time and project costs, enabling faster time-to-market for 5 major product releases",
      "Engineered high-performance RESTful APIs using Django REST Framework, Node.js, and Express.js, handling 1M+ daily transactions with 99.9% uptime and average response times under 200ms",
      "Significantly reduced API response time from 800ms to 400ms through advanced database query optimization, Redis caching implementation, and connection pooling strategies",
      "Integrated 15+ third-party services including payment gateways (Stripe, PayPal), social authentication (Google, LinkedIn, Facebook SDKs), and analytics platforms (Firebase Analytics, Mixpanel)",
      "Designed and implemented microservices architecture using Docker containers, enabling horizontal scaling and substantially reducing system maintenance overhead",
      "Built real-time notification system using WebSocket connections and message queues (Redis Pub/Sub), supporting 10,000+ concurrent users with sub-second message delivery",
      "Developed responsive web applications using Angular 8+ and Material Design, supporting 5 different screen sizes and achieving 98% cross-browser compatibility",
      "Created comprehensive component library with 50+ reusable UI components, significantly accelerating team development productivity and dramatically reducing code duplication",
      "Implemented progressive web app (PWA) features, including offline functionality and push notifications, substantially increasing user retention",
      "Significantly optimized frontend bundle size through code splitting, lazy loading, and tree shaking techniques, reducing initial page load time from 4.2s to 2.3s",
      "Architected comprehensive CI/CD pipelines using GitHub Actions, Jenkins, and GitLab CI, dramatically reducing deployment time from 2 hours to 20 minutes",
      "Implemented automated testing and quality gates, achieving high code coverage and substantially reducing production bugs",
      "Managed end-to-end development lifecycle for 8 major applications from conception to Play Store/App Store release, maintaining 4.2+ average rating"
    ],
    projectRecognition: [
      "Positive Client Testimonials: Received strong positive feedback for the successful development and delivery of the BeeGoh delivery platform."
    ],
    biggestContribution: [
      "Spearheaded cross-platform development strategy that substantially reduced overall development time and project costs while delivering applications serving 50,000+ active users. This strategic approach was crucial because it enabled the company to launch 8 major applications across multiple sectors (social media, delivery, education) while maintaining high quality standards and achieving significant cost savings.",
      "Additionally, mentored 4 junior developers in mobile development best practices, code review processes, and architectural design patterns, led Agile development ceremonies for a team of 6 developers, and conducted technical interviews for 15+ candidates, contributing to hiring decisions and team expansion while establishing coding standards that significantly improved overall code quality."
    ],
    fullTechStack: [
      "Kotlin", "Java", "Swift", "Dart", "Flutter 2.x", "Android SDK", "Ionic 4+", "React Native",
      "Angular 8+", "TypeScript", "JavaScript ES6+", "HTML5/CSS3", "Material Design", "SCSS",
      "NgRx", "RxJS", "Webpack", "Angular CLI", "Python 3.x", "Node.js", "Spring Boot",
      "Django REST Framework", "Express.js", "PostgreSQL", "MySQL", "Firebase Firestore",
      "MongoDB", "Redis", "Elasticsearch", "Docker", "Docker Compose", "GitHub Actions",
      "Jenkins", "GitLab CI", "Grafana", "Prometheus", "AWS S3", "Firebase", "Heroku",
      "Stripe API", "PayPal SDK", "Google OAuth", "Facebook SDK", "Google Maps API",
      "Firebase Analytics", "Mixpanel", "JUnit", "Espresso", "XCTest", "Jasmine", "Karma",
      "Cypress"
    ]
  },
  {
    company: "Tricall S.A.R.L",
    role: "Web Developer (Final Year Project - PFE)",
    period: "Feb 2015 - Apr 2015",
    description: [
      "Led the complete digital transformation of Tricall S.A.R.L's call center operations through development of an integrated management platform serving 50+ agents and processing 1,000+ daily customer interactions",
      "Architected comprehensive WordPress-based management ecosystem serving 50+ agents with integrated customer portal, application tracking, and real-time operational dashboards",
      "Developed responsive multi-interface system significantly increasing online customer applications and substantially reducing phone-based inquiries",
      "Implemented advanced contact form processing with automated lead routing and CRM integration, significantly improving lead conversion rates",
      "Built professional company showcase with service portfolio, testimonials, and interactive features, dramatically increasing website engagement",
      "Engineered sophisticated live chat application enabling instant agent-to-agent communication, dramatically reducing internal response time from 5 minutes to 15 seconds",
      "Built comprehensive presence detection system showing real-time agent availability, status, and workload, significantly improving task allocation efficiency",
      "Developed WebSocket-based architecture supporting 50+ concurrent users with sub-second message delivery and automatic reconnection capabilities",
      "Developed automated call logging system capturing 1,000+ daily interactions with zero manual data entry, substantially reducing administrative time",
      "Built intelligent call routing engine with skill-based assignment and load balancing, significantly improving first-call resolution rate",
      "Implemented real-time performance dashboard tracking call duration, resolution rates, customer satisfaction, and agent productivity with live KPI monitoring",
      "Created advanced reporting suite generating daily, weekly, and monthly analytics reports, saving 15 hours of manual reporting per week",
      "Built call queue management system with automated overflow handling and priority assignment, substantially reducing average wait times"
    ],
    biggestContribution: [
      "Engineered real-time communication infrastructure that dramatically reduced internal response time from 5 minutes to 15 seconds while supporting 50+ concurrent users with instant messaging capabilities. This transformation was critical because it revolutionized call center efficiency, significantly improving first-call resolution and substantially reducing average wait times. The system enabled seamless coordination among agents, supervisors, and management, directly contributing to increased customer satisfaction and operational excellence."
    ],
    fullTechStack: [
      "PHP 5.4+", "MySQL 5.6", "HTML5", "CSS3", "JavaScript ES5", "jQuery 2.x",
      "WordPress 4.x", "MVC pattern", "WebSocket", "AJAX"
    ]
  },
  {
    company: "Atlanta Assurance",
    role: "Development Intern (Final Year Project - PFE)",
    period: "2012 - 2013",
    description: [
      "Led the design and development of a mission-critical financial simulation application as part of final year project, creating the comprehensive \"ISTIMRAR\" retirement savings simulator for Atlanta Assurance",
      "Architected and developed the complete \"ISTIMRAR\" web application, processing 500+ complex financial scenarios daily and serving 50+ financial advisors across Morocco",
      "Implemented sophisticated actuarial calculation engine supporting 15+ retirement product types, with accuracy validated against industry standards (achieving high precision rates)",
      "Built comprehensive simulation framework capable of modeling 30-year retirement projections with variables including inflation rates, market volatility, and demographic changes",
      "Designed intuitive advisor interface that substantially reduced consultation time from 2 hours to 45 minutes, enabling faster client service and increased productivity",
      "Created client-facing dashboard allowing real-time exploration of investment scenarios, significantly improving client engagement",
      "Engineered complex actuarial calculation engine with 20+ mathematical models including compound interest, annuity calculations, mortality tables, and Monte Carlo simulations for risk assessment",
      "Developed multi-scenario investment modeling system capable of processing 1,000+ variable combinations simultaneously, dramatically reducing calculation time from 30 seconds to 2 seconds",
      "Implemented advanced risk analysis algorithms supporting conservative, balanced, and aggressive portfolio strategies with real-time risk scoring and volatility assessment",
      "Built predictive financial forecasting models incorporating 10+ economic indicators (inflation, GDP growth, market trends), achieving high accuracy in 5-year projections",
      "Designed professional financial interface supporting complex multi-step workflows, substantially reducing user errors through intuitive form design and real-time validation",
      "Created comprehensive data visualization system with 12+ interactive chart types (projections, risk analysis, portfolio allocation), enabling instant understanding of complex financial data",
      "Implemented responsive design architecture supporting desktop, tablet, and mobile access, dramatically increasing user accessibility and enabling field consultations",
      "Developed automated reporting system generating professional PDF reports with executive summaries, detailed projections, and regulatory disclosures, substantially reducing report preparation time",
      "Ensured 100% compliance with Moroccan insurance regulations (Code des Assurances) and ACAPS (insurance authority) requirements through comprehensive validation frameworks",
      "Implemented enterprise-grade security measures including data encryption, role-based access control, and secure session management for handling sensitive financial information"
    ],
    biggestContribution: [
      "Designed and delivered a comprehensive retirement savings simulator that substantially reduced consultation time from 2 hours to 45 minutes while achieving exceptional calculation accuracy across complex actuarial scenarios. This was crucial because it revolutionized how financial advisors interact with clients, enabling faster service delivery and significantly improved client engagement while maintaining enterprise-grade accuracy for critical financial decisions affecting thousands of retirement plans. The system processed 500+ complex financial scenarios daily, supporting 15+ retirement product types, and became a cornerstone product for the company's digital transformation in the Moroccan insurance sector."
    ],
    fullTechStack: [
      "PHP 5.4+", "MySQL 5.6", "HTML5", "CSS3", "JavaScript ES5", "jQuery",
      "Chart.js", "D3.js", "TCPDF", "Monte Carlo simulation", "AES encryption", "MVC pattern"
    ]
  },
  {
    company: "Faculté des Sciences Ain Chock",
    role: "PHP/MySQL Developer",
    period: "Mar 2012 - Jul 2013",
    description: [
      "Led comprehensive digital transformation initiatives for Morocco's largest public university, developing mission-critical applications serving 15,000+ students and 500+ faculty members",
      "Architected comprehensive digital library platform managing 50,000+ books, 200+ journals, and serving 15,000+ students with automated cataloging and real-time availability tracking",
      "Implemented advanced search functionality with multi-criteria filtering (author, subject, ISBN, year), dramatically reducing book discovery time from 15 minutes to 30 seconds",
      "Developed automated borrowing/return system with email notifications and overdue alerts, substantially reducing manual processing and significantly improving return rates",
      "Engineered enterprise internship management system tracking 2,000+ annual internship placements across 50+ partner companies, with automated matching algorithms based on student skills and company requirements",
      "Developed end-to-end student registration platform processing 5,000+ annual enrollments with automated validation, document verification, and course assignment, dramatically reducing registration time from 2 hours to 20 minutes",
      "Built comprehensive academic performance tracking system monitoring 15,000+ students across 200+ courses with real-time GPA calculations, progress alerts, and automated transcript generation",
      "Created advanced analytics dashboard for academic advisors providing insights into student performance trends, at-risk student identification, and graduation predictions with high accuracy",
      "Engineered scalable MySQL database architecture handling 15,000+ concurrent student records with optimized indexing strategies, dramatically reducing query response time from 5 seconds to 200ms",
      "Implemented advanced database optimization techniques including query caching, connection pooling, and stored procedures, achieving exceptional uptime for mission-critical academic systems",
      "Designed robust data integrity framework with comprehensive foreign key constraints, triggers, and validation rules, ensuring zero data corruption across 500,000+ academic records",
      "Managed comprehensive IT infrastructure supporting 500+ faculty computers and 100+ administrative workstations across 15 departments with 98% uptime achievement",
      "Led hardware maintenance and upgrade initiatives substantially reducing system downtime through proactive monitoring and preventive maintenance protocols",
      "Redesigned and maintained university web ecosystem serving 20,000+ monthly visitors with responsive design and multilingual support (Arabic, French, English)",
      "Optimized website performance achieving 95+ Google PageSpeed scores through image optimization, caching strategies, and code minification",
      "Built SEO-optimized architecture significantly increasing organic search visibility and improving university's digital presence in academic rankings"
    ],
    biggestContribution: [
      "Architected and delivered a comprehensive database optimization strategy that dramatically reduced query response time from 5 seconds to 200ms while handling 500,000+ academic records, achieving exceptional uptime for mission-critical systems. This was crucial because it enabled real-time access to academic data for 15,000+ students and 500+ faculty members, substantially reducing administrative overhead and transforming the university's operational efficiency. The optimization directly supported automated student registration, library management, and academic tracking systems serving Morocco's largest public university."
    ],
    fullTechStack: [
      "PHP 5.4+", "MySQL 5.6", "Apache HTTP Server", "HTML5", "CSS3", "JavaScript ES5",
      "jQuery 2.x", "MVC pattern", "Windows Server", "Linux (Ubuntu/CentOS)", "TCP/IP configuration"
    ]
  },
  {
    company: "Maroc Soir",
    role: "Development Intern",
    period: "2012 - 2013 (2 months)",
    description: [
      "Led key development initiatives for the Morocco Business Intelligence (MBI) platform, a strategic government-backed economic intelligence tool designed to attract international investment and showcase Morocco's economic potential",
      "Architected core MBI platform components processing economic data from 15+ sectors including tourism, manufacturing, agriculture, and technology, serving 500+ government analysts and international investors",
      "Developed comprehensive data visualization dashboard displaying key economic indicators and substantially reducing report generation time for economic analysts",
      "Built investor-focused interface showcasing investment opportunities with interactive sector maps and real-time data feeds, significantly increasing foreign investor engagement",
      "Implemented automated data aggregation system connecting 8+ government databases with real-time synchronization, ensuring exceptional data accuracy across economic metrics",
      "Created multi-language content management supporting Arabic, French, and English for international accessibility and global reach",
      "Engineered sophisticated data integration pipeline connecting Ministry of Finance, Statistics Office, and Central Bank databases with automated daily synchronization of 200+ economic indicators",
      "Developed predictive analytics module using 5-year historical data to forecast economic trends, achieving strong accuracy in quarterly GDP and inflation projections",
      "Built real-time economic monitoring system tracking currency fluctuations, trade balance, and market indices with instant alert capabilities for significant changes",
      "Designed scalable CMS architecture managing 500+ economic reports, investment guides, and sector analyses with advanced search, filtering, and categorization capabilities",
      "Built personalized investor portal with customized dashboards showing relevant opportunities based on sector preferences, investment size, and risk criteria",
      "Created SEO-optimized public interface significantly increasing organic search traffic and improving Morocco's digital economic presence in international rankings",
      "Built comprehensive analytics dashboard providing economic performance monitoring with 25+ KPIs, trend analysis, and comparative regional benchmarking",
      "Implemented advanced search functionality with natural language processing capabilities, dramatically reducing information discovery time from 15 minutes to 2 minutes"
    ],
    biggestContribution: [
      "Engineered comprehensive data integration pipeline connecting multiple government databases with automated synchronization, achieving exceptional data accuracy while substantially reducing report generation time. This was crucial for Morocco's economic intelligence initiative because it enabled real-time economic monitoring and significantly increased foreign investor engagement. The system provided predictive analytics with strong accuracy for quarterly projections, directly supporting national economic planning and international investment attraction strategies."
    ],
    fullTechStack: [
      "PHP 5.4+", "MySQL 5.6", "HTML5", "CSS3", "JavaScript ES5", "jQuery 2.x",
      "WordPress", "Chart.js", "D3.js", "Google Charts", "MVC pattern"
    ]
  },
  {
    company: "Early Career Experiences",
    role: "Various Roles",
    period: "2012-2015",
    description: [
      "This section consolidates key achievements and technical competencies developed during early career experiences, including roles at Tricall S.A.R.L and Maroc Soir."
    ],
    projects: [
      {
        name: "TRICALL S.A.R.L - Web Developer (Final Year Project - PFE)",
        period: "February – April 2015 (3 months)",
        overview: "Led the development of an integrated call center management platform as part of final year project, revolutionizing internal operations through real-time communication systems and automated agent management. This comprehensive solution enhanced operational efficiency for a 50-agent call center, processing 1,000+ daily customer interactions while reducing communication overhead and improving service quality.",
        achievements: [
          "**🌐 ENTERPRISE CALL CENTER PLATFORM:**",
          "• Architected complete WordPress-based management platform serving 50+ call center agents with integrated contact forms, application tracking, and customer management systems",
          "• Developed responsive customer-facing interface that increased online applications by 60% and reduced phone inquiries by 35%",
          "• Implemented multi-role access system supporting agents, supervisors, and administrators with tailored dashboards and functionality",
          "• Built automated form processing system that reduced manual data entry by 80% and improved accuracy to 99.2%",
          "**💬 REAL-TIME COMMUNICATION INFRASTRUCTURE:**",
          "• Designed and developed live chat application enabling instant agent-to-agent communication, reducing internal response time from 5 minutes to 30 seconds (90% improvement)",
          "• Created comprehensive notification system with real-time alerts and priority-based message routing, improving coordination efficiency by 45%",
          "• Implemented WebSocket-based communication supporting 50+ concurrent users with sub-second message delivery",
          "• Built presence detection system showing agent availability and status, reducing communication delays by 70%",
          "**📞 ADVANCED CALL MANAGEMENT SYSTEM:**",
          "• Developed comprehensive call logging system tracking 1,000+ daily interactions with automated data capture, reducing manual logging time by 85%",
          "• Implemented performance analytics dashboard providing real-time metrics on call duration, resolution rates, and agent productivity",
          "• Created automated reporting system generating daily, weekly, and monthly performance reports, saving 10 hours of manual reporting per week",
          "• Built call queue management with intelligent routing based on agent expertise and availability, improving first-call resolution by 25%"
        ],
        techEnvironment: [
          "Languages: PHP, HTML, CSS, JavaScript",
          "Database: MySQL",
          "CMS: WordPress",
          "Frontend Libraries: jQuery",
          "Features: Contact forms, Live chat, Call management, Reporting systems"
        ]
      },
      {
        name: "MAROC SOIR - Development Intern",
        period: "2 months (2012-2013)",
        overview: "Contributed to the development of the Morocco Business Intelligence (MBI) platform, a strategic economic intelligence tool designed to attract international investment and showcase Morocco's economic potential. This government-backed initiative processed economic data from 15+ sectors and served as a primary resource for investors, government agencies, and business development organizations.",
        achievements: [
          "**📊 NATIONAL BUSINESS INTELLIGENCE PLATFORM:**",
          "• Developed core components of the MBI platform processing economic data from 15+ sectors including tourism, manufacturing, agriculture, and technology",
          "• Implemented data visualization dashboard displaying key economic indicators, reducing report generation time by 75% for government analysts",
          "• Built investor-focused interface showcasing investment opportunities with interactive maps and sector-specific data, increasing foreign investor engagement by 40%",
          "• Created automated data aggregation system pulling information from multiple government databases, ensuring real-time accuracy of economic metrics",
          "**📈 ADVANCED MACROECONOMIC DATA INTEGRATION:**",
          "• Architected data integration pipeline connecting 8+ government databases (Ministry of Finance, Statistics Office, Central Bank) with automated synchronization",
          "• Developed comprehensive data visualization components for GDP growth, inflation rates, employment statistics, and sector performance indicators",
          "• Implemented predictive analytics module using historical data to forecast economic trends, achieving 78% accuracy in quarterly projections",
          "• Built multi-language content management system supporting Arabic, French, and English for international accessibility",
          "**🌍 STRATEGIC ECONOMIC CONTENT MANAGEMENT:**",
          "• Designed enterprise-level CMS for organizing 500+ economic reports, investment guides, and sector analyses with advanced search and filtering capabilities",
          "• Created investor portal with personalized dashboards showing relevant opportunities based on sector preferences and investment criteria",
          "• Implemented automated report generation producing weekly economic briefings and monthly investment newsletters for 200+ subscribers",
          "• Built SEO-optimized public interface increasing organic search traffic by 120% and improving Morocco's digital economic presence"
        ],
        techEnvironment: [
          "Languages: PHP, HTML, CSS, JavaScript",
          "CMS: WordPress",
          "Database: MySQL",
          "Focus Areas: Data integration, Content management, Economic data visualization"
        ]
      }
    ],
    keySkillsImpact: {
      quantifiableAchievements: [
        "Reduced internal response time by 90% (5 minutes to 30 seconds) through real-time communication systems",
        "Increased online applications by 60% through improved user interface design",
        "Reduced manual data entry by 80% via automated form processing systems",
        "Improved first-call resolution by 25% through intelligent call routing",
        "Reduced report generation time by 75% for government economic analysts",
        "Increased foreign investor engagement by 40% through enhanced data visualization",
        "Achieved 78% accuracy in quarterly economic trend predictions",
        "Increased organic search traffic by 120% through SEO optimization"
      ],
      coreTechnicalCompetencies: [
        "Full-Stack Web Development: PHP, MySQL, WordPress, jQuery, HTML5/CSS3",
        "Financial Software Engineering: Complex actuarial calculations, Risk modeling, Investment projections",
        "Business Intelligence Systems: Data integration, Predictive analytics, Economic modeling",
        "Real-Time Communication: WebSocket implementation, Live chat systems, Notification frameworks",
        "Data Visualization: Interactive dashboards, Economic indicators, Performance metrics",
        "Content Management: Multi-language CMS, Automated reporting, SEO optimization"
      ],
      professionalSkillsDemonstrated: [
        "Project Leadership: Successfully delivered 3 final year projects (PFE) with measurable business impact",
        "Cross-Sector Experience: Insurance, Economic intelligence, Call center operations",
        "Government Collaboration: Worked on national economic intelligence initiatives",
        "Performance Optimization: Consistently delivered solutions improving efficiency by 25-90%",
        "User-Centric Design: Created intuitive interfaces for non-technical users across multiple domains",
        "Data-Driven Solutions: Implemented systems processing thousands of daily interactions and transactions"
      ]
    }
  }
];

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto p-8 bg-white dark:bg-gray-800">
      <h3 className="text-3xl font-bold text-center mb-12">Work Experience</h3>
      <div className="relative border-l-2 border-gray-700 dark:border-gray-300">
        {experienceData.map((job, index) => (
          <div key={index} className="mb-8 flex items-start w-full p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
            <div className="absolute -left-4 bg-gray-500 dark:bg-gray-400 rounded-full h-8 w-8"></div>
            <div className="ml-12 w-full">
              <h4 className="text-xl font-bold">{job.role}</h4>
              <p className="text-lg font-semibold">{job.company}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{job.period}</p>
              {job.description && (
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-3">
                  {job.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              )}
              {job.achievements && (
                <div className="mb-3">
                  <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Achievements & Recognition:</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {job.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              )}
              {job.leadershipMentoring && (
                <div className="mb-3">
                  <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Leadership & Mentoring:</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {job.leadershipMentoring.map((lm, idx) => (
                      <li key={idx}>{lm}</li>
                    ))}
                  </ul>
                </div>
              )}
              {job.biggestContribution && (
                <div className="mb-3">
                  <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Biggest Contribution:</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {job.biggestContribution.map((bc, idx) => (
                      <li key={idx}>{bc}</li>
                    ))}
                  </ul>
                </div>
              )}
              {job.fullTechStack && (
                <div className="mb-3">
                  <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {job.fullTechStack.map((tech, idx) => (
                      <span key={idx} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {job.projects && job.projects.map((project, projectIdx) => (
                <div key={projectIdx} className="mb-4 mt-4 p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                  <h5 className="text-lg font-bold mb-2">{project.name}</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.period}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">{project.overview}</p>
                  {project.achievements && (
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-2">
                      {project.achievements.map((ach, achIdx) => (
                        <li key={achIdx}>{ach}</li>
                      ))}
                    </ul>
                  )}
                  {project.techEnvironment && (
                    <div>
                      <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-1">Technical Environment:</p>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                        {project.techEnvironment.map((env, envIdx) => (
                          <li key={envIdx}>{env}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
              {job.keySkillsImpact && (
                <div className="mb-3 mt-4">
                  <h5 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Skills & Impact Developed:</h5>
                  <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-1">Quantifiable Achievements:</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-2">
                    {job.keySkillsImpact.quantifiableAchievements.map((qa, idx) => (
                      <li key={idx}>{qa}</li>
                    ))}
                  </ul>
                  <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-1">Core Technical Competencies:</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-2">
                    {job.keySkillsImpact.coreTechnicalCompetencies.map((ctc, idx) => (
                      <li key={idx}>{ctc}</li>
                    ))}
                  </ul>
                  <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-1">Professional Skills Demonstrated:</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {job.keySkillsImpact.professionalSkillsDemonstrated.map((psd, idx) => (
                      <li key={idx}>{psd}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
