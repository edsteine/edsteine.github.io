import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/_components/ui/ThemeProvider";
import { LanguageProvider } from "@/app/_contexts/LanguageContext";
import ErrorBoundary from "@/app/_components/ErrorBoundary";
import DynamicLayout from "@/app/_components/layout/DynamicLayout";
import { getMetadata } from "@/lib/config/metadataConfig";

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
      </body>
    </html>
  );
}