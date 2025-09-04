import { Testimonial, TestimonialStats } from '@/types';

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    position: "مدير التكنولوجيا",
    company: "TechCorp Solutions",
    image: "/images/testimonials/sarah-chen.jpg",
    content: "خبرة عادل التقنية ومهارات القيادة استثنائية. قاد فريق تطوير التطبيقات المحمولة لدينا خلال إصلاح شامل للمنصة، وسلم المشروع قبل الموعد المحدد مع الحفاظ على أعلى معايير الجودة. قدرته على تصميم حلول قابلة للتوسع لا مثيل لها.",
    rating: 5,
    project: "منصة الهاتف المحمول للمؤسسات",
    date: "2024"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    position: "رئيس الهندسة", 
    company: "GeoTech Innovations",
    image: "/images/testimonials/marcus-rodriguez.jpg",
    content: "العمل مع عادل على منصة البيانات الجغرافية المكانية كان نقطة تحول. فهمه العميق لـ PostGIS وقواعد البيانات المكانية ساعدنا في تحسين معالجة البيانات بنسبة 60%. إنه ليس مجرد مطور، بل مهندس تقني حقيقي.",
    rating: 5,
    project: "منصة البيانات الجغرافية المكانية",
    date: "2024"
  },
  {
    id: 3,
    name: "Amina Benali",
    position: "مدير المنتج",
    company: "FinanceFlow",
    image: "/images/testimonials/amina-benali.jpg", 
    content: "عادل حول رؤيتنا للخدمات المصرفية المحمولة إلى واقع. اهتمامه بتفاصيل الأمان وتجربة المستخدم أدى إلى تقييم 4.8/5 في متجر التطبيقات. قدم باستمرار ميزات فاقت توقعاتنا.",
    rating: 5,
    project: "تطبيق الخدمات المصرفية المحمولة",
    date: "2023"
  },
  {
    id: 4,
    name: "David Thompson",
    position: "قائد تقني",
    company: "CloudScale Systems",
    image: "/images/testimonials/david-thompson.jpg",
    content: "إرشاد عادل ساعد فريقنا بأكمله على رفع مستوى مهاراتهم. مراجعات الكود كانت تعليمية، وتوصياته لتصميم الأنظمة وفرت علينا ديون تقنية كبيرة. مزيج نادر من العمق التقني والقيادة.",
    rating: 5,
    project: "هندسة الخدمات الدقيقة",
    date: "2023"
  }
];

export const testimonialStats: TestimonialStats[] = [
  {
    label: "رضا العملاء",
    value: "98%",
    description: "متوسط تقييم الرضا من العملاء وأصحاب المصلحة"
  },
  {
    label: "المشاريع المسلمة",
    value: "+50",
    description: "مشاريع مكتملة بنجاح عبر الهاتف المحمول والويب والخلفية"
  },
  {
    label: "أعضاء الفريق الموجهون",
    value: "+25", 
    description: "مطوروف مبتدئوف ومتوسطوف تم توجيههم وإرشادهم"
  },
  {
    label: "سنوات الخبرة",
    value: "+9",
    description: "خبرة تطوير البرمجيات المهنية"
  }
];