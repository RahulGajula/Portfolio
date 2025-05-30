import React from 'react';
import { useState } from 'react';

// Custom styling to match the orange theme
const styles = {
  gradientBg: "bg-gradient-to-br from-[#95bcdf] to-[#404fa7]", // --bg-gradient-light to --bg-gradient-dark
  primaryColor: "text-[#2343c2]", // --primary-color
  primaryBg: "bg-[#2b1471]", // --base-theme-dark
  primaryLight: "bg-[#fff4eb]", // --base-theme-light
  primaryText: "text-[#2a1a6a]", // --primary-text
  lightText: "text-[#ffe8d6]", // --base-theme-font-color-light
  accent: "text-[#166df9]", // --accent-color
  hoverTransition: "transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
};


const projects = [
 
  {
    title: 'Walmart Time Series Sales Prediction',
    date: 'October 2024 — Present',
    image: null,
    chips: [
      { label: 'PySpark', icon: 'code' },
      { label: 'Machine Learning', icon: 'brain' },
      { label: 'Big Data', icon: 'database' },
    ],
    points: [
      {
        title: 'Predictive Analytics Implementation',
        description:
          'Developed a time series forecasting model using PySpark and RandomForestRegressor to predict weekly sales across 45 Walmart stores'
      },
      {
        title: 'Big Data Processing',
        description:
          'Processed retail datasets with features like holidays, fuel prices, CPI, and unemployment rates'
      },
      {
        title: 'Data Quality Management',
        description:
          'Implemented null detection and statistical validation checks to ensure high-quality analysis'
      }
    ],
    links: {
      github:'https://github.com/hpv333/WalmartTimeSeries_Sales_Prediction'
    }
  },
  {
    title: 'Customer Sales Data Integration System',
    date: 'August 2024 — November 2024',
    image: null,
    chips: [
      { label: 'SQL', icon: 'database' },
      { label: 'Python', icon: 'code' },
      { label: 'ETL', icon: 'globe' },
    ],
    points: [
      {
        title: 'Data Pipeline Design',
        description:
          'Built scalable pipelines to integrate customer and sales data from multiple sources into a centralized repository'
      },
      {
        title: 'Data Transformation & Enrichment',
        description:
          'Cleaned and standardized data using SQL and Python to ensure consistency and reliability'
      },
      {
        title: 'Automated Data Validation',
        description:
          'Implemented scripts for data completeness, accuracy, and consistency checks'
      }
    ]
  },
  {
    title: 'Business Analytics Hackathon - 3rd Prize',
    date: 'November 2024',
    image: null,
    chips: [
      { label: 'Data Analytics', icon: 'brain' },
      { label: 'Python', icon: 'code' },
      { label: 'Machine Learning', icon: 'brain' },
    ],
    points: [
      {
        title: 'Predictive Analytics Solution',
        description:
          'Built a model for Peterbilt Motors to analyze warranty costs and won 3rd place in ITDS Hackathon'
      },
      {
        title: 'Advanced Statistical Analysis',
        description:
          'Used Kruskal-Wallis H-Test for feature relevance and Random Forest for cost prediction'
      },
      {
        title: 'Team Collaboration',
        description:
          'Worked with a team of 4 and presented findings to industry experts during final round'
      }
    ],
    links: {
      github:'https://github.com/hpv333/ITDS_Hackthon_Data_Analysis'
    }
  },
  {
    title: 'Online Food Delivery Management System',
    date: 'June 2023 — September 2023',
    image: null,
    chips: [
      { label: 'Python', icon: 'code' },
      { label: 'Django', icon: 'database' },
      { label: 'HTML/CSS', icon: 'globe' },
    ],
    points: [
      {
        title: 'Full-Stack Web Development',
        description:
          'Built online food ordering and delivery platform with Django backend and HTML/CSS frontend'
      },
      {
        title: 'Database Management',
        description:
          'Used phpMyAdmin to manage MySQL database for orders, users, and payment info'
      },
      {
        title: 'Deployment & Documentation',
        description:
          'Deployed Django app with full installation guide and migration tracking'
      }
    ],
    links: {
      github: 'https://github.com/hpv333/Online_food_delivery_management-system'
    }
  },
  {
    title: 'Travel Recommendation System',
    date: 'January 2024 — April 2024',
    image: null,
    chips: [
      { label: 'AI', icon: 'brain' },
      { label: 'Information Retrieval', icon: 'search' },
      { label: 'Group Project', icon: 'users' },
    ],
    points: [
      {
        title: 'AI-Powered Suggestions',
        description:
          'Developed a recommendation engine based on user interests and past travel behavior'
      },
      {
        title: 'Collaborative Design & Development',
        description:
          'Managed full project lifecycle including planning, testing, and deployment with a team of 4'
      },
      {
        title: 'System Optimization',
        description:
          'Improved model accuracy by refining data collection and transformation steps'
      }
    ]
  },

];

// Extended Icons components
const Icons = {
  globe: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  ),
  database: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  ),
  code: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  ),
  link: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  ),
  check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  ),
  design: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
      <path d="M2 2l7.586 7.586"></path>
      <circle cx="11" cy="11" r="2"></circle>
    </svg>
  ),
  user: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  ),
  users: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  search: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  ),
  shop: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  ),
  brain: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 2 17.5v-11a2.5 2.5 0 0 1 2.5-2.5h1.44a2.5 2.5 0 0 0 2.15-1.23L8.9 1.4a2.5 2.5 0 0 1 .6-.4z"></path>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 22 17.5v-11a2.5 2.5 0 0 0-2.5-2.5h-1.44a2.5 2.5 0 0 1-2.15-1.23L15.1 1.4a2.5 2.5 0 0 0-.6-.4z"></path>
    </svg>
  ),
  figma: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
    </svg>
  )
};

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Function to render the image section based on whether image is available
  const renderCardHeader = (proj, idx) => {
    if (proj.image) {
      // Full image header for Unified Scheduler and Digital Signage
      return (
        <div className="relative h-48 overflow-hidden">
          <div className={`absolute inset-0 ${hoveredCard === idx ? 'opacity-60' : 'opacity-80'} transition-opacity duration-300`}>
            <img 
              src={proj.image} 
              alt={proj.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className={`text-2xl font-bold text-white mb-1`}>
              {proj.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {proj.chips.map((chip, i) => (
                <span 
                  key={i}
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles.lightText} bg-orange-600/70 backdrop-blur-sm`}
                >
                  <span className="mr-1">
                    {Icons[chip.icon]()}
                  </span>
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
          
          <div className={`absolute top-3 right-3 ${styles.primaryBg} ${styles.lightText} px-3 py-1 rounded-full text-xs font-medium shadow-md`}>
            {proj.date}
          </div>
        </div>
      );
    } else {
      // Simplified header for projects without images
      return (
        <div className={`p-4 ${styles.primaryLight}`}>
          <h3 className={`text-2xl font-bold ${styles.primaryColor} mb-2`}>
            {proj.title}
          </h3>
          
          <div className="flex flex-wrap gap-2 mb-2">
            {proj.chips.map((chip, i) => (
              <span 
                key={i}
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles.primaryColor} bg-orange-200`}
              >
                <span className="mr-1">
                  {Icons[chip.icon]()}
                </span>
                {chip.label}
              </span>
            ))}
          </div>
          
          <div className={`${styles.primaryBg} ${styles.lightText} px-3 py-1 rounded-full text-xs font-medium shadow-md inline-block`}>
            {proj.date}
          </div>
        </div>
      );
    }
  };

  // Function to render action buttons based on available links
  const renderActionButtons = (proj) => {
    // If project has links defined
    if (proj.links) {
      return (
        <div className="flex space-x-2">
          {proj.links.github && (
            <a 
              href={proj.links.github}
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 ${styles.primaryLight} ${styles.primaryColor} rounded-full hover:bg-orange-100 transition-colors`}
              aria-label="GitHub Repository"
            >
              {Icons.github()}
            </a>
          )}
          {proj.links.figma && (
            <a 
              href={proj.links.figma}
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 ${styles.primaryLight} ${styles.primaryColor} rounded-full hover:bg-orange-100 transition-colors`}
              aria-label="Figma Prototype"
            >
              {Icons.figma()}
            </a>
          )}
          {proj.links.website && (
            <a 
              href={proj.links.website}
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 ${styles.primaryLight} ${styles.primaryColor} rounded-full hover:bg-orange-100 transition-colors`}
              aria-label="Live Website"
            >
              {Icons.link()}
            </a>
          )}
        </div>
      );
    } 
    // If no links are defined, show placeholder buttons
    else {
      return (
        <div className="opacity-50 flex space-x-2">
          <span className={`p-2 ${styles.primaryLight} ${styles.primaryColor} rounded-full cursor-not-allowed`}>
            {Icons.github()}
          </span>
          <span className={`p-2 ${styles.primaryLight} ${styles.primaryColor} rounded-full cursor-not-allowed`}>
            {Icons.link()}
          </span>
        </div>
      );
    }
  };
  
  return (
    <section className={`py-16 ${styles.gradientBg} `}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[var(--base-theme-font-color-dark)] font-['Georgia',_serif] mb-6">
          Featured Projects
        </h2>
        <p className={`text-center ${styles.accent} mb-12 max-w-2xl mx-auto`}>
          Innovative solutions designed with passion and precision
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className="relative"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${styles.hoverTransition}`}
              >
                {/* Render header based on whether image is available */}
                {renderCardHeader(proj, idx)}

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex justify-end mb-4">
                    {renderActionButtons(proj)}
                  </div>

                  <ul className="space-y-4">
                    {proj.points.map((pt, i) => (
                      <li key={i} className="flex group">
                        <span className={`mt-1 mr-3 text-green-500 flex-shrink-0 ${hoveredCard === idx ? 'scale-110' : ''} transition-transform duration-300`}>
                          {Icons.check()}
                        </span>
                        <div>
                          <h4 className={`font-bold ${styles.primaryColor} group-hover:text-orange-800 transition-colors`}>
                            {pt.title}
                          </h4>
                          <p className="text-gray-700 text-sm">
                            {pt.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;