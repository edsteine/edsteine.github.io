"use client";

import React, { Suspense } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/ui/navigation/BackToTopButton";
import SkipNavigation from "@/components/ui/navigation/SkipNavigation";
import SectionsRenderer from "@/components/sections/SectionsRenderer";
import { AppLoading } from "@/components/ui/feedback/LoadingSpinner";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative">
      <SkipNavigation />
      <Header />
      
      <main id="main-content" role="main">
        <Suspense fallback={<AppLoading />}>
          <SectionsRenderer />
        </Suspense>
      </main>
      
      <Footer />
      <BackToTopButton />
    </div>
  );
}