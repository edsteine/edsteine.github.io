
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Experience from "@/components/Experience";
import { MotionDiv } from "@/components/MotionDiv";

// New components to be created
import Skills from "@/components/Skills";
import Education from "@/components/Education";
// import ContactForm from "@/components/ContactForm"; // For a more advanced contact section

export default function Home() {
  const projects = [
    {
      title: "FPL AI Assistant",
      description: "A groundbreaking AI-powered Fantasy Premier League optimization platform that preserves historical context, learns from user patterns, and gets smarter every season. Combines current FPL data, archived seasons, external APIs, and personalized insights to create the most advanced FPL prediction system ever built.",
      link: "https://github.com/edsteine/fpl-ai-assistant-main",
      technologies: ["React", "Next.js", "Tailwind CSS", "ML Models", "AI Integration", "TensorFlow.js"],
      image: "/images/fpl-ai-assistant.png" // Placeholder
    },
    {
      title: "Consignment Portal",
      description: "Enterprise-grade React-based consignment management platform engineered for Shopify Plus integration, processing 1,000+ product submissions monthly and serving 100+ vendors. Features innovative 'thin database' architecture and automated commission calculation.",
      link: "https://github.com/edsteine/wlidaty-consignment-portal-main",
      technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Shopify API", "Tailwind CSS"],
      image: "/images/consignment-portal.png" // Placeholder
    },
    {
      title: "Full-Stack Geospatial Platform",
      description: "A comprehensive full-stack geospatial application combining a Flutter mobile app with a Django backend, designed for offline-first mapping functionality. Features production-ready API serving 142+ locations with advanced Mapbox SDK integration, JWT authentication, and PostGIS.",
      link: "https://github.com/edsteine/Backend_Mobile",
      technologies: ["Flutter", "Dart", "Django", "Python", "PostgreSQL", "PostGIS", "Mapbox SDK", "JWT"],
      image: "/images/geospatial-platform.png" // Placeholder
    },
    {
      title: "Fraud Detection ML System",
      description: "Enterprise-grade fraud detection system combining advanced machine learning algorithms with real-time processing capabilities. Features a Django backend with a scikit-learn model for fraud detection, a Flutter mobile application for security analysts, and an admin panel.",
      link: "https://github.com/edsteine/fraud_detection",
      technologies: ["Django", "Python", "Scikit-learn", "Flutter", "PostgreSQL"],
      image: "/images/fraud-detection.png" // Placeholder
    },
    {
      title: "TikeTaxi",
      description: "Comprehensive Flutter application designed specifically for taxi drivers with advanced receipt management capabilities. Features Bluetooth printer integration, complex tariff calculation algorithms, Firebase cloud storage, and a multi-template receipt system.",
      link: "https://github.com/edsteine/tiketaxi",
      technologies: ["Flutter", "Dart", "Firebase", "Bluetooth", "ESC/POS"],
      image: "/images/tiketaxi.png" // Placeholder
    },
    {
      title: "Notification Portal",
      description: "Multilingual push notification system using Node.js and Firebase Cloud Messaging, supporting 10,000+ daily notifications across three languages. Features advanced FCM integration with topic-based targeting and RTL language support.",
      link: "https://github.com/edsteine/notification-portal",
      technologies: ["Node.js", "Express.js", "Firebase FCM", "Tailwind CSS", "Docker"],
      image: "/images/notification-portal.png" // Placeholder
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />

      <main>
        {/* Hero/Landing Section */}
        <MotionDiv initial="hidden" animate="visible" variants={sectionVariants}>
          <section id="hero" className="text-center py-20">
            <h2 className="text-4xl font-bold">Adil Ajdaa</h2>
            <p className="mt-4 text-lg">Senior Full Stack Mobile Developer & Technical Architect</p>
            <p className="mt-2 text-md">Building scalable and performant mobile and web applications.</p>
            <div className="mt-8 flex justify-center space-x-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Contact Me
              </a>
              <a href="#projects" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                View My Work
              </a>
            </div>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="https://github.com/edsteine" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-300">
                {/* GitHub Icon SVG */}
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.73.084-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.49.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3-.123 1.005-.322 2.07-.483 3.135-.484 1.065.001 2.13.162 3.135.484 2.295-.2 3.3-.123 3.3-.123.645 1.653.24 2.873.105 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/edsteine" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-300">
                {/* LinkedIn Icon SVG */}
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.951v5.662H9.596V9.092h3.416v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.462 2.462 0 01-2.462-2.465c0-1.366 1.09-2.462 2.462-2.462 1.37 0 2.462 1.096 2.462 2.462 0 1.37-.092 2.465-2.462 2.465zM3.554 9.092V20.45h3.55V9.092H3.554zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </a>
            </div>
          </section>
        </MotionDiv>

        {/* About Me Section */}
        <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section id="about" className="container mx-auto p-8">
            <h3 className="text-3xl font-bold text-center mb-8">About Me</h3>
            <p className="text-center max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              I am a Senior Mobile Developer and Technical Architect with over 9 years of experience delivering mission-critical applications for a wide range of industries, including insurance, telecommunications, and government. My passion lies in building scalable, high-performance systems and leading technical teams to success.
              <br/><br/>
              I specialize in mobile development (both native Android with Kotlin and cross-platform with Flutter), geospatial technologies, and full-stack architecture. I have a proven ability to translate complex technical challenges into elegant, user-centric solutions that drive significant business value. I am committed to quality, performance, and continuous improvement, always striving to stay ahead of technology trends and empower my team to build amazing products.
            </p>
            {/* Fun personal touch */}
          </section>
        </MotionDiv>

        {/* Skills/Technologies Section */}
        <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section id="skills" className="container mx-auto p-8">
            <h3 className="text-3xl font-bold text-center mb-8">Skills & Technologies</h3>
            <Skills />
          </section>
        </MotionDiv>

        {/* Work Experience Section */}
        <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <Experience /> {/* This component is already created */}
        </MotionDiv>

        {/* Featured Projects Section */}
        <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section id="projects" className="container mx-auto p-8">
            <h3 className="text-3xl font-bold text-center mb-8">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} title={project.title} description={project.description} link={project.link} technologies={project.technologies} image={project.image} />
              ))}
            </div>
          </section>
        </MotionDiv>

        {/* Education & Certifications Section */}
        <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section id="education" className="container mx-auto p-8">
            <h3 className="text-3xl font-bold text-center mb-8">Education & Certifications</h3>
            <Education />
          </section>
        </MotionDiv>

        {/* Resume/CV Download Section */}
        <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section id="resume-download" className="text-center py-10 bg-gray-100 dark:bg-gray-800">
            <h3 className="text-2xl font-bold mb-4">Download My Resume</h3>
            <a href="/ADIL_AJDAA_Resume_Improved.pdf" download className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
              Download PDF
            </a>
          </section>
        </MotionDiv>

        {/* Contact Information Section */}
        <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <section id="contact" className="text-center py-20 bg-gray-100 dark:bg-gray-800">
            <h3 className="text-3xl font-bold">Contact Me</h3>
            <p className="mt-4 text-lg">a.ajdaa@outlook.com</p>
            {/* Social links and contact form will go here */}
          </section>
        </MotionDiv>
      </main>

      <Footer />
    </div>
  );
}
