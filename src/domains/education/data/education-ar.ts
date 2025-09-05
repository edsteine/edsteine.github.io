import { Education, Certification, ProfessionalDevelopment } from '@/lib/types/content';

export const educationData: Education[] = [
  {
    institution: "جامعة الحسن الثاني",
    degree: "درجة الماجستير في علوم الحاسوب",
    field: "هندسة البرمجيات وتطوير التطبيقات المحمولة",
    period: "2015 - 2017",
    location: "الدار البيضاء، المغرب",
    description: [
      "تخصص في هندسة البرمجيات وتطوير تطبيقات الهاتف المحمول",
      "أكملت مقررات متقدمة في الخوارزميات وهياكل البيانات وتصميم الأنظمة",
      "أطروحة: 'أطر تطوير تطبيقات الهاتف المحمول متعددة المنصات: تحليل الأداء'",
      "تخرجت بامتياز عالي (المعدل: 3.8/4.0)"
    ],
    achievements: [
      "قائمة شرف العميد للتفوق الأكاديمي (2016-2017)",
      "جائزة أفضل مشروع تطبيق محمول لنظام إدارة مكتبة أندرويد",
      "مساعد باحث في مختبر الحوسبة المتنقلة"
    ],
    relevantCoursework: [
      "تطوير تطبيقات الهاتف المحمول",
      "هندسة البرمجيات وأنماط التصميم",
      "أنظمة إدارة قواعد البيانات",
      "شبكات الحاسوب والأمان",
      "الذكاء الاصطناعي والتعلم الآلي",
      "التفاعل بين الإنسان والحاسوب"
    ]
  },
  {
    institution: "جامعة محمد الخامس",
    degree: "درجة البكالوريوس في علوم الحاسوب",
    field: "تكنولوجيا المعلومات",
    period: "2012 - 2015",
    location: "الرباط، المغرب",
    description: [
      "أساس في أساسيات علوم الحاسوب والبرمجة",
      "تركيز قوي على الرياضيات والخوارزميات وحل المشكلات",
      "أكملت مشاريع جماعية متعددة باستخدام لغات برمجة مختلفة",
      "تخرجت بامتياز مع مرتبة الشرف (المعدل: 3.6/4.0)"
    ],
    achievements: [
      "تخرج بمرتبة الشرف مع امتياز",
      "الفائز في مسابقة البرمجة الجامعية (2014)",
      "رئيس جمعية طلاب علوم الحاسوب (2014-2015)"
    ],
    relevantCoursework: [
      "هياكل البيانات والخوارزميات",
      "البرمجة الشيئية (Java, C++)",
      "تطوير الويب (HTML, CSS, JavaScript)",
      "تصميم قواعد البيانات و SQL",
      "أنظمة التشغيل",
      "مبادئ هندسة البرمجيات"
    ]
  }
];

export const certifications: Certification[] = [
  {
    name: "AWS مطور معتمد - مشارك",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-DEV-2023-001",
    description: "يثبت الكفاءة في تطوير وصيانة تطبيقات AWS"
  },
  {
    name: "Google مطور أندرويد مشارك",
    issuer: "Google",
    date: "2022", 
    credentialId: "GAAD-2022-001",
    description: "يصادق على مهارات تطوير أندرويد وأفضل الممارسات"
  },
  {
    name: "شهادة Spring المهنية",
    issuer: "Pivotal",
    date: "2021",
    credentialId: "SPRING-PRO-2021-001",
    description: "خبرة متقدمة في Spring Framework و Spring Boot"
  }
];

export const professionalDevelopment: ProfessionalDevelopment[] = [
  {
    title: "أنماط هندسة تطبيقات الهاتف المحمول المتقدمة",
    provider: "Mobile Dev Summit",
    date: "2024",
    duration: "40 ساعة",
    description: "غوص عميق في MVVM والهندسة النظيفة وأنماط حقن التبعية"
  },
  {
    title: "تطوير التطبيقات السحابية الأصلية", 
    provider: "AWS Training",
    date: "2023",
    duration: "60 ساعة",
    description: "الخدمات الدقيقة والحاويات والهندسات بدون خادم"
  },
  {
    title: "القيادة في فرق التكنولوجيا",
    provider: "Tech Leadership Institute",
    date: "2022",
    duration: "30 ساعة", 
    description: "إدارة الفرق والإرشاد واتخاذ القرارات التقنية"
  }
];