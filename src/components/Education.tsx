import React from 'react';

const educationData = [
  {
    degree: "Bachelor's Degree in Professional Computing (Development JEE & .Net)",
    institution: "University Hassan II Ain Chock & MIT Academy",
    location: "Casablanca, Morocco",
    period: "Sep 2014 - Jun 2015",
    grade: "Distinction (Mention Bien) - Top 15% of graduating class",
    achievements: [
      "Completed comprehensive final year project (PFE) at Atlanta Assurance developing financial simulation application",
      "Achieved 16/20 average across all technical modules",
      "Specialized in enterprise-level application development with industry internships"
    ]
  },
  {
    degree: "Technical Diploma - IT Development & Programming",
    institution: "ISTA NTIC Sidi Maarouf (Specialized Institute of Applied Technology)",
    location: "Casablanca, Morocco",
    period: "Sep 2010 - Jul 2011",
    grade: "Very Good (Très Bien) - 16.5/20 overall average",
    achievements: [
      "Excellence Award for Technical Innovation (2011)",
      "Achieved perfect scores in Database Design and Web Development modules",
      "Led development team for capstone project creating university management system",
      "Completed 400+ hours of hands-on programming laboratory work"
    ]
  }
];

const Education = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="mb-12">
        {educationData.map((edu, index) => (
          <div key={index} className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h4 className="text-xl font-bold">{edu.degree}</h4>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">{edu.institution}</p>
            <p className="text-md text-gray-600 dark:text-gray-400">{edu.location} | {edu.period}</p>
            <p className="text-md text-gray-600 dark:text-gray-400 mb-3">Grade: {edu.grade}</p>
            {edu.achievements && (
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {edu.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}n              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;