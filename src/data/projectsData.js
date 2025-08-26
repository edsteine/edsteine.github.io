const projectsData = [
  {
    title: "FPL AI Assistant",
    description: "A groundbreaking AI-powered Fantasy Premier League optimization platform that preserves historical context, learns from user patterns, and gets smarter every season. Combines current FPL data, archived seasons, external APIs, and personalized insights to create the most advanced FPL prediction system ever built.",
    fullDescription: [
      "A groundbreaking AI-powered Fantasy Premier League optimization platform that preserves historical context, learns from user patterns, and gets smarter every season instead of resetting like other tools. Combines current FPL data, archived seasons, external APIs, and personalized insights to create the most advanced FPL prediction system ever built."
    ],
    link: "https://github.com/edsteine/fpl-ai-assistant-main", // Assuming this is the correct link from page.tsx
    technologies: ["React", "Vite", "Tailwind CSS", "TensorFlow.js", "Brain.js", "ML Models", "AI Integration"],
    image: "/images/fpl-ai-assistant.png",
    keyFeatures: [
      "Multi-Season Intelligence: Historical data preservation, cross-season player tracking, performance trend analysis, never loses context.",
      "Advanced AI & Personalization: Multi-season ML models, user pattern learning, adaptive recommendations, external API integration (API-Football & FootyStats), personalized risk profiling.",
      "Revolutionary Data Integration: Real FPL data (784+ live players), historical archives (IndexedDB), external professional data (xG, xA, injury reports), user success tracking, automated synchronization.",
      "Core Functionality: AI team optimization (genetic algorithms), multiple team generation (3-5 teams per analysis), squad management, formation analysis, transfer intelligence.",
      "Comprehensive Player Information System: Interactive info buttons, detailed 4-tab player modals (Overview, Performance, EPD Calculation, Advanced Stats), team stats modals.",
      "100% Real Data Integration: All data fetched from official FPL API, dynamic fixture difficulty, live team strength, real player stats, dynamic thresholds.",
      "Advanced Features: Expected Points Data (EPD) calculation, transfer recommendations, fixture difficulty analysis, risk tolerance settings, real-time data updates, team validation, Web Worker EPD calculation."
    ],
    architecture: [
      "FPL Compliance: Exact position requirements, budget constraints, team limits (max 3 players per PL team), formation validation.",
      "Performance Optimizations: API caching (5-minute), Web Workers for background EPD calculation, lazy loading, efficient algorithms, memory management.",
      "Real-time Features: Auto-refresh (every 5 minutes), progress tracking, error handling, local storage for team persistence.",
      "Enhanced AI Algorithms: Multiple team generation (varied strategies: Premium-Heavy, Balanced, Value-Heavy, Contrarian, Template), enhanced EPD calculation (Form, PPG, ICT Index, Value Rating, Fixture Multiplier), sophisticated genetic algorithm."
    ]
  },
  {
    title: "Consignment Portal",
    description: "Enterprise-grade React-based consignment management platform engineered for Shopify Plus integration, processing 1,000+ product submissions monthly and serving 100+ vendors. Features innovative 'thin database' architecture and automated commission calculation.",
    fullDescription: [
      "Enterprise-grade React-based consignment management platform engineered for Shopify Plus integration, processing 1,000+ product submissions monthly and serving 100+ vendors. Features innovative \"thin database\" architecture reducing Shopify API calls by 60%, automated commission calculation system handling complex multi-tier structures, and comprehensive payout processing managing $50,000+ monthly vendor transactions with 99.9% accuracy."
    ],
    link: "https://github.com/edsteine/wlidaty-consignment-portal-main",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Shopify API", "Tailwind CSS", "React Context API", "React Router", "OAuth 2.0", "JWT"],
    image: "/images/consignment-portal.png",
    keyFeatures: [
      "Advanced vendor dashboard with real-time sales metrics and performance analytics",
      "Comprehensive product submission workflow with multi-stage approval system (48h to 6h reduction)",
      "Intelligent Shopify data synchronization with minimal API usage through smart caching",
      "Automated commission calculation supporting tiered rates, category-specific pricing, and time-sensitive rules",
      "Real-time webhook processing maintaining 99.8% delivery success rate for instant order updates",
      "Comprehensive reporting system providing business intelligence insights and operational metrics",
      "Deep Shopify Admin API integration with comprehensive product and order management",
      "Shopify Storefront API connectivity for customer-facing operations",
      "Real-time webhook processing for instant inventory and order synchronization",
      "Advanced product mapping between consignment system and Shopify catalog",
      "Automated inventory management with stock level synchronization",
      "Order fulfillment automation with vendor notification systems",
      "Advanced analytics dashboard tracking vendor performance, sales trends, and commission metrics",
      "Automated financial reporting with reconciliation tools and audit trails",
      "Real-time notification system for vendors and administrators",
      "Comprehensive payout management with automated calculations and approval workflows",
      "Performance monitoring achieving 99.5% system uptime during peak processing periods",
      "Scalable commission structure supporting complex business models and growth"
    ],
    architecture: [
      "React 18 with modern hooks and context API achieving 95% component reusability",
      "Node.js/Express.js backend supporting 1000+ concurrent requests with load balancing",
      "PostgreSQL database with optimized indexing reducing query times by 45%",
      "\"Thin database\" design philosophy minimizing data duplication and API overhead",
      "JWT authentication with OAuth 2.0 integration for secure vendor access",
      "RESTful API design with comprehensive error handling and retry mechanisms"
    ]
  },
  {
    title: "Full-Stack Geospatial Platform",
    description: "A comprehensive full-stack geospatial application combining a Flutter mobile app with a Django backend, designed for offline-first mapping functionality. Features production-ready API serving 142+ locations with advanced Mapbox SDK integration, JWT authentication, and PostGIS.",
    fullDescription: [
      "Enterprise-grade full-stack geospatial application combining Django 5.1.4 backend with Flutter 3.5.4 mobile app, designed for offline-first mapping functionality. Features production-ready API serving 142+ locations with advanced Mapbox SDK integration, JWT authentication system, PostgreSQL with PostGIS extensions, and comprehensive Clean Architecture implementation achieving 90% test coverage across both backend and mobile components."
    ],
    link: "https://github.com/edsteine/Backend_Mobile",
    technologies: ["Flutter", "Dart", "Django", "Python", "PostgreSQL", "PostGIS", "Mapbox SDK", "JWT"],
    image: "/images/geospatial-platform.png",
    keyFeatures: [
      "Backend Features: Django 5.1.4 REST API with 15+ optimized endpoints serving 142+ locations, JWT authentication with refresh token rotation (15-day access, 30-day refresh), PostgreSQL 15+ with PostGIS spatial extensions for geographic queries, GeoJSON support with pagination (10 locations per page) reducing response time by 60%, Comprehensive API documentation with OpenAPI/Swagger integration, Database optimization achieving sub-200ms query response times, CORS configuration for secure cross-origin requests, Production-ready deployment on Render.com with 99.5% uptime.",
      "Mobile Features: Flutter 3.5.4 with Clean Architecture (Presentation, Domain, Data layers), Riverpod 2.x state management with 95% reactive UI coverage, Mapbox SDK integration supporting offline tile caching up to 5GB, Secure JWT token storage using Flutter Secure Storage, Comprehensive testing suite: 45+ unit tests, 12+ integration tests, 8+ e2e tests, Performance monitoring achieving 60fps on mid-range devices, Multi-platform support (iOS, Android, Web, Desktop) with 95% code reuse, Offline-first architecture with automatic data synchronization, Real-time location updates with 5-meter accuracy."
    ],
    architecture: [
      "Backend: Django REST Framework with PostgreSQL achieving 1000+ requests/minute",
      "Mobile: Clean Architecture with MVVM pattern reducing coupling by 70%",
      "Database: Spatial indexing reducing geographic query time from 2s to 150ms",
      "Authentication: JWT with automatic renewal preventing 99% of auth failures",
      "Testing: 90% overall test coverage with automated CI/CD integration",
      "API Response: Average 180ms response time for location data",
      "Mobile Performance: 95% crash-free sessions across all supported platforms"
    ]
  },
  {
    title: "Fraud Detection ML System",
    description: "Enterprise-grade fraud detection system combining advanced machine learning algorithms with real-time processing capabilities. Features a Django backend with a scikit-learn model for fraud detection, a Flutter mobile application for security analysts, and an admin panel.",
    fullDescription: [
      "Enterprise-grade fraud detection system combining advanced machine learning algorithms with real-time processing capabilities. Features Django backend with machine learning model for fraud detection, Flutter mobile application for security analysts, user registration and authentication system, transaction management with automated fraud scoring, and comprehensive admin panel for system management."
    ],
    link: "https://github.com/edsteine/fraud_detection",
    technologies: ["Django", "Python", "Scikit-learn", "Flutter", "PostgreSQL"],
    image: "/images/fraud-detection.png",
    keyFeatures: [
      "Backend Features: User registration and authentication, Transaction management and fraud detection, Machine learning-based fraud detection using scikit-learn, Admin panel for managing users and transactions, JSON API responses for mobile integration, PostgreSQL database with optimized queries.",
      "Mobile App Features: User authentication with secure storage, Dashboard displaying transaction list, Detailed transaction information views, Fraud detection indicators and alerts, Provider state management for data flow."
    ]
  },
  {
    title: "TikeTaxi",
    description: "Comprehensive Flutter application designed specifically for taxi drivers with advanced receipt management capabilities. Features Bluetooth printer integration, complex tariff calculation algorithms, Firebase cloud storage, and a multi-template receipt system.",
    fullDescription: [
      "Comprehensive Flutter application designed specifically for taxi drivers with advanced receipt management capabilities. Features Bluetooth printer integration, complex tariff calculation algorithms, Firebase cloud storage, multi-template receipt system, and professional taxi operations support with real-time data synchronization."
    ],
    link: "https://github.com/edsteine/tiketaxi",
    technologies: ["Flutter", "Dart", "Firebase", "Bluetooth", "ESC/POS"],
    image: "/images/tiketaxi.png",
    keyFeatures: [
      "Advanced receipt management system",
      "Bluetooth thermal printer integration (ESC/POS)",
      "Complex tariff calculation algorithms",
      "Multi-template receipt designs",
      "Firebase cloud storage and synchronization",
      "Real-time trip tracking and management",
      "Professional invoice generation",
      "Cloud backup and data recovery",
      "Multi-device synchronization"
    ],
    technicalImplementation: [
      "ESC/POS printing protocol for thermal printers",
      "Firebase Firestore for real-time data sync",
      "Complex business logic for taxi fare calculations",
      "Bluetooth device discovery and connection management",
      "Professional receipt templating system",
      "Cloud storage for receipt history and backup"
    ],
    businessFeatures: [
      "Professional taxi receipt generation",
      "Trip history and analytics",
      "Customer information management",
      "Multiple payment method support",
      "Tax calculation and reporting",
      "Professional branding and customization"
    ]
  },
  {
    title: "Notification Portal",
    description: "Multilingual push notification system using Node.js and Firebase Cloud Messaging, supporting 10,000+ daily notifications across three languages. Features advanced FCM integration with topic-based targeting and RTL language support.",
    fullDescription: [
      "Enterprise-grade Node.js web dashboard for managing multilingual push notifications via Firebase Cloud Messaging, supporting 10,000+ daily notifications across three languages. Features advanced FCM integration with topic-based targeting, RTL language support for Arabic, deep linking capabilities, secure admin authentication, and production-ready deployment achieving 99.8% notification delivery success rate with sub-500ms response times."
    ],
    link: "https://github.com/edsteine/notification-portal",
    technologies: ["Node.js", "Express.js", "Firebase FCM", "Tailwind CSS", "EJS", "Passport.js", "Docker"],
    image: "/images/notification-portal.png",
    keyFeatures: [
      "Multilingual notification support (English, French, Arabic) with RTL text handling",
      "Advanced topic-based targeting (lang_en, lang_fr, lang_ar) serving 5,000+ users per language",
      "Deep link integration enabling 85% click-through rates to specific app content",
      "Secure admin authentication with Passport.js and session management",
      "Production deployment with Docker containerization and auto-scaling capabilities",
      "Advanced FCM payload optimization reducing notification size by 40%",
      "Mobile-responsive dashboard with Tailwind CSS achieving 95+ Lighthouse scores",
      "Real-time notification delivery tracking and analytics dashboard",
      "Batch notification support processing 1,000+ messages simultaneously",
      "A/B testing capabilities for notification content optimization",
      "Comprehensive error handling and retry mechanisms (99.8% delivery success)",
      "Rate limiting and security middleware preventing abuse and ensuring stability"
    ]
  },
  {
    title: "W Project - Location-Based Django API",
    description: "Production-grade Django REST API serving 142+ locations with advanced geospatial processing capabilities, handling 5,000+ daily API requests with 99.5% uptime. Features comprehensive JWT authentication, GeoDjango spatial queries with sub-meter accuracy, real-time location services, and scalable deployment architecture supporting 1,000+ concurrent users with sub-200ms response times.",
    fullDescription: [
      "Production-grade Django REST API serving 142+ locations with advanced geospatial processing capabilities, handling 5,000+ daily API requests with 99.5% uptime. Features comprehensive JWT authentication, GeoDjango spatial queries with sub-meter accuracy, real-time location services, and scalable deployment architecture supporting 1,000+ concurrent users with sub-200ms response times."
    ],
    link: "https://github.com/edsteine/w_project",
    technologies: ["Django", "Django REST Framework", "PostgreSQL", "PostGIS", "GeoDjango", "Python", "Poetry", "JWT Authentication", "Swagger/OpenAPI", "Make", "SSL/TLS"],
    image: "/images/w-project.png", // Placeholder
    keyFeatures: [
      "Authentication Features: JWT token authentication with access and refresh tokens, User registration with email verification, Password reset functionality with secure token-based system, Session-based authentication for web interface, Comprehensive user profile management, Secure logout and token invalidation.",
      "Location API Features: Complete CRUD operations for location management, GeoDjango integration for spatial queries and geocoding, Nearby location search with radius-based filtering, Coordinate validation and PointField implementations, Pagination support for large location datasets, Soft deletion system for data integrity, GeoJSON support for location data exchange.",
      "Technical Implementation: Django 4.2+ with Django REST Framework, GeoDjango for advanced spatial operations, PostgreSQL with PostGIS for geospatial data, JWT authentication with djangorestframework-simplejwt, Comprehensive API documentation with Swagger, Poetry for reproducible dependency management, Multi-environment configuration support.",
      "API Endpoints: Authentication: login, register, refresh token, password reset, User management: profile, update, verification, Location services: CRUD operations, nearby search, spatial queries, Admin interface for comprehensive data management, RESTful design with proper HTTP status codes, JSON responses with detailed error handling.",
      "Development Features: Poetry dependency management for reproducible builds, Make-based automation for development tasks, Comprehensive database migrations and fixtures, Environment-based configuration management, Professional project structure and organization, SSL/HTTPS setup for secure communications."
    ]
  },
  {
    title: "WMobile - Flutter Offline Maps Application",
    description: "High-performance Flutter application with comprehensive offline mapping capabilities, featuring advanced Mapbox SDK integration, live API backend connection to 142 locations, robust testing infrastructure including performance benchmarking, and professional Clean Architecture implementation. The app provides offline map functionality with tile caching, dynamic marker fetching, and optimized performance.",
    fullDescription: [
      "High-performance Flutter application with comprehensive offline mapping capabilities, featuring advanced Mapbox SDK integration, live API backend connection to 142 locations, robust testing infrastructure including performance benchmarking, and professional Clean Architecture implementation. The app provides offline map functionality with tile caching, dynamic marker fetching, and optimized performance."
    ],
    link: "https://github.com/edsteine/wmobile", // MapSync and WMobile share the same repo link
    technologies: ["Flutter", "Dart", "Mapbox SDK", "Riverpod", "Clean Architecture", "REST APIs", "GeoJSON", "Multi-platform Development", "Unit/Integration Testing", "Performance Monitoring"],
    image: "/images/wmobile.png", // Placeholder
    keyFeatures: [
      "Core Features: Advanced offline maps with intelligent tile caching, MVVM architectural pattern using Riverpod state management, Optimized map rendering and user interaction, Comprehensive testing suite with unit, integration, and performance tests, Interactive maps using Mapbox SDK, Dynamic markers fetched from REST API (142 locations), Offline region download with progress tracking, Light/dark theme support with push notifications.",
      "Architecture: Clean Architecture with layered design, Presentation Layer: MVVM with Riverpod, Domain Layer: Business logic and entities, Data Layer: Repository pattern with data sources, Performance monitoring and resource optimization.",
      "API Integration: Live connection to https://w-project-u75x.onrender.com/api/v1/locations/, GeoJSON support for location data, Pagination with 10 locations per page, Real-time marker updates and synchronization."
    ],
    openSourceContributionDetails: [
      "MapSync Flutter Plugin: Custom offline mapping library for Flutter, designed to provide robust offline capabilities and advanced Mapbox SDK integration. This project demonstrates expertise in mobile mapping solutions and performance optimization for geospatial data."
    ]
  },
  {
    title: "Ed Project - Enterprise Django Platform",
    description: "Enterprise-grade Django REST API platform engineered for high-performance web application development supporting 10,000+ concurrent users. Features production-ready multi-environment deployment (dev/preprod/prod), advanced user management with role-based access control, 90% test coverage, Docker orchestration with Kubernetes support, and comprehensive security implementations achieving SOC 2 compliance standards.",
    fullDescription: [
      "Enterprise-grade Django REST API platform engineered for high-performance web application development supporting 10,000+ concurrent users. Features production-ready multi-environment deployment (dev/preprod/prod), advanced user management with role-based access control, 90% test coverage, Docker orchestration with Kubernetes support, and comprehensive security implementations achieving SOC 2 compliance standards."
    ],
    link: "https://github.com/edsteine/ed_project",
    technologies: ["Django", "Django REST Framework", "PostgreSQL", "Redis", "Celery", "Docker", "Nginx", "GraphQL", "Poetry", "PostgreSQL with GeoDjango", "JWT Authentication", "GitHub Actions"],
    image: "/images/ed-project.png", // Placeholder
    keyFeatures: [
      "Multi-environment deployment configurations",
      "Advanced user management with authentication and authorization",
      "Comprehensive REST API with detailed documentation",
      "GraphQL integration for flexible data queries",
      "Custom encryption handlers for secure data processing",
      "Professional monitoring and logging systems",
      "Docker containerization with Nginx configurations",
      "Advanced caching and performance optimization",
      "Automated backup and restore systems"
    ],
    architecture: [
      "Django REST Framework with clean API design",
      "PostgreSQL database with spatial extensions",
      "Redis caching for performance optimization",
      "Celery for background task processing",
      "Docker multi-stage builds for different environments",
      "Nginx reverse proxy with SSL termination",
      "Comprehensive security configurations"
    ],
    developmentFeatures: [
      "Multi-environment settings (dev, preprod, prod)",
      "Automated database migrations and fixtures",
      "Code quality tools (flake8, black, isort)",
      "Comprehensive test coverage (unit, integration, performance)",
      "CI/CD pipelines with GitHub Actions",
      "Automated dependency management with Poetry",
      "Professional project structure and documentation"
    ],
    securityImplementation: [
      "Custom encryption handlers for sensitive data",
      "JWT token authentication with refresh mechanisms",
      "Fail2ban integration for intrusion detection",
      "SSL certificate management",
      "Firewall configurations for different environments",
      "Security monitoring and alerting systems"
    ]
  },
  {
    title: "AndroidFilePicker - Compose Permission Library",
    description: "Open-source Android Compose library engineered for enterprise-level file permission management and file picking functionality. Features reusable composable functions for requesting and handling common Android permissions, Material 3 design system implementation, comprehensive error handling with rationale dialogs, and modular architecture with clear separation of concerns.",
    fullDescription: [
      "Open-source Android Compose library engineered for enterprise-level file permission management and file picking functionality. Features reusable composable functions for requesting and handling common Android permissions, Material 3 design system implementation, comprehensive error handling with rationale dialogs, and modular architecture with clear separation of concerns."
    ],
    link: "https://github.com/edsteine/androidfilepicker",
    technologies: ["Kotlin", "Jetpack Compose", "Material 3", "Android Studio", "ViewModel", "Fastlane", "GitHub Actions", "JUnit", "Timber (Logging)"],
    image: "/images/android-file-picker.png", // Placeholder
    keyFeatures: [
      "Reusab`le composable functions for permission requests",
      "Support for Camera, Location, Storage, SMS, and other common permissions",
      "Material 3 components and theming",
      "Error handling with permanent denial detection",
      "Settings dialog integration for denied permissions",
      "Permission state management with ViewModel",
      "Comprehensive unit and integration testing",
      "Fastlane integration for CI/CD automation"
    ],
    architecture: [
      "MVVM pattern with ViewModel state management",
      "Modular design with components, contracts, and utils",
      "Higher-order functions for permission handling",
      "Clean separation between UI, business logic, and utilities"
    ],
    openSourceContributionDetails: [
      "Android File Picker Enhanced: Extended file picker with cloud storage support, demonstrating expertise in Android UI/UX and integration with external services."
    ]
  },
  {
    title: "MapSync - Advanced Flutter Offline Map",
    description: "Sophisticated Flutter mapping application with comprehensive offline capabilities, featuring advanced Mapbox SDK integration, live API backend connection to 142 locations, robust testing infrastructure including performance benchmarking, and professional Clean Architecture implementation. The app provides offline map functionality with tile caching, dynamic marker fetching, and optimized performance.",
    fullDescription: [
      "Sophisticated Flutter mapping application with comprehensive offline capabilities, featuring advanced Mapbox SDK integration, live API backend connection to 142 locations, robust testing infrastructure including performance benchmarking, and professional Clean Architecture implementation. The app provides offline map functionality with tile caching, dynamic marker fetching, and optimized performance."
    ],
    link: "https://github.com/edsteine/wmobile", // MapSync and WMobile share the same repo link
    technologies: ["Flutter", "Dart", "Riverpod", "Mapbox SDK", "Clean Architecture", "REST APIs", "Git", "Performance Monitoring", "Unit/Integration Testing"],
    image: "/images/mapsync.png", // Placeholder
    keyFeatures: [
      "Core Features: Offline maps with intelligent tile caching, MVVM pattern using Riverpod state management, Optimized map rendering and user interaction, Extensive testing suite with unit, integration, and performance tests, Interactive maps using Mapbox SDK, Dynamic markers fetched from REST API (142 locations), Offline region download with progress tracking, Light/dark theme support with push notifications.",
      "Architecture: Clean Architecture with layered design, Presentation Layer: MVVM with Riverpod, Domain Layer: Business logic and entities, Data Layer: Repository pattern with data sources, Performance monitoring and resource optimization.",
      "API Integration: Live connection to https://w-project-u75x.onrender.com/api/v1/locations/, GeoJSON support for location data, Pagination with 10 locations per page, Real-time marker updates and synchronization."
    ],
    openSourceContributionDetails: [
      "MapSync Flutter Plugin: Custom offline mapping library for Flutter, designed to provide robust offline capabilities and advanced Mapbox SDK integration. This project demonstrates expertise in mobile mapping solutions and performance optimization for geospatial data."
    ]
  },
  {
    title: "Django Project - Core Django API",
    description: "Enterprise-grade Django REST API project demonstrating advanced backend development practices with comprehensive user management, authentication, and data processing capabilities. Built with Django 5.1.4 and Django REST Framework, featuring PostgreSQL optimization, Poetry dependency management, 85% test coverage, and production-ready multi-environment deployment supporting 1000+ concurrent requests with sub-200ms response times.",
    fullDescription: [
      "Enterprise-grade Django REST API project demonstrating advanced backend development practices with comprehensive user management, authentication, and data processing capabilities. Built with Django 5.1.4 and Django REST Framework, featuring PostgreSQL optimization, Poetry dependency management, 85% test coverage, and production-ready multi-environment deployment supporting 1000+ concurrent requests with sub-200ms response times."
    ],
    link: "https://github.com/edsteine/django_project",
    technologies: ["Django", "Django REST Framework", "PostgreSQL", "Python", "Poetry", "Django Testing Framework", "Django ORM", "Psycopg2", "Django-environ", "Django-cors-headers", "Django-extensions", "Pytest", "Factory Boy", "Docker", "Makefile", "Pre-commit Hooks", "OpenAPI/Swagger", "JWT Authentication", "Git/GitHub"],
    image: "/images/django-project.png", // Placeholder
    keyFeatures: [
      "Django 5.1.4 REST API with 20+ optimized endpoints handling 1000+ requests/minute",
      "Advanced user management with JWT authentication and role-based access control",
      "PostgreSQL database with custom indexing reducing query time by 75%",
      "Poetry dependency management ensuring reproducible builds across environments",
      "Multi-environment configuration (development, testing, staging, production)",
      "Comprehensive testing suite with 85% coverage (unit, integration, API tests)",
      "Django ORM with advanced querying, prefetch optimization, and select_related",
      "OpenAPI documentation with automatic validation and interactive testing",
      "Production-ready deployment with Docker containerization and environment secrets",
      "Custom management commands for database seeding and maintenance",
      "Advanced middleware for request logging, rate limiting, and security headers",
      "Database migration strategies with rollback capabilities"
    ],
    architecture: [
      "Model-View-Controller (MVC) with Django's MVT pattern achieving clean separation of concerns",
      "Django REST Framework with custom serializers and viewsets handling complex data transformations",
      "PostgreSQL 15+ with connection pooling, custom indexing, and query optimization (75% improvement)",
      "Environment-based configuration using Django-environ for secrets management",
      "Layered testing strategy: 30+ unit tests, 15+ integration tests, 10+ API endpoint tests",
      "Custom middleware pipeline with authentication, logging, and performance monitoring",
      "Database query optimization reducing average response time from 800ms to 180ms",
      "Automated development workflows with Makefile supporting 15+ common operations"
    ],
    developmentDevOps: [
      "Poetry for deterministic dependency management with lock files",
      "Multi-environment support (dev, test, staging, prod) with automatic configuration switching",
      "Django testing framework with fixtures, factories, and mocking capabilities",
      "Database migrations with custom data migrations and rollback strategies",
      "Pre-commit hooks ensuring code quality and preventing broken commits",
      "Custom management commands for data seeding, cleanup, and monitoring",
      "Docker containerization with multi-stage builds reducing image size by 60%",
      "CI/CD integration with automated testing and deployment pipelines"
    ]
  },
  {
    title: "Show-APP - Android Information Display",
    description: "Production-ready Android native application demonstrating modern mobile development with Kotlin and enterprise-level architecture patterns. Features advanced Hilt dependency injection, Gradle build system with Kotlin DSL, comprehensive MVVM implementation, and Android Jetpack components achieving 99% crash-free sessions and supporting 60fps performance on devices with API 24+.",
    fullDescription: [
      "Production-ready Android native application demonstrating modern mobile development with Kotlin and enterprise-level architecture patterns. Features advanced Hilt dependency injection, Gradle build system with Kotlin DSL, comprehensive MVVM implementation, and Android Jetpack components achieving 99% crash-free sessions and supporting 60fps performance on devices with API 24+."
    ],
    link: "https://github.com/edsteine/Show-APP",
    technologies: ["Kotlin", "Android Native", "MVVM Architecture Pattern", "Hilt Dependency Injection", "Gradle", "Android Jetpack Components", "Jetpack Compose", "Android Studio", "Kotlin Coroutines", "StateFlow/LiveData", "Room Database", "Retrofit/OkHttp", "Material Design", "Navigation Component", "ViewModel", "Data Binding", "View Binding", "ProGuard/R8 Optimization"],
    image: "/images/show-app.png", // Placeholder
    keyFeatures: [
      "Information display and management system",
      "Professional Android architecture with MVVM pattern",
      "Hilt dependency injection for modular design",
      "Modern Gradle build system with Kotlin DSL",
      "Android Jetpack Components integration",
      "Clean separation of concerns",
      "Reactive programming patterns",
      "Professional UI/UX design"
    ],
    architecture: [
      "MVVM (Model-View-ViewModel) pattern",
      "Hilt dependency injection container",
      "Repository pattern for data management",
      "Clean Architecture principles",
      "Reactive programming with LiveData/Flow",
      "Modern Android development practices"
    ],
    developmentFeatures: [
      "Kotlin DSL for build configuration",
      "Professional project structure",
      "Modular architecture design",
      "Comprehensive error handling",
      "Performance optimization"
    ]
  }
];

export default projectsData;
