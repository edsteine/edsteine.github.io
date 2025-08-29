import React from 'react';
import { experienceData } from '@/data/experienceData';

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto p-8 bg-white dark:bg-gray-800">
      <h3 className="text-3xl font-bold text-center mb-12">Work Experience</h3>
      <div className="relative border-l-2 border-gray-700 dark:border-gray-300">
        {experienceData.map((job, index) => (
          <div key={index} className="mb-8 flex items-start w-full p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
            <div className="absolute -left-4 bg-gray-500 dark:bg-gray-400 rounded-full h-8 w-8"></div>
            <div className="ml-12 w-full">
              <h4 className="text-xl font-bold">{job.role}</h4>
              <p className="text-lg font-semibold">{job.company}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{job.period}</p>
              {job.description && (
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-3">
                  {job.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              )}
              {job.achievements && (
                <div className="mb-3">
                  <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Achievements & Recognition:</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {job.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              )}
              {job.leadershipMentoring && (
                <div className="mb-3">
                  <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Leadership & Mentoring:</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {job.leadershipMentoring.map((lm, idx) => (
                      <li key={idx}>{lm}</li>
                    ))}
                  </ul>
                </div>
              )}
              {job.biggestContribution && (
                <div className="mb-3">
                  <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Biggest Contribution:</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {job.biggestContribution.map((bc, idx) => (
                      <li key={idx}>{bc}</li>
                    ))}
                  </ul>
                </div>
              )}
              {job.fullTechStack && (
                <div className="mb-3">
                  <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {job.fullTechStack.map((tech, idx) => (
                      <span key={idx} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {job.projects && job.projects.map((project, projectIdx) => (
                <div key={projectIdx} className="mb-4 mt-4 p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                  <h5 className="text-lg font-bold mb-2">{project.name}</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.period}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">{project.overview}</p>
                  {project.achievements && (
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-2">
                      {project.achievements.map((ach, achIdx) => (
                        <li key={achIdx}>{ach}</li>
                      ))}
                    </ul>
                  )}
                  {project.techEnvironment && (
                    <div>
                      <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-1">Technical Environment:</p>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                        {project.techEnvironment.map((env, envIdx) => (
                          <li key={envIdx}>{env}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
              {job.keySkillsImpact && (
                <div className="mb-3 mt-4">
                  <h5 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Skills & Impact Developed:</h5>
                  <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-1">Quantifiable Achievements:</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-2">
                    {job.keySkillsImpact.quantifiableAchievements.map((qa, idx) => (
                      <li key={idx}>{qa}</li>
                    ))}
                  </ul>
                  <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-1">Core Technical Competencies:</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-2">
                    {job.keySkillsImpact.coreTechnicalCompetencies.map((ctc, idx) => (
                      <li key={idx}>{ctc}</li>
                    ))}
                  </ul>
                  <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-1">Professional Skills Demonstrated:</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {job.keySkillsImpact.professionalSkillsDemonstrated.map((psd, idx) => (
                      <li key={idx}>{psd}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;