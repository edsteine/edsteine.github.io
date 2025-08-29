"use client";

import React from 'react';
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ProjectStats from "@/components/features/ProjectStats";
import TestimonialsSection from "@/components/features/TestimonialsSection";
import TechEvolutionTimeline from "@/components/features/TechEvolutionTimeline";
import FloatingActionButton from "@/components/FloatingActionButton";
import SkipNavigation from "@/components/ui/SkipNavigation";

// Section components
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import LanguagesSection from "@/components/sections/LanguagesSection";
import InterestsSection from "@/components/sections/InterestsSection";
import ResumeDownloadSection from "@/components/sections/ResumeDownloadSection";


export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6
      } 
    },
  };

  return (
    <div className="">
      <SkipNavigation />
      <Header />

      <main id="main-content" role="main">
        {/* Hero Section */}
        <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
          <HeroSection />
        </motion.div>
        {/* About Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <AboutSection />
        </motion.div>

        {/* Skills Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <SkillsSection />
        </motion.div>

        {/* Work Experience Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section id="experience" className="max-w-6xl mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700" aria-label="Professional work experience and achievements">
            <Experience /> {/* This component is already created */}
          </section>
        </motion.div>

        {/* Tech Evolution Timeline Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section className="max-w-6xl mx-auto p-8 pb-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700">
            <TechEvolutionTimeline />
          </section>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section className="max-w-6xl mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <TestimonialsSection />
          </section>
        </motion.div>

        {/* Project Statistics Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section className="max-w-6xl mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <ProjectStats />
          </section>
        </motion.div>

        {/* Projects Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <ProjectsSection />
        </motion.div>

        {/* Education & Certifications Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section id="education" className="max-w-6xl mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              <span className="text-indigo-600 dark:text-indigo-400 font-mono text-lg">class</span> 
              <span className="text-green-500">Education</span> 
              <span className="text-gray-400">{' {'}</span>
            </h3>
            <Education />
          </section>
        </motion.div>

        {/* Languages Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <LanguagesSection />
        </motion.div>

        {/* Resume Download Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <ResumeDownloadSection />
        </motion.div>

        {/* Contact Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <ContactSection />
        </motion.div>

        {/* Interests Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <InterestsSection />
        </motion.div>
      </main>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}