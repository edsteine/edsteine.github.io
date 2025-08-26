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
    ],
    coursework: [
      "Advanced Java Enterprise Edition (JEE)", ".NET Framework Development", "Object-Oriented Programming",
      "Database Design & Management", "Web Development", "Software Engineering Principles",
      "System Analysis & Design", "Network Administration", "Project Management"
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
    ],
    coursework: [
      "Programming Fundamentals (C, C++, Java)", "Database Management (MySQL, Oracle)",
      "Web Development (PHP, HTML, CSS, JavaScript)", "Network Fundamentals",
      "System Administration", "Software Testing", "Algorithm Design", "Data Structures"
    ]
  },
  {
    degree: "High School Diploma (Baccalaureate) - Science Track",
    institution: "Lycée Abdellah Eliyachi",
    location: "Casablanca, Morocco",
    period: "Sep 2007 - Jul 2009",
    grade: "Good (Assez Bien) - 12.8/20",
    achievements: [
      "Specialized in Mathematics and Physics with early introduction to programming concepts",
      "Completed advanced computer science modules including algorithm design and basic programming",
      "Participated in regional mathematics olympiad (top 50 finalists)",
      "Developed strong analytical and problem-solving foundation essential for technical career"
    ],
    coursework: [
      "Advanced Mathematics", "Physics", "Computer Science Fundamentals", "Chemistry",
      "French Literature", "English Language", "Philosophy"
    ]
  }
];

const certifications = [
  "Oracle Certified Professional Java SE 11 Developer (2023)",
  "Google Cloud Associate Cloud Developer (In Progress - Expected 2025)",
  "Android Development Certification - Google (Planning 2025)"
];

const professionalDevelopment = [
  {
    year: "2024",
    items: [
      "Attended Flutter Forward 2024 Conference (Online)",
      "Completed \"Advanced Kotlin for Android Development\" - Udacity",
      "Participated in Google I/O 2024 Developer Sessions",
      "Active member of Flutter Morocco Community"
    ]
  },
  {
    year: "2023",
    items: [
      "Completed \"Microservices Architecture Patterns\" Workshop",
      "Attended Angular Connect 2023 (Virtual)",
      "Completed PostgreSQL Performance Tuning Course"
    ]
  },
  {
    year: "2022-2023",
    items: [
      "Regular participant in Android Developer Meetups (Casablanca)",
      "Completed Spring Boot Advanced Features Course",
      "Attended AWS re:Invent 2022 Virtual Sessions"
    ]
  },
  {
    year: "Ongoing Learning",
    items: [
      "Weekly tech blog reading (Medium, Dev.to, Android Developers Blog)",
      "Contributing to open-source Flutter plugins",
      "Mentoring junior developers through local tech community"
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
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-3">
                {edu.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            )}
            {edu.coursework && (
              <div>
                <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Coursework:</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  {edu.coursework.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mb-12">
        <h4 className="text-2xl font-bold mb-4">Certifications</h4>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-2xl font-bold mb-4">Professional Development & Continuous Learning</h4>
        {professionalDevelopment.map((pd, index) => (
          <div key={index} className="mb-4">
            <h5 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">{pd.year}</h5>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {pd.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;