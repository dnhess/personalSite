import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Missouri University of Science & Technology</h3>
          <p className="info">
            B.S. Computer Science
            <span>&bull;</span>
            <em className="date">May 2019</em>
          </p>

          <p>
            What am I learning Missouri University of Science & Technology? Quite a few things in fact! Here are a couple of classes that have had over the years:
          </p>
            <ul>
              <li>Data Structures</li>
              <li>Algorithms</li>
              <li>Databases</li>
              <li>Programming Languages & Translators</li>
              <li>Introduction to Operating Systems</li>
              <li>Introduction to Micro Embedded Design</li>
            </ul>

        </div>
      </div>
    </div>
  </div>
);

export default Education;
