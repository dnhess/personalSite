import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Experience</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>SIG-Game Missouri S&T</h3>
          <p className="info">
            Member
            <span>&bull;</span>
            <em className="date">January 2017 - Present</em>
          </p>
            <ul>
              <li>• Designed and implemented the new layout for siggame.io</li>
              <li>• Utilized an agile work environment for fast product delivery</li>
              <li>• Currently rebuilding the MegaMinerAI website using React and Express</li>
              <li>• Communicated with five other teams in order to ensure product delivery</li>
            </ul>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>EFCO Corporation</h3>
          <p className="info">
            IT Helpdesk Intern
            <span>&bull;</span>
            <em className="date">May 2017 - August 2017</em>
          </p>
          <ul>
            <li>• Migrated around 800 computers by coordinating with employees of the company</li>
            <li>• Developed a python program to copy files from local computers to the network</li>
            <li>• Provided hardware and software assistance to over one thousand employees</li>
            <li>• Assisted in imaging over 150 windows machines</li>
          </ul>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Personal Website Design v2</h3>
          <p className="info">
            Personal Website v2
            <span>&bull;</span>
            <em className="date">April 2018</em>
          </p>
          <ul>
            <li>• Resigned my personal website using react, Webpack, JavaScript, and CSS</li>
            <li>• Utilized GatsbyJS in order to generate a static site created from react</li>
            <li>• Modified a design by <a href="https://www.styleshout.com/">styleshout</a> to fit my own needs</li>
          </ul>
        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <h3>Persoanl Website Design v1</h3>
          <p className="info">
            Persoanl Website v1
            <span>&bull;</span>
            <em className="date">August 2016</em>
          </p>
          <ul>
            <li>• Utilized the twitter bootstrap system to quickly deploy a website</li>
            <li>• Implemented responsive formatting to work on any device</li>
            <li>• Configured CNAME records to point to github website hosting</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
