"use client";

import React from 'react';
import { useTheme } from 'next-themes';

const technicalSkills = {
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
  "Problem-Solving & Analytical Skills", "Communication & Collaboration", "Time Management & Organization",
  "Leadership & Mentoring", "Adaptability & Continuous Learning", "Goal-Oriented & Proactive Approach",
  "Quality Assurance & Attention to Detail", "Client Relations & Business Acumen", "Creative & Innovative Thinking"
];

const Skills = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or a loading spinner, or a skeleton
  }

  return (
    <div className="container mx-auto p-8">
      <div className="mb-12">
        <h4 className="text-2xl font-bold mb-4">Technical Skills</h4>
        {Object.entries(technicalSkills).map(([category, skills], index) => (
          <div key={index} className="mb-6">
            <h5 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">{category}</h5>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, skillIndex) => (
                <span key={skillIndex} className={` ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} px-3 py-1 rounded-full text-sm border border-gray-300 dark:border-gray-700`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h4 className="text-2xl font-bold mb-4">Soft Skills</h4>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill, index) => (
            <span key={index} className={` ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} px-3 py-1 rounded-full text-sm border border-gray-300 dark:border-gray-700`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;