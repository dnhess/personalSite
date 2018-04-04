import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          Hello! My name is Dillon Hess, and I am currently a junior majoring in Computer Science at Missouri University of Science & Technology (S&T). Why Computer Science? Well, I have always liked messing around with computers and playing video games so I thought I may as well attempt it myself. I'm still working on the creating a video game part (mostly doing homework and website stuff ¯\_(ツ)_/¯).
          When I have free time I like to watch a lot of stuff that is on Netflix or use this cool thing called Plex or I like to play video games (Fortnite anyone?)

        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Dillon Hess</span>
              <br />
              <span>
                1509 B Ozark Street
                <br /> Rolla, MO 65401 US
              </span>
              <br />
              <span>(417) 342-8281</span>
              <br />
              <span>dnhc59@mst.edu</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              {/*TODO: Add resume link*/}
              <a href="#" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
