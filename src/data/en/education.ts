import type { Education } from '@/types';
// Certification and ProfessionalDevelopment types available for future use

export const educationData: Education[] = [
  {
    institution: "Hassan II University",
    degree: "Master's Degree in Computer Science",
    field: "Software Engineering & Mobile Development",
    period: "2015 - 2017",
    location: "Casablanca, Morocco",
    description: [
      "Specialized in software architecture and mobile application development",
      "Completed advanced coursework in algorithms, data structures, and system design",
      "Thesis: 'Cross-platform Mobile Development Frameworks: Performance Analysis'",
      "Graduated with High Distinction (GPA: 3.8/4.0)"
    ],
    achievements: [
      "Dean's List for Academic Excellence (2016-2017)",
      "Best Mobile App Project Award for Android Library Management System",
      "Research Assistant for Mobile Computing Lab"
    ],
    relevantCoursework: [
      "Mobile Application Development",
      "Software Architecture & Design Patterns",
      "Database Management Systems",
      "Computer Networks & Security",
      "Artificial Intelligence & Machine Learning",
      "Human-Computer Interaction"
    ]
  },
  {
    institution: "Mohammed V University",
    degree: "Bachelor's Degree in Computer Science",
    field: "Information Technology",
    period: "2012 - 2015",
    location: "Rabat, Morocco",
    description: [
      "Foundation in computer science fundamentals and programming",
      "Strong emphasis on mathematics, algorithms, and problem-solving",
      "Completed multiple team projects using various programming languages",
      "Graduated Magna Cum Laude (GPA: 3.6/4.0)"
    ],
    achievements: [
      "Magna Cum Laude graduation honors",
      "Winner of University Programming Contest (2014)",
      "President of Computer Science Student Association (2014-2015)"
    ],
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java, C++)",
      "Web Development (HTML, CSS, JavaScript)",
      "Database Design & SQL",
      "Operating Systems",
      "Software Engineering Principles"
    ]
  }
];

export const certifications = [
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-DEV-2023-001",
    description: "Demonstrates proficiency in developing and maintaining AWS applications"
  },
  {
    name: "Google Associate Android Developer",
    issuer: "Google",
    date: "2022", 
    credentialId: "GAAD-2022-001",
    description: "Validates Android development skills and best practices"
  },
  {
    name: "Spring Professional Certification",
    issuer: "Pivotal",
    date: "2021",
    credentialId: "SPRING-PRO-2021-001",
    description: "Advanced Spring Framework and Spring Boot expertise"
  }
];

export const professionalDevelopment = [
  {
    title: "Advanced Mobile Architecture Patterns",
    provider: "Mobile Dev Summit",
    date: "2024",
    duration: "40 hours",
    description: "Deep dive into MVVM, Clean Architecture, and dependency injection patterns"
  },
  {
    title: "Cloud-Native Application Development", 
    provider: "AWS Training",
    date: "2023",
    duration: "60 hours",
    description: "Microservices, containerization, and serverless architectures"
  },
  {
    title: "Leadership in Tech Teams",
    provider: "Tech Leadership Institute",
    date: "2022",
    duration: "30 hours", 
    description: "Team management, mentoring, and technical decision making"
  }
];