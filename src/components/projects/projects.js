import React, { useState } from "react";
import ProjectData from "../../Data/project-data";
import "../../styles/project-styles.css";

export default function Project() {
  const [db] = useState(ProjectData);

  return (
    <>
      <div className="project-wrapper">
        {db.map((project) => (
          <div key={project.name} className="title">
            {project.title}
            <div>
              <img src={project.img} alt="img">
                
              </img>
              <a href={project.href}>Project</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
