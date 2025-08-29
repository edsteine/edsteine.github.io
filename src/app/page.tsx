"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Experience from "@/components/Experience";
import { motion } from "framer-motion";
import Image from 'next/image';
import React, { useState } from 'react'; // Import useState
import projectsData from "@/data/projectsData";

// New components to be created
import Skills from "@/components/Skills";
import Education from "@/components/Education";


export default function Home() {
  const [isAboutCollapsed, setIsAboutCollapsed] = useState(true); // State for About Me section
  const projects = projectsData;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="">
      <Header />

      <main>
        {/* Hero/Landing Section */}
        <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
          <section id="hero" className="relative text-center py-20 pb-16 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 text-white border-b border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Background animation/pattern can go here */}
            <div className="relative z-10">
              <div className="mb-8">
                <Image
                  src="/images/headshot.png" // Placeholder for headshot
                  alt="Adil Ajdaa's Headshot"
                  width={160}
                  height={160}
                  className="rounded-full mx-auto border-4 border-white dark:border-gray-300 shadow-lg"
                />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Adil Ajdaa
              </h2>
              <p className="mt-4 text-xl md:text-2xl font-semibold">
                Senior Mobile Architect Building Apps for 100,000+ Users
              </p>
              <p className="mt-2 text-lg opacity-90">
                9+ Years of Enterprise-Level Experience | Kotlin, Flutter, Django, React
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact" className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-blue-700 dark:hover:bg-blue-800 dark:text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Contact Me
                </a>
                <a href="/ADIL_AJDAA_Resume_Improved.pdf" download className="bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Download Resume
                </a>
              </div>
              <div className="mt-8 flex justify-center space-x-6">
                <a href="https://github.com/edsteine" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  {/* GitHub Icon SVG */}
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.73.084-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.49.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3-.123 1.005-.322 2.07-.483 3.135-.484 1.065.001 2.13.162 3.135.484 2.295-.2 3.3-.123 3.3-.123.645 1.653.24 2.873.105 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://linkedin.com/in/edsteine" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  {/* LinkedIn Icon SVG */}
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.951v5.662H9.596V9.092h3.416v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.462 2.462 0 01-2.462-2.465c0-1.366 1.09-2.462 2.462-2.462 1.37 0 2.462 1.096 2.462 2.462 0 1.37-.092 2.465-2.462 2.465zM3.554 9.092V20.45h3.55V9.092H3.554zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/></svg>
                </a>
              </div>
            </div>
          </section>
</motion.div>
        {/* About Me Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section id="about" className="container mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-center mb-8">About Me</h3>
            <div className="text-center max-w-4xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
              <div className={`overflow-hidden transition-all duration-500 ${isAboutCollapsed ? 'max-h-0' : 'max-h-screen'}`}>
                <p className="mb-4 leading-relaxed">
                  I am an **Accomplished Senior Mobile Developer and Technical Architect with 9+ years of enterprise-level experience** delivering mission-critical applications serving 100,000+ daily users across insurance, telecommunications, construction, and government sectors. I have led technical teams of 12+ developers while architecting scalable systems that achieved 99.9% uptime and processed millions of transactions.
                </p>
                <p className="mb-4 leading-relaxed">
                  My specialization lies in **mobile development**, **geospatial technologies**, and **enterprise system architecture**, with proven expertise in Android, cross-platform development, and complex data management systems.
                </p>
                <p className="mb-4 leading-relaxed">
                  My core technical excellence includes:
                </p>
                <ul className="list-disc list-inside text-left mx-auto max-w-3xl mb-4 space-y-2">
                  <li>**Enterprise Mobile Development**: Native Android (Kotlin/Java), iOS (SwiftUI), and Flutter cross-platform solutions serving 100,000+ daily users with successful App Store launches achieving 4.0+ ratings.</li>
                  <li>**Full Stack Architecture**: Expert in Java/Spring Boot, Angular, Python/Django, with microservices handling 1M+ daily transactions and 99.9% uptime.</li>
                  <li>**Geospatial & GIS Technologies**: Advanced spatial data management, PostGIS, Google Maps SDK, and location-based services with sub-meter accuracy for 200+ field surveyors.</li>
                  <li>**Technical Leadership**: Led development teams of 12+ engineers, mentored 15+ developers, and conducted 50+ technical interviews.</li>
                  <li>**Performance Optimization**: Achieved 85-96% performance improvements across database queries, API responses, and mobile rendering.</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  I have made a **Quantifiable Professional Impact** by:
                </p>
                <ul className="list-disc list-inside text-left mx-auto max-w-3xl mb-4 space-y-2">
                  <li>**Large-Scale User Impact**: Applications serve 100,000+ daily users across multiple sectors.</li>
                  <li>**Mission-Critical Systems**: Led development of SmartGrid infrastructure, airport management, and financial modeling systems processing millions of transactions.</li>
                  <li>**Team Excellence**: Achieved 95% on-time delivery rates while managing cross-functional teams and reducing development cycles by 35%.</li>
                  <li>**Financial Applications**: Developed complex actuarial systems with 99.8% calculation accuracy handling retirement planning for 50+ financial advisors.</li>
                  <li>**Digital Transformation**: Led university operations serving 15,000+ students and enterprise systems reducing administrative overhead by 60%.</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  My **Professional Philosophy** is to combine deep engineering expertise with proven business acumen to deliver measurable results. I am committed to building scalable, high-performance systems while fostering team growth and innovation.
                </p>
              </div>
              <button
                onClick={() => setIsAboutCollapsed(!isAboutCollapsed)}
                className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md transform hover:scale-105 transition duration-300"
              >
                {isAboutCollapsed ? 'Read More' : 'Show Less'}
              </button>
            </div>
          </section>
        </motion.div>

        {/* Skills/Technologies Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section id="skills" className="container mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-center mb-8">Skills & Technologies</h3>
            <Skills />
          </section>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section className="container mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <Experience /> {/* This component is already created */}
          </section>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section id="projects" className="container mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-center mb-8">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} title={project.title} description={project.description} link={project.link} technologies={project.technologies} image={project.image} />
              ))}
            </div>
          </section>
        </motion.div>

        {/* Education & Certifications Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section id="education" className="container mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-center mb-8">Education & Certifications</h3>
            <Education />
          </section>
        </motion.div>

        {/* Languages Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section id="languages" className="container mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-center mb-8">Languages</h3>
            <div className="max-w-3xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-400">
              <h4 className="text-2xl font-bold mb-4">Multilingual Proficiency</h4>
              <div className="mb-6">
                <h5 className="text-xl font-semibold mb-2">🇸🇦 Arabic</h5>
                <p className="mb-1"><strong>Native Speaker</strong></p>
                <ul className="list-disc list-inside ml-4">
                  <li>Mother tongue fluency</li>
                  <li>Complete mastery of reading, writing, speaking, and comprehension</li>
                  <li>Cultural and linguistic expertise</li>
                </ul>
              </div>
              <div className="mb-6">
                <h5 className="text-xl font-semibold mb-2">🇬🇧 English</h5>
                <p className="mb-1"><strong>Fluent - Full Professional Proficiency</strong></p>
                <ul className="list-disc list-inside ml-4">
                  <li>Advanced business and technical communication</li>
                  <li>Comprehensive reading and writing abilities</li>
                  <li>Professional presentation and documentation skills</li>
                  <li>International business communication capability</li>
                </ul>
              </div>
              <div className="mb-6">
                <h5 className="text-xl font-semibold mb-2">🇫🇷 French</h5>
                <p className="mb-1"><strong>Advanced - Full Professional Proficiency</strong></p>
                <ul className="list-disc list-inside ml-4">
                  <li>Professional working proficiency</li>
                  <li>Business communication competency</li>
                  <li>Technical documentation and correspondence</li>
                  <li>Academic and professional presentation abilities</li>
                </ul>
              </div>
              <h4 className="text-2xl font-bold mb-4">Language Skills Summary</h4>
              <ul className="list-disc list-inside ml-4">
                <li><strong>Trilingual Professional</strong> with native Arabic, fluent English, and advanced French</li>
                <li><strong>International Communication</strong> capabilities across multiple business environments</li>
                <li><strong>Technical Documentation</strong> proficiency in all three languages</li>
                <li><strong>Cross-Cultural Communication</strong> expertise for global business contexts</li>
              </ul>
            </div>
          </section>
        </motion.div>

        {/* Resume/CV Download Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section id="resume-download" className="text-center py-10 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Download My Resume</h3>
            <a href="/ADIL_AJDAA_Resume_Improved.pdf" download className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 dark:bg-blue-700 dark:hover:bg-blue-800 dark:text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Download PDF
            </a>
          </section>
        </motion.div>

        {/* Contact Information Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section id="contact" className="text-center py-20 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl font-bold">Contact Me</h3>
            <p className="mt-4 text-lg">a.ajdaa@outlook.com</p>
            <p className="mt-2 text-md">📍 Tangier, Morocco / Madrid, Spain</p>
            <p className="mt-2 text-md">📱 +212 6 94 90 30 73</p>
            {/* Social links and contact form will go here */}
          </section>
        </motion.div>

        {/* Interests Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section id="interests" className="container mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-center mb-8">Interests & Hobbies</h3>
            <div className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              <h4 className="text-2xl font-bold mb-4">🏃 Sports & Recreation</h4>
              <ul className="list-disc list-inside ml-4 mb-6">
                <li><strong>Football (Soccer)</strong> - Regular player and enthusiast</li>
                <li><strong>Basketball</strong> - Active participant and fan</li>
                <li><strong>Taekwondo</strong> - Martial arts practice and discipline</li>
                <li><strong>Swimming</strong> - Fitness and recreational activity</li>
              </ul>

              <h4 className="text-2xl font-bold mb-4">💻 Technology & Professional Development</h4>
              <ul className="list-disc list-inside ml-4 mb-6">
                <li><strong>Technology Conferences</strong> - Attending industry events and staying current with trends</li>
                <li><strong>New Frameworks Exploration</strong> - Continuously learning and experimenting with emerging technologies</li>
                <li><strong>Open-Source Contributions</strong> - Contributing to community projects and collaborative development</li>
              </ul>

              <h4 className="text-2xl font-bold mb-4">🎯 Personal Interests</h4>
              <ul className="list-disc list-inside ml-4 mb-6">
                <li><strong>Gaming</strong> - Video games and strategic entertainment</li>
                <li><strong>Music</strong> - Listening to various genres and musical appreciation</li>
                <li><strong>Travel</strong> - Exploring new places and cultural experiences</li>
                <li><strong>Reading</strong> - Books and continuous learning through literature</li>
              </ul>

              <h4 className="text-2xl font-bold mb-4">📚 Continuous Learning</h4>
              <ul className="list-disc list-inside ml-4">
                <li><strong>Professional Development</strong> - Staying updated with industry best practices</li>
                <li><strong>Cultural Exploration</strong> - Through travel and diverse experiences</li>
                <li><strong>Physical Wellness</strong> - Through various sports and outdoor activities</li>
              </ul>
            </div>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}