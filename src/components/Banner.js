import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Dillon Hess.</h1>
      <h3>
        I'm a junior majoring in computer science that enjoys <span>website development</span>,
        <span> application development</span>, and anything related to <span>software engineering</span>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
