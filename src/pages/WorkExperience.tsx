import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';

const timelineData = [
  {
    timelineType: "work",
    title: "Data Analyst Intern",
    name: "Main Flow Services and Technologies Pvt. Ltd.",
    dateRange: "January 2025 – February 2025",
    techStack: "Python, EDA, Regression, tableau",
    summaryPoints:
      "Performed data analysis using Python, built visual dashboards with tableau, and supported business decisions with insights.",
  },
  {
    timelineType: "work",
    title: "Java Software Developer Intern",
    name: "Navodita Infotech",
    dateRange: "August 2024 – September 2024",
    techStack: "Core Java, OOP, Debugging",
    summaryPoints:
      "Worked on Java-based applications using OOP principles. Wrote and debugged efficient code and collaborated in a small dev team.",
  },
  {
    timelineType: "education",
    title: "B.E. in Computer Engineering",
    name: "Indira College of Engineering",
    dateRange: "Sept 2022 – May 2026",
    summaryPoints: "Current CGPA: 7.5",
  },
  {
    timelineType: "education",
    title: "HSC",
    name: "Nirmal Bethany Junior College",
    dateRange: "2020 – 2022",
    summaryPoints: "Score: 75%",
  },
  {
    timelineType: "education",
    title: "SSC",
    name: "Alphonsa High School",
    dateRange: "2019 – 2020",
    summaryPoints: "Score: 86.20%",
  },
];

const WorkExperience: React.FC = () => {
  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? index === 0
                  ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                  : { background: 'rgb(240, 240, 240)', color: '#fff' }
                : { background: 'rgb(255, 224, 230)', color: '#fff' }
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: index === 0 ? '7px solid rgb(33, 150, 243)' : '7px solid rgb(240, 240, 240)' }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' }
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === "work" ? (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
                <p>{item.summaryPoints}</p>
              </div>
            ) : (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                <p>{item.summaryPoints}</p>
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
