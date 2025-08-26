import React from 'react';

const experienceData = [
  {
    company: "Wlidaty",
    role: "Senior Flutter Developer",
    period: "Feb 2025 - Present",
    description: "Architected strategic Flutter mobile platform eliminating $99-$1000+/month subscription dependencies. Developed AI-assisted development methodology using Claude Code and Gemini Code tools, accelerating feature development. Implemented comprehensive CI/CD automation using GitHub Actions and Fastlane.",
    technologies: ["Flutter", "AI (Claude, Gemini)", "CI/CD (GitHub Actions, Fastlane)", "TDD"]
  },
  {
    company: "GeoBat",
    role: "Senior Mobile Developer – GIS Field Systems",
    period: "May 2024 - Nov 2024",
    description: "Developed a complete field-to-office data pipeline for urban development surveying projects using Kotlin Android and Django/PostGIS backend. Built offline-capable mobile application enabling field agents to collect GPS coordinates. Engineered ArcGIS-compatible data export functionality.",
    technologies: ["Kotlin", "Android", "Django", "PostGIS", "ArcGIS"]
  },
  {
    company: "Implemental Systems",
    role: "Senior Mobile Architect & Smallworld Specialist",
    period: "Jun 2018 - May 2024",
    description: "Led mobile and GIS development initiatives across Europe, Africa, and Latin America. Architected Kotlin/Java airport operations system. Developed mobile GIS application connecting field agents to Smallworld PNI backend using Magik. Achieved 99.9% system uptime and 96% database query enhancement.",
    technologies: ["Kotlin", "Java", "Smallworld/Magik", "GIS", "Spring Boot", "Kafka", "GraphQL", "CI/CD"]
  },
  {
    company: "BeeGoh",
    role: "Full Stack Developer",
    period: "Aug 2015 - May 2018",
    description: "Led development of 8+ mobile applications across social media, delivery services, and education sectors serving 50,000+ active users. Developed actuarial simulation processing 500+ complex scenarios daily with 99.8% accuracy. Optimized API response times from 800ms to 400ms.",
    technologies: ["Kotlin", "Flutter", "Ionic", "React Native", "Django REST Framework", "Node.js", "Express.js", "PostgreSQL", "MySQL", "Firebase"]
  },
  {
    company: "Tricall S.A.R.L",
    role: "Web Developer (Final Year Project - PFE)",
    period: "Feb 2015 - Apr 2015",
    description: "Led the complete digital transformation of Tricall S.A.R.L's call center operations through development of an integrated management platform serving 50+ agents and processing 1,000+ daily customer interactions.",
    technologies: ["PHP", "MySQL", "WordPress", "WebSocket"]
  },
  {
    company: "Atlanta Assurance",
    role: "Development Intern (Final Year Project - PFE)",
    period: "2012 - 2013",
    description: "Led the design and development of a mission-critical financial simulation application, creating the comprehensive 'ISTIMRAR' retirement savings simulator. Processed 500+ complex financial scenarios daily with 99.8% accuracy.",
    technologies: ["PHP", "MySQL", "jQuery", "Chart.js", "Monte Carlo simulation"]
  },
  {
    company: "Faculté des Sciences Ain Chock",
    role: "PHP/MySQL Developer",
    period: "Mar 2012 - Jul 2013",
    description: "Led comprehensive digital transformation initiatives for Morocco's largest public university, developing mission-critical applications serving 15,000+ students and 500+ faculty members. Achieved 96% query performance improvement.",
    technologies: ["PHP", "MySQL", "Apache HTTP Server"]
  },
  {
    company: "Maroc Soir",
    role: "Development Intern",
    period: "2012 - 2013 (2 months)",
    description: "Led key development initiatives for the Morocco Business Intelligence (MBI) platform, a strategic government-backed economic intelligence tool designed to attract international investment and showcase Morocco's economic potential.",
    technologies: ["PHP", "MySQL", "WordPress", "Chart.js", "D3.js"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto p-8 bg-white dark:bg-gray-800">
      <h3 className="text-3xl font-bold text-center mb-12">Work Experience</h3>
      <div className="relative border-l-2 border-gray-700 dark:border-gray-300">
        {experienceData.map((job, index) => (
          <div key={index} className="mb-8 flex items-center w-full p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
            <div className="absolute -left-4 bg-gray-500 dark:bg-gray-400 rounded-full h-8 w-8"></div>
            <div className="ml-12 w-full">
              <h4 className="text-xl font-bold">{job.role}</h4>
              <p className="text-lg font-semibold">{job.company}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{job.period}</p>
              <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;