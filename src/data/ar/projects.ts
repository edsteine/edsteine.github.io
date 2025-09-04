import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "MapSync - منصة إدارة البيانات الجغرافية المكانية",
    description: "منصة إدارة البيانات الجغرافية المكانية على مستوى المؤسسات تخدم 100,000+ مستخدم يومي مع توفر 99.9%. مبنية بهيكلة الخدمات الدقيقة Spring Boot و PostGIS للعمليات المكانية المتقدمة.",
    longDescription: "منصة شاملة لإدارة البيانات الجغرافية المكانية ثورت الطريقة التي تتعامل بها المنظمات مع البيانات القائمة على الموقع. يعالج النظام ملايين نقاط البيانات الجغرافية يومياً، ويوفر تحليل مكاني فوري، والتحقق الآلي من البيانات، والتكامل السلس مع سير العمل GIS الموجود.",
    image: "/images/mapsync.svg",
    technologies: ["Spring Boot", "PostgreSQL", "PostGIS", "Kotlin", "React", "AWS"],
    category: "Full Stack",
    featured: true,
    demoUrl: "https://demo.mapsync.com",
    githubUrl: "https://github.com/user/mapsync",
    highlights: [
      "معالجة 10 مليون+ نقطة بيانات جغرافية يومياً",
      "تحقيق 99.9% توفر النظام",
      "تقليل وقت معالجة البيانات بنسبة 60%",
      "خدمة 100,000+ مستخدم نشط يومي"
    ],
    metrics: {
      users: "100 ألف+",
      uptime: "99.9%",
      performance: "60% أسرع",
      scale: "10 مليون+ سجل"
    }
  }
  // المزيد من المشاريع...
];