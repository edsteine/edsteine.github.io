
import type { Metadata } from "next";

export const METADATA_BY_LANGUAGE: Record<string, Metadata> = {
  en: {
    title: "Adil Ajdaa - Senior Mobile Developer & Technical Architect",
    description: "9+ years experience building scalable mobile and web applications. Expert in Kotlin, Flutter, React, and Spring Boot.",
    keywords: "Mobile Developer, Technical Architect, Kotlin, Flutter, React, Spring Boot, Android, iOS",
    authors: [{ name: "Adil Ajdaa" }] as const,
    openGraph: {
      title: "Adil Ajdaa - Senior Mobile Developer",
      description: "Transforming complex business requirements into scalable mobile and web solutions",
      type: "website",
    },
  },
  fr: {
    title: "Adil Ajdaa - Développeur Mobile Senior & Architecte Technique",
    description: "9+ ans d'expérience dans le développement d'applications mobiles et web évolutives. Expert en Kotlin, Flutter, React et Spring Boot.",
    keywords: "Développeur Mobile, Architecte Technique, Kotlin, Flutter, React, Spring Boot, Android, iOS",
    authors: [{ name: "Adil Ajdaa" }] as const,
    openGraph: {
      title: "Adil Ajdaa - Développeur Mobile Senior",
      description: "Transformer les exigences métier complexes en solutions mobiles et web évolutives",
      type: "website",
    },
  },
  ar: {
    title: "عادل أجداع - مطور تطبيقات جوال أول ومهندس معماري تقني",
    description: "خبرة 9+ سنوات في بناء تطبيقات الجوال والويب القابلة للتوسع. خبير في Kotlin و Flutter و React و Spring Boot.",
    keywords: "مطور تطبيقات جوال, مهندس معماري تقني, Kotlin, Flutter, React, Spring Boot, Android, iOS",
    authors: [{ name: "عادل أجداع" }],
    openGraph: {
      title: "عادل أجداع - مطور تطبيقات جوال أول",
      description: "تحويل متطلبات العمل المعقدة إلى حلول جوال وويب قابلة للتوسع",
      type: "website",
    },
  },
} as const;

export function getMetadata(language: keyof typeof METADATA_BY_LANGUAGE): Metadata {
  return METADATA_BY_LANGUAGE[language] || METADATA_BY_LANGUAGE.en;
}