import { Skill, SkillCategory, TechnicalSkillsMap } from '@/lib/types/content';

export const technicalSkillsMap: TechnicalSkillsMap = {
  
  "Flutter": { level: 95, category: "تطوير الهاتف المحمول", yearsUsed: 6, projectsUsed: 15 },
  "React Native": { level: 88, category: "تطوير الهاتف المحمول", yearsUsed: 4, projectsUsed: 8 },
  "Android Native": { level: 85, category: "تطوير الهاتف المحمول", yearsUsed: 5, projectsUsed: 12 },
  "Dart": { level: 93, category: "تطوير الهاتف المحمول", yearsUsed: 6, projectsUsed: 15 },
  "Kotlin": { level: 82, category: "تطوير الهاتف المحمول", yearsUsed: 4, projectsUsed: 10 },

  
  "React": { level: 90, category: "تطوير الواجهة الأمامية", yearsUsed: 5, projectsUsed: 20 },
  "JavaScript": { level: 92, category: "تطوير الواجهة الأمامية", yearsUsed: 8, projectsUsed: 35 },
  "TypeScript": { level: 85, category: "تطوير الواجهة الأمامية", yearsUsed: 3, projectsUsed: 12 },
  "Next.js": { level: 87, category: "تطوير الواجهة الأمامية", yearsUsed: 2, projectsUsed: 8 },
  "Tailwind CSS": { level: 90, category: "تطوير الواجهة الأمامية", yearsUsed: 3, projectsUsed: 15 },

  
  "Spring Boot": { level: 88, category: "تطوير الواجهة الخلفية", yearsUsed: 4, projectsUsed: 12 },
  "Node.js": { level: 85, category: "تطوير الواجهة الخلفية", yearsUsed: 4, projectsUsed: 18 },
  "Express.js": { level: 83, category: "تطوير الواجهة الخلفية", yearsUsed: 3, projectsUsed: 15 },
  "PostgreSQL": { level: 87, category: "تطوير الواجهة الخلفية", yearsUsed: 5, projectsUsed: 20 },
  "PostGIS": { level: 85, category: "تطوير الواجهة الخلفية", yearsUsed: 3, projectsUsed: 8 },

  
  "AWS": { level: 80, category: "السحابة والعمليات التطويرية", yearsUsed: 3, projectsUsed: 10 },
  "Docker": { level: 78, category: "السحابة والعمليات التطويرية", yearsUsed: 2, projectsUsed: 8 },
  "Git": { level: 95, category: "السحابة والعمليات التطويرية", yearsUsed: 9, projectsUsed: 50 },
  "CI/CD": { level: 75, category: "السحابة والعمليات التطويرية", yearsUsed: 2, projectsUsed: 6 }
};

export const technicalSkillsCategories: SkillCategory[] = [
  {
    name: "تطوير الهاتف المحمول",
    skills: ["Flutter", "React Native", "Android Native", "Dart", "Kotlin"],
    description: "تطوير تطبيقات الهاتف المحمول متعددة المنصات والأصلية"
  },
  {
    name: "تطوير الواجهة الأمامية", 
    skills: ["React", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS"],
    description: "واجهات ويب حديثة وتفاعلية وسريعة الاستجابة"
  },
  {
    name: "تطوير الواجهة الخلفية",
    skills: ["Spring Boot", "Node.js", "Express.js", "PostgreSQL", "PostGIS"],
    description: "خدمات خلفية قابلة للتوسع وقواعد بيانات قوية"
  },
  {
    name: "السحابة والعمليات التطويرية",
    skills: ["AWS", "Docker", "Git", "CI/CD"],
    description: "نشر السحابة والبنية التحتية والأتمتة"
  }
];

export const softSkills: Skill[] = [
  {
    name: "القيادة التقنية",
    level: 90,
    description: "قيادة فرق التطوير وتوجيه القرارات التقنية"
  },
  {
    name: "الإرشاد والتوجيه", 
    level: 88,
    description: "توجيه المطورين المبتدئين والمتوسطين"
  },
  {
    name: "حل المشكلات",
    level: 92,
    description: "تحديد وحل التحديات التقنية المعقدة"
  },
  {
    name: "التواصل",
    level: 85,
    description: "شرح المفاهيم التقنية لأصحاب المصلحة غير التقنيين"
  },
  {
    name: "إدارة المشاريع",
    level: 83,
    description: "تخطيط وتنفيذ المشاريع التقنية في الوقت المحدد"
  },
  {
    name: "التفكير النقدي",
    level: 90,
    description: "تحليل المتطلبات واتخاذ قرارات تصميم مدروسة"
  }
];