import React from 'react';
import './Projects.css';
import {
  FaReact, FaNodeJs, FaJava, FaDatabase, FaPython
} from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJupyter, SiPandas , SiMysql } from 'react-icons/si';
import { Project } from '../types';

const techIcons: { [key: string]: JSX.Element } = {
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  Java: <FaJava />,
  Python: <FaPython />,
  "Jupyter Notebook": <SiJupyter />,
  Pandas: <SiPandas />,
  Matplotlib: <FaReact />, // Replace with real icon if you want
  MySQL: <SiMysql />,
};

const projects: Project[] = [
  {
    title: "Zomato Landing Page",
    description: "Responsive front-end clone of Zomato's landing page built with HTML & CSS.",
    techUsed: "HTML, CSS",
    image: { url: "https://ui-avatars.com/api/?name=Z&background=000000&color=ffffff&size=512" }
  },
  {
    title: "Java Quiz Application",
    description: "Console-based Java quiz app with multiple-choice questions and scoring.",
    techUsed: "Java",
    image: { url: "https://ui-avatars.com/api/?name=J&background=000000&color=ffffff&size=512" }
  },
  {
    title: "Data Science Task 2",
    description: "Data cleaning, preprocessing & EDA with visualizations in Python (Jupyter).",
    techUsed: "Python, Jupyter Notebook, Pandas, Matplotlib, Seaborn",
    image: { url: "https://ui-avatars.com/api/?name=D&background=000000&color=ffffff&size=512" }
  }
];``

const Projects: React.FC = () => (
  <div className="projects-container">
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div
          key={index}
          className="project-card"
          style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
        >
          <img src={project.image.url} alt={project.title} className="project-image" />
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-used">
              {project.techUsed.split(', ').map((tech, i) => (
                <span key={i} className="tech-badge">
                  {techIcons[tech] || "🔧"} {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
