"use client";

import React, { Suspense } from 'react';
import Header from "@/app/_components/layout/Header";
import Footer from "@/app/_components/layout/Footer";
import BackToTopButton from "@/app/_components/layout/BackToTopButton";
import SkipNavigation from "@/app/_components/ui/SkipNavigation";
import SectionsRenderer from "@/app/_components/sections/SectionsRenderer";
import { AppLoading } from "@/app/_components/ui/LoadingSpinner";

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