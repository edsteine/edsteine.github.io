import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { LanguageProvider } from "@/hooks/useLanguage";
import BackToTopButton from "@/components/layout/BackToTopButton";
import ParticleBackground from "@/components/ParticleBackground";
import CustomCursor from "@/components/CustomCursor";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import { Suspense } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adil Ajdaa - Senior Mobile Architect | 9+ Years | 100k+ Users Served",
  description: "Senior Mobile Developer & Technical Architect with 9+ years experience building enterprise apps for 100,000+ users. Expert in Kotlin, Flutter, React, Spring Boot. Led teams of 12+ developers with 99.9% uptime achievement.",
  keywords: ["Adil Ajdaa", "Senior Mobile Developer", "Technical Architect", "Kotlin Expert", "Flutter Developer", "Android Developer", "React Developer", "Spring Boot", "Full Stack", "Enterprise Apps", "Geospatial", "PostGIS", "Team Lead", "Morocco", "Spain", "Remote Developer", "100k users", "99.9% uptime", "Mobile Architecture", "Cross-platform", "Next.js", "TypeScript", "Python", "Django", "PostgreSQL", "AWS", "Docker", "Microservices"],
  authors: [{ name: "Adil Ajdaa" }],
  creator: "Adil Ajdaa",
  publisher: "Adil Ajdaa",
  openGraph: {
    title: "Adil Ajdaa - Senior Mobile Architect | 9+ Years | 100k+ Users",
    description: "Senior Mobile Developer & Technical Architect with 9+ years experience. Expert in Kotlin, Flutter, React, Spring Boot. Led teams of 12+ developers serving 100,000+ daily users with 99.9% uptime.",
    url: "https://edsteine.github.io/", // Updated with actual portfolio URL
    siteName: "Adil Ajdaa's Portfolio",
    images: [
      {
        url: "https://via.placeholder.com/1200x630", // Updated with placeholder image URL
        width: 1200,
        height: 630,
        alt: "Adil Ajdaa's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adil Ajdaa - Senior Mobile Architect | 9+ Years | 100k+ Users",
    description: "Senior Mobile Developer & Technical Architect with 9+ years experience. Expert in Kotlin, Flutter, React, Spring Boot. Led teams of 12+ developers with 99.9% uptime.",
    images: ["https://via.placeholder.com/1200x630"], // Updated with placeholder image URL
    
  },
  alternates: {
    canonical: "https://edsteine.github.io/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Adil Ajdaa",
    "url": "https://edsteine.github.io/",
    "sameAs": [
      "https://github.com/edsteine",
      "https://linkedin.com/in/edsteine"
    ],
    "jobTitle": "Senior Mobile Developer & Technical Architect",
    "description": "Senior Mobile Developer & Technical Architect with 9+ years experience building enterprise applications serving 100,000+ daily users. Expert in Kotlin, Flutter, React, Spring Boot, and geospatial technologies.",
    "knowsAbout": ["Mobile Development", "Android", "Kotlin", "Flutter", "React", "Spring Boot", "Technical Architecture", "Team Leadership", "Geospatial Technologies", "Enterprise Software"],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Senior Mobile Developer",
      "occupationLocation": {
        "@type": "City", 
        "name": "Tangier, Morocco / Madrid, Spain"
      }
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <LanguageProvider>
          <ThemeProvider attribute="class">
            <Suspense fallback={null}>
              <ParticleBackground />
            </Suspense>
            <div className="relative z-10">
              <Suspense fallback={<div className="min-h-screen bg-white dark:bg-gray-900" />}>
                {children}
              </Suspense>
            </div>
            <CustomCursor />
            <PerformanceMonitor />
          </ThemeProvider>
        </LanguageProvider>
        <BackToTopButton />
      </body>
    </html>
  );
}