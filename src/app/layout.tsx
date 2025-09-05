import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/providers/ThemeProvider";
import { LanguageProvider } from "@/components/layout/providers/LanguageProvider";
import ErrorBoundary from "@/components/layout/providers/ErrorBoundary";
import DynamicLayout from "@/components/layout/DynamicLayout";
import { getMetadata } from "@/lib/config/metadataConfig";
import { WebVitals } from "./web-vitals";

// Default metadata (English) - will be overridden by page-level metadata
export const metadata: Metadata = getMetadata('en');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
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