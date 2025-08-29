const technicalSkillsMap = {
  "Proficient in": 90,
  "Experienced in": 70,
  "Familiar with": 50,
};

const technicalSkillsCategories = {
  "Proficient in": [
    "Kotlin", "Java 17+", "JavaScript ES6+/TypeScript", "Flutter/Dart", "Android SDK",
    "Spring Boot", "Angular 15+", "React 18", "Python 3.x", "PHP 8+",
    "PostgreSQL/MySQL", "RESTful APIs", "Git/GitHub", "Mobile Development (Native & Cross-platform)",
    "Jetpack Compose", "Clean Architecture", "MVVM Pattern", "Material Design",
    "Firebase/Cloud Services", "HTML5/CSS3", "Gradle/Maven"
  ],
  "Experienced in": [
    "Node.js/Express.js", "Vue.js/Vuex", "Django/Django REST Framework", "Spring MVC/Spring Batch",
    "GraphQL", "Docker/Kubernetes", "AWS/Cloud Platforms", "Microservices Architecture",
    "Redis/ElasticSearch", "MongoDB/Room Database", "WebSocket/Real-time Communication",
    "OAuth 2.0/JWT Authentication", "CI/CD Pipelines (Jenkins, GitLab CI)", "Performance Optimization",
    "Testing Frameworks (JUnit, Espresso, Jest, Cypress)", "Apache Kafka", "Agile/Scrum Methodologies",
    "Google Maps API/OpenStreetMap", "Bluetooth Integration", "PWA Development"
  ],
  "Familiar with": [
    "SwiftUI/iOS Development", "Machine Learning/Scikit-learn", "Blockchain/Web3 Technologies",
    "IoT Development", "DevOps/Infrastructure as Code", "Big Data Analytics", "UI/UX Design (Figma)",
    "Security/Encryption (AES, RSA)", "Cloud-Native Development", "Serverless Architecture",
    "Terraform", "Prometheus/Grafana", "SOAP Web Services", "Apache HTTP Server",
    "Linux Administration", "TCP/IP Networking"
  ]
};

const softSkills = [
  {
    category: "Problem-Solving & Analytical Skills",
    details: [
      "Finding Practical Solutions: Finding practical solutions to mobile development challenges and complex technical problems",
      "Strong Analytical Abilities: Identifying bottlenecks, root cause analysis, and developing innovative solutions",
      "Technical Problem Resolution: Proposing effective solutions to complex technical challenges",
      "Critical Thinking: Analyzing problems systematically and resolving challenges quickly and efficiently",
      "Performance Optimization: Identifying and optimizing app performance issues and system bottlenecks"
    ]
  },
  {
    category: "Communication & Collaboration",
    details: [
      "Strong Communication Skills: Ability to communicate complex technical concepts clearly to diverse audiences",
      "Technical Communication: Explaining technical concepts in clear, simple terms to clients and stakeholders",
      "Cross-Functional Collaboration: Effective teamwork with diverse teams across different departments and expertise areas",
      "Client-Focused Consulting: Understanding client needs and delivering tailored solutions that enhance business outcomes",
      "Team Collaboration: Ensuring alignment on project goals and objectives through effective communication"
    ]
  },
  {
    category: "Time Management & Organization",
    details: [
      "Project Management: Delivering projects on time while managing multiple priorities and competing deadlines",
      "Time Management Excellence: Consistently meeting deadlines while managing multiple complex projects simultaneously",
      "Strong Organizational Skills: Managing multiple tasks simultaneously, prioritizing effectively without compromising quality",
      "Efficient Prioritization: Strategic task management and resource allocation for optimal productivity"
    ]
  },
  {
    category: "Leadership & Mentoring",
    details: [
      "Technical Leadership: Mentoring junior developers and guiding technical decisions with expertise and best practices",
      "Team Guidance: Leading technical discussions, architecture decisions, and development methodology implementation",
      "Code Quality Leadership: Setting and maintaining high standards for code quality, testing, and documentation",
      "Knowledge Sharing: Training team members and facilitating knowledge transfer across projects",
      "Junior Developer Mentoring: Providing comprehensive guidance and support to junior developers in their professional growth"
    ]
  },
  {
    category: "Adaptability & Continuous Learning",
    details: [
      "Technological Adaptability: Quickly adopting new tools, technologies, and development frameworks",
      "Quick Learning: Rapidly adapting to new technologies, frameworks, and work environments",
      "Industry Awareness: Staying updated with industry trends, emerging technologies, and best practices",
      "Flexibility: Adapting to changing project requirements, client needs, and business objectives"
    ]
  },
  {
    category: "Goal-Oriented & Proactive Approach",
    details: [
      "Results-Focused: Self-driven with a strong focus on achieving measurable results and business objectives",
      "Proactive Problem-Solving: Anticipating challenges and implementing preventive solutions before issues arise",
      "Initiative-Taking: Identifying improvement opportunities and driving implementation of enhanced processes",
      "Continuous Improvement: Constantly seeking ways to optimize processes, systems, and team productivity"
    ]
  },
  {
    category: "Quality Assurance & Attention to Detail",
    details: [
      "Meticulous Attention to Detail: Ensuring high standards in coding, testing, and comprehensive documentation",
      "Code Quality Excellence: Creating clean, efficient, and reliable code for scalable applications",
      "Testing Excellence: Implementing thorough testing strategies to ensure application stability and coverage",
      "Documentation Standards: Maintaining detailed technical documentation and development process records"
    ]
  },
  {
    category: "Client Relations & Business Acumen",
    details: [
      "Excellent Client Interaction: Building strong relationships with clients and understanding their business requirements",
      "Business Solution Translation: Translating technical needs into actionable business solutions and outcomes",
      "Stakeholder Management: Managing expectations and maintaining clear communication with all project stakeholders",
      "Customer Satisfaction Focus: Ensuring delivered solutions meet client expectations and enhance user satisfaction"
    ]
  },
  {
    category: "Creative & Innovative Thinking",
    details: [
      "Development Quality Innovation: Creating innovative approaches to code architecture and application design",
      "User Experience Focus: Designing solutions that prioritize exceptional user experiences and interface design",
      "Creative Problem-Solving: Developing unique approaches to overcome technical limitations and constraints",
      "Innovation Implementation: Incorporating cutting-edge technologies and methodologies into practical solutions"
    ]
  }
];

export { technicalSkillsMap, technicalSkillsCategories, softSkills };