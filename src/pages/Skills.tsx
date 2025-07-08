import React from 'react';
import './Skills.css';

import {
  FaReact, FaNodeJs, FaGitAlt, FaJava, FaPython, FaGithub,
} from 'react-icons/fa';
import {
  SiMysql, SiSpringboot, SiHtml5, SiCss3, SiJavascript, SiMongodb
} from 'react-icons/si';
import { CgCPlusPlus } from 'react-icons/cg';
import { BsFillFileEarmarkCodeFill } from 'react-icons/bs';
import { VscCode } from 'react-icons/vsc';

const iconMap: { [key: string]: JSX.Element } = {
  Java: <FaJava />,
  Python: <FaPython />,
  JavaScript: <SiJavascript />,
  C: <VscCode />,
  "C++": <CgCPlusPlus />,
  SQL: <BsFillFileEarmarkCodeFill />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  "Spring Boot": <SiSpringboot />,
  "Node.js": <FaNodeJs />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  Postman: <FaReact />,
  "VS Code": <FaReact />,
  "IntelliJ IDEA": <FaReact />,
  "Jupyter Notebook": <FaReact />,
  Canva: <FaReact />,
  OOP: <FaReact />,
  "Operating System": <FaReact />,
  "API Integration": <FaReact />,
  "Data Science": <FaReact />,
  DSA: <FaReact />,
  "Web Technology": <FaReact />,
};

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", description: "Strong foundation in OOP and backend development." },
      { name: "Python", description: "Used in data science and EDA projects." },
      { name: "C", description: "Basic programming and memory concepts." },
      { name: "C++", description: "DSA and object-oriented understanding." },
      { name: "JavaScript", description: "Frontend scripting language for dynamic UIs." },
      { name: "SQL", description: "Data querying for relational databases." },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML", description: "Markup language for page structure." },
      { name: "CSS", description: "Styling and responsive design." },
      { name: "Spring Boot", description: "Backend framework using Java." },
      { name: "Node.js", description: "JavaScript runtime for APIs." },
    ],
  },
  {
   category: "Database",
skills: [
  { name: "MySQL", description: "RDBMS used in full-stack projects." },
  { name: "MongoDB", description: "NoSQL database used for scalable and flexible data storage." }
]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", description: "Version control system." },
      { name: "GitHub", description: "Code hosting and collaboration." },
      { name: "Postman", description: "API testing and development." },
      { name: "VS Code", description: "Code editor for frontend/backend." },
      { name: "IntelliJ IDEA", description: "Java development IDE." },
      { name: "Jupyter Notebook", description: "Python notebooks for data analysis." },
      { name: "Canva", description: "Graphics and presentation design." },
    ],
  },
  {
    category: "Concepts",
skills: [
  { name: "OOP", description: "Object-Oriented Programming principles." },
  { name: "Operating System", description: "Understanding of OS-level operations." },
  { name: "API Integration", description: "Connecting frontend with backend." },
  { name: "Data Science", description: "Exploratory data analysis and visualization." },
  { name: "DSA", description: "Solving problems using data structures and algorithms." },
  { name: "Web Technology", description: "Core web concepts including HTTP, REST, and browser behavior." }
]
  },
];

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      {skillsData.map((group, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{group.category}</h3>
          <div className="skills-grid">
            {group.skills.map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.name] || "🔧"}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter, i) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
