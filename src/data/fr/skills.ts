import type { TechnicalSkillsMap } from '@/types';
// SkillCategory and Skill types available for future use

export const technicalSkillsMap: TechnicalSkillsMap = {
  // Mobile Development - Fixed scale to match English (1-100 instead of 1-10)
  "kotlin": { category: "Mobile", level: 95, experience: "5+ years", description: "Expert in Android development" },
  "android": { category: "Mobile", level: 95, experience: "5+ years", description: "Native Android development" },
  "flutter": { category: "Mobile", level: 90, experience: "3+ years", description: "Cross-platform mobile development" },
  "dart": { category: "Mobile", level: 85, experience: "3+ years", description: "Flutter development language" },
  
  // Frontend - Fixed scale to match English (1-100 instead of 1-10)
  "react": { category: "Frontend", level: 85, experience: "4+ years", description: "Modern React development" },
  "next.js": { category: "Frontend", level: 80, experience: "2+ years", description: "React framework" },
  "javascript": { category: "Frontend", level: 90, experience: "6+ years", description: "ES6+ JavaScript" },
  "typescript": { category: "Frontend", level: 80, experience: "3+ years", description: "Type-safe JavaScript" },
  
  // Backend - Fixed scale to match English (1-100 instead of 1-10)
  "spring boot": { category: "Backend", level: 90, experience: "4+ years", description: "Java microservices" },
  "node.js": { category: "Backend", level: 75, experience: "3+ years", description: "Server-side JavaScript" },
  "python": { category: "Backend", level: 80, experience: "4+ years", description: "Backend development" },
  "django": { category: "Backend", level: 70, experience: "2+ years", description: "Python web framework" },
  
  // Database - Fixed scale to match English (1-100 instead of 1-10)
  "postgresql": { category: "Database", level: 90, experience: "5+ years", description: "Relational database" },
  "postgis": { category: "Database", level: 85, experience: "3+ years", description: "Geospatial database extension" },
  "sql": { category: "Database", level: 90, experience: "6+ years", description: "Database queries" },
  
  // Cloud & DevOps - Fixed scale to match English (1-100 instead of 1-10)
  "aws": { category: "Cloud", level: 70, experience: "2+ years", description: "Cloud infrastructure" },
  "docker": { category: "DevOps", level: 75, experience: "3+ years", description: "Containerization" },
  "git": { category: "DevOps", level: 95, experience: "6+ years", description: "Version control" },
  "github": { category: "DevOps", level: 85, experience: "6+ years", description: "Code collaboration" }
};

export const technicalSkillsCategories = [
  {
    name: "Mobile Development",
    skills: ["kotlin", "android", "flutter", "dart"],
    color: "bg-[#10b981]",
    icon: "📱"
  },
  {
    name: "Frontend Development", 
    skills: ["react", "next.js", "javascript", "typescript"],
    color: "bg-[#3b82f6]",
    icon: "🌐"
  },
  {
    name: "Backend Development",
    skills: ["spring boot", "node.js", "python", "django"],
    color: "bg-[#8b5cf6]",
    icon: "⚙️"
  },
  {
    name: "Database & Geospatial",
    skills: ["postgresql", "postgis", "sql"],
    color: "bg-[#f97316]",
    icon: "🗄️"
  },
  {
    name: "Cloud & DevOps",
    skills: ["aws", "docker", "git", "github"],
    color: "bg-[#6366f1]",
    icon: "☁️"
  }
];

export const softSkills = [
  {
    name: "Leadership",
    level: 9,
    description: "Led teams of 12+ developers across multiple projects"
  },
  {
    name: "Problem Solving", 
    level: 9,
    description: "Architect solutions for complex technical challenges"
  },
  {
    name: "Communication",
    level: 8,
    description: "Bridge technical and business stakeholders effectively"
  },
  {
    name: "Mentoring",
    level: 8,
    description: "Guided junior developers and established best practices"
  },
  {
    name: "Project Management",
    level: 7,
    description: "Coordinated cross-functional teams and deliverables"
  }
];