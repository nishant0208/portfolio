import React, { useState, useEffect } from 'react';

// Data from Nishant Tiwary's Resume
const portfolioData = {
  name: "Nishant Tiwary",
  tagline: "A passionate Machine Learning Enthusiast building impactful AI solutions.",
  about: "I am a driven and inquisitive machine learning enthusiast currently pursuing a B.Tech in Data Science from Jain University. Passionate about building AI solutions that solve real-world problems, with hands-on experience in LLMs, diffusion models, and data cleaning. Adaptable, curious, and always eager to explore innovative technologies and apply them effectively in diverse project environments.",
  contact: {
    // 
    // ***** IMPORTANT: REPLACE THESE WITH YOUR ACTUAL EMAIL AND PHONE NUMBER *****
    //
    phone: "+919693104193", // Your actual phone number (no spaces, include country code)
    email: "nishantkumartiwary2@gmail.com", // Your actual email address
    //
    // *************************************************************************
    //
    linkedin: "https://linkedin.com/in/nishant-tiwary-375329246/", // Your LinkedIn profile URL
    github: "https://github.com/nishant0208", // Your GitHub profile URL
  },
  education: [
    {
      degree: "B.Tech in Data Science",
      institution: "Jain University (Bangalore, Karnataka)",
      years: "2025-Present",
      grade: "8.0 CGPA",
    },
    {
      degree: "12th Boards ISC",
      institution: "A.D.L.S Sunshine School (Jamshedpur, Jharkhand)",
      years: "2020-2021",
      grade: "94%",
    },
  ],
  experience: [
    {
      title: "Machine Learning Intern",
      company: "M/S Agile Burst",
      duration: "6 Weeks",
      description: [
        "Developed an LLM-powered image-generation system for news articles.",
        "Cleaned and organized large-scale comment data to ensure content relevance and accuracy.",
        "Collaborated with the engineering team to fine-tune prompt results for better visual alignment.",
      ],
    },
  ],
  skills: {
    languages: ["Java", "Python", "C++", "C", "HTML", "CSS", "JavaScript"],
    frameworksTechnologies: ["PyTorch", "TensorFlow", "OpenCV", "Scikit-learn", "Pandas", "NumPy", "MongoDB", "MySQL"],
    platformsTools: ["Jupyter Notebook", "Google Colab", "Git", "GitHub", "VS Code"],
    softSkills: ["Presentation Design", "Continuous Learning", "Problem Solving", "Time management", "Team Collaboration"],
  },
  projects: [
    {
      title: "RAG-based Chatbot for Fire-related Queries",
      description: "Designed and implemented a chatbot capable of addressing fire safety concerns using Retrieval-Augmented Generation. Provided real-time suggestions and preventive safety measures based on user input.",
      technologies: ["NLP", "Python"],
      demoLink: "#", // Placeholder, add actual link if available
      githubLink: "#", // Placeholder, add actual link if available
    },
    {
      title: "AI Image Generator",
      description: "Built a customizable image generator that inputs user and negative prompts along with step count. Utilized diffusion-based models to enhance visual output and precision.",
      technologies: ["Diffusion Models", "Python"],
      demoLink: "#", // Placeholder, add actual link if available
      githubLink: "#", // Placeholder, add actual link if available
    },
    {
      title: "Socialcast (Internship Project)",
      description: "Contributed to an AI pipeline that cleans and segregates comment data for articles. Leveraged LLMs to generate relevant and unique image prompts for a content generator system.",
      technologies: ["LLMs", "Data Cleaning"],
      demoLink: "#", // Placeholder, add actual link if available
      githubLink: "#", // Placeholder, add actual link if available
    },
  ],
  achievements: [
    "Built multiple real-world AI and ML projects focused on NLP and generative models.",
    "Actively learning diffusion models and large language model optimization techniques (11/2024)",
    "2-star rating at HackerRank: Showcased problem-solving abilities and algorithmic proficiency in competitive programming contests.",
  ]
};

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  // Effect to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'achievements', 'contact'];
      let currentActive = 'home';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is mostly in view or has just passed the top
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sections[i];
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect for Hero section
  const [displayedTagline, setDisplayedTagline] = useState('');
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    if (taglineIndex < portfolioData.tagline.length) {
      const timeout = setTimeout(() => {
        setDisplayedTagline((prev) => prev + portfolioData.tagline[taglineIndex]);
        setTaglineIndex((prev) => prev + 1);
      }, 50); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [taglineIndex, portfolioData.tagline]);


  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg py-4 px-6 md:px-12">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-700">{portfolioData.name}</div>
          <div className="hidden md:flex space-x-6">
            <NavItem id="home" label="Home" activeSection={activeSection} onClick={scrollToSection} />
            <NavItem id="about" label="About" activeSection={activeSection} onClick={scrollToSection} />
            <NavItem id="skills" label="Skills" activeSection={activeSection} onClick={scrollToSection} />
            <NavItem id="projects" label="Projects" activeSection={activeSection} onClick={scrollToSection} />
            <NavItem id="experience" label="Experience" activeSection={activeSection} onClick={scrollToSection} />
            <NavItem id="education" label="Education" activeSection={activeSection} onClick={scrollToSection} />
            <NavItem id="achievements" label="Achievements" activeSection={activeSection} onClick={scrollToSection} />
            <NavItem id="contact" label="Contact" activeSection={activeSection} onClick={scrollToSection} />
          </div>
          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-2">
            <NavItem id="home" label="Home" activeSection={activeSection} onClick={scrollToSection} isMobile={true} />
            <NavItem id="about" label="About" activeSection={activeSection} onClick={scrollToSection} isMobile={true} />
            <NavItem id="skills" label="Skills" activeSection={activeSection} onClick={scrollToSection} isMobile={true} />
            <NavItem id="projects" label="Projects" activeSection={activeSection} onClick={scrollToSection} isMobile={true} />
            <NavItem id="experience" label="Experience" activeSection={activeSection} onClick={scrollToSection} isMobile={true} />
            <NavItem id="education" label="Education" activeSection={activeSection} onClick={scrollToSection} isMobile={true} />
            <NavItem id="achievements" label="Achievements" activeSection={activeSection} onClick={scrollToSection} isMobile={true} />
            <NavItem id="contact" label="Contact" activeSection={activeSection} onClick={scrollToSection} isMobile={true} />
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-indigo-700 to-purple-800 text-white pt-16 overflow-hidden">
        {/* Subtle background particles/shapes for modern feel */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute w-48 h-48 bg-purple-400 rounded-full -top-10 -left-10 animate-blob mix-blend-multiply filter blur-xl"></div>
          <div className="absolute w-64 h-64 bg-indigo-400 rounded-full -bottom-20 -right-20 animate-blob animation-delay-2000 mix-blend-multiply filter blur-xl"></div>
          <div className="absolute w-56 h-56 bg-pink-400 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000 mix-blend-multiply filter blur-xl"></div>
        </div>

        <div className="container mx-auto px-6 z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-up">
            Hi, I'm <span className="text-yellow-300">{portfolioData.name}</span>
          </h1>
          <p className="text-xl md:text-3xl font-light mb-8 animate-fade-in-up delay-200">
            {displayedTagline}
            <span className="inline-block animate-blink">|</span> {/* Blinking cursor */}
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-white text-indigo-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up delay-400"
          >
            Explore My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white animate-fade-in">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <img
                src="https://placehold.co/300x300/667EEA/FFFFFF?text=Nishant+Photo"
                alt="Nishant Tiwary"
                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-xl border-4 border-indigo-200"
              />
            </div>
            <div className="md:w-2/3 text-lg leading-relaxed text-gray-700">
              <p className="mb-4">
                {portfolioData.about}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100 animate-fade-in">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <SkillCategory title="Languages" skills={portfolioData.skills.languages} />
            <SkillCategory title="Frameworks & Technologies" skills={portfolioData.skills.frameworksTechnologies} />
            <SkillCategory title="Platforms & Tools" skills={portfolioData.skills.platformsTools} />
            <SkillCategory title="Soft Skills" skills={portfolioData.skills.softSkills} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white animate-fade-in">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-100 animate-fade-in">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Experience</h2>
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white animate-fade-in">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Education</h2>
          <div className="space-y-8">
            {portfolioData.education.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-100 animate-fade-in">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Achievements</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
              {portfolioData.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-indigo-600 mr-2 text-xl">&bull;</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-indigo-700 to-purple-800 text-white animate-fade-in">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-col items-center space-y-6">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="bg-white text-indigo-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Email Me
            </a>
            <div className="flex flex-wrap justify-center space-x-6 mt-6">
              <SocialLink icon="🔗" label="LinkedIn" url={portfolioData.contact.linkedin} />
              <SocialLink icon="🐙" label="GitHub" url={portfolioData.contact.github} />
              <SocialLink icon="📞" label="Phone" url={`tel:${portfolioData.contact.phone}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center text-sm">
        <div className="container mx-auto px-6">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

// Navigation Item Component
const NavItem = ({ id, label, activeSection, onClick, isMobile = false }) => (
  <button
    onClick={() => onClick(id)}
    className={`relative px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300
      ${isMobile ? 'w-full text-left py-3 px-4' : ''}
      ${activeSection === id ? 'text-indigo-700 bg-indigo-100' : 'text-gray-600 hover:text-indigo-700 hover:bg-gray-50'}
      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50
      `}
  >
    {label}
    {!isMobile && activeSection === id && (
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-1 bg-indigo-700 rounded-full"></span>
    )}
  </button>
);

// Skill Category Component
const SkillCategory = ({ title, skills }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 transform hover:scale-102 transition-transform duration-300">
    <h3 className="text-2xl font-bold text-indigo-700 mb-6 border-b-2 border-indigo-100 pb-3">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span key={index} className="bg-indigo-50 text-indigo-800 text-md font-medium px-4 py-2 rounded-full shadow-sm hover:bg-indigo-100 transition-colors duration-200">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

// Project Card Component
const ProjectCard = ({ title, description, technologies, demoLink, githubLink }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col transform hover:scale-102 transition-transform duration-300 border border-gray-200 group">
    <h3 className="text-2xl font-bold text-indigo-700 mb-4">{title}</h3>
    <p className="text-gray-700 mb-6 flex-grow">{description}</p>
    <div className="mb-6">
      <h4 className="text-md font-semibold text-gray-600 mb-2">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
    <div className="flex justify-start space-x-4 mt-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300">
      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-indigo-600 text-white px-5 py-2 rounded-full text-md font-semibold hover:bg-indigo-700 transition duration-300 shadow-md flex items-center"
      >
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
        Live Demo
      </a>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-200 text-gray-800 px-5 py-2 rounded-full text-md font-semibold hover:bg-gray-300 transition duration-300 shadow-md flex items-center"
      >
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.163 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.089 2.906.833.091-.647.35-1.089.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.65 0 0 .84-.268 2.75 1.025.798-.222 1.649-.333 2.5-.333.85 0 1.702.111 2.5.333 1.909-1.293 2.747-1.025 2.747-1.025.546 1.38.202 2.398.099 2.65.64.698 1.028 1.592 1.028 2.682 0 3.841-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.482C17.136 18.158 20 14.413 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path></svg>
        GitHub
      </a>
    </div>
  </div>
);

// Experience Card Component
const ExperienceCard = ({ title, company, duration, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
    <h3 className="text-2xl font-bold text-indigo-700 mb-2">{title}</h3>
    <p className="text-lg text-gray-800 mb-2">{company} <span className="text-gray-500 text-base">({duration})</span></p>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

// Education Card Component
const EducationCard = ({ degree, institution, years, grade }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
    <h3 className="text-2xl font-bold text-indigo-700 mb-2">{degree}</h3>
    <p className="text-lg text-gray-800 mb-2">{institution} <span className="text-gray-500 text-base">({years})</span></p>
    <p className="text-gray-700">Grade: {grade}</p>
  </div>
);

// Social Link Component
const SocialLink = ({ icon, label, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
  >
    <span className="text-3xl">{icon}</span>
    <span>{label}</span>
  </a>
);

export default App;

