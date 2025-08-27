import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import BackToTopButton from "@/components/BackToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adil Ajdaa - Senior Full Stack Mobile Developer & Technical Architect",
  description: "Portfolio of Adil Ajdaa, a Senior Full Stack Mobile Developer and Technical Architect with expertise in mobile (Kotlin, Flutter), geospatial, and full-stack development. Building scalable and performant applications.",
  keywords: ["Adil Ajdaa", "Portfolio", "Mobile Developer", "Full Stack", "Technical Architect", "Kotlin", "Flutter", "Geospatial", "React", "Next.js", "Node.js", "Django"],
  authors: [{ name: "Adil Ajdaa" }],
  creator: "Adil Ajdaa",
  publisher: "Adil Ajdaa",
  openGraph: {
    title: "Adil Ajdaa - Senior Full Stack Mobile Developer & Technical Architect",
    description: "Portfolio of Adil Ajdaa, a Senior Full Stack Mobile Developer and Technical Architect with expertise in mobile (Kotlin, Flutter), geospatial, and full-stack development. Building scalable and performant applications.",
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
    title: "Adil Ajdaa - Senior Full Stack Mobile Developer & Technical Architect",
    description: "Portfolio of Adil Ajdaa, a Senior Full Stack Mobile Developer and Technical Architect with expertise in mobile (Kotlin, Flutter), geospatial, and full-stack development. Building scalable and performant applications.",
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
    "jobTitle": "Senior Full Stack Mobile Developer & Technical Architect",
    "description": "Portfolio of Adil Ajdaa, a Senior Full Stack Mobile Developer and Technical Architect with expertise in mobile (Kotlin, Flutter), geospatial, and full-stack development. Building scalable and performant applications."
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
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
        <BackToTopButton /> {/* Render BackToTopButton */}
      </body>
    </html>
  );
}