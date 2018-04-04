import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand cpp" />
            <em>C++</em>
          </li>
          <li>
            <span className="bar-expand javascript" />
            <em>JavaScript</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>HTML5</em>
          </li>
          <li>
            <span className="bar-expand css" />
            <em>CSS</em>
          </li>
          <li>
            <span className="bar-expand git" />
            <em>Git</em>
          </li>
          <li>
            <span className="bar-expand linux" />
            <em>Linux</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
