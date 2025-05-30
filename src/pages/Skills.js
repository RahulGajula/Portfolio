import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="text-4xl font-bold text-[var(--base-theme-font-color-dark)] font-['Georgia',_serif] mb-6">
        Technical Skills
        <span className="heading-underline"></span>
      </h2>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <div className="skill-icon">{category.icon}</div>
              <h3 className="skill-title">{category.title}</h3>
            </div>
            <ul className="skill-list">
              {category.skills.map((skill, idx) => (
                <li className="skill-chip" key={idx}>
                  ✅ {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const skillsData = [
  {
    title: 'Languages',
    icon: '💻',
    skills: [
      'Python', 'Java', 'Scala', 'SQL', 'MySQL', 'PowerShell'
    ],
  },
  {
    title: 'Technologies',
    icon: '🌐',
    skills: [
      'Azure Data Factory', 'Azure Databricks', 'Azure Data Lake',
      'Azure SQL', 'Microsoft Azure', 'Microsoft Power BI',
      'Apache Spark', 'CI/CD', 'Azure DevOps'
    ],
  },
  {
    title: 'Tools & Strengths',
    icon: '🛠️',
    skills: [
      'Data Modeling', 'Data Visualization', 'Data Cleaning',
      'Data Analysis', 'ETL', 'Statistics', 'Machine Learning',
      'Microsoft Power Query', 'Tableau'
    ],
  }
];

export default Skills;
