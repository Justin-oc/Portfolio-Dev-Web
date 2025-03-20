import React from "react";
import "../styles/skills.scss";

const skillsData = [
  { name: "HTML", level: "90%" },
  { name: "CSS", level: "85%" },
  { name: "JavaScript", level: "80%" },
  { name: "React", level: "75%" },
  { name: "Sass", level: "70%" },
  { name: "Bootstrap", level: "80%" },
];

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <h2>Mes Compétences</h2>
        <div className="skills-list">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill">
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: skill.level }}>
                  {skill.level}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;