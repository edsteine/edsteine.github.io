"use client";

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import Skills from "@/components/Skills";
import TerminalSection from "@/components/TerminalSection";

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="skills" 
      className="max-w-6xl mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700" 
      aria-label="Technical skills and competencies"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        <span className="text-green-500 font-mono text-lg">function</span> 
        <span className="text-yellow-500">getSkills</span><span className="text-blue-400">()</span> 
        <span className="text-gray-400">{' {'}</span>
      </h3>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Skills />
        </div>
        <div className="lg:col-span-1">
          <TerminalSection 
            title="dev-skills.terminal"
            commands={[
              {
                command: "npm list --skills",
                output: [
                  "├── kotlin@expert",
                  "├── flutter@advanced", 
                  "├── react@proficient",
                  "├── spring-boot@expert",
                  "└── 15+ more packages..."
                ]
              },
              {
                command: "git log --experience",
                output: [
                  "commit 9a3b2c1: +9 years experience",
                  "commit 8x7y6z5: 100k+ users served",
                  "commit 4w3x2y1: 12+ team members led",
                  "commit 0z9y8x7: 99.9% uptime achieved"
                ]
              },
              {
                command: "docker ps --achievements",
                output: [
                  "CONTAINER     STATUS",
                  "mobile-apps   ✓ Running (4.0+ rating)",
                  "enterprise    ✓ Healthy (1M+ transactions)", 
                  "team-lead     ✓ Active (95% delivery rate)"
                ]
              }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;