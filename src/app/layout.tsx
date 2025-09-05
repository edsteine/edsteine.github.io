import DynamicLayout from "@/components/layout/DynamicLayout";
import ErrorBoundary from "@/components/layout/providers/ErrorBoundary";
import { LanguageProvider } from "@/components/layout/providers/LanguageProvider";
import { ThemeProvider } from "@/components/layout/providers/ThemeProvider";
import { getMetadata } from "@/lib/config/metadataConfig";
import type { Metadata } from "next";
import "./globals.css";
import { WebVitals } from "./web-vitals";


export const metadata: Metadata = getMetadata('en');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ErrorBoundary>
          <LanguageProvider>
            <ThemeProvider attribute="class">
              <DynamicLayout>
                {children}
              </DynamicLayout>
            </ThemeProvider>
          </LanguageProvider>
        </ErrorBoundary>
        <WebVitals />
      </body>
    </html>
  );
}