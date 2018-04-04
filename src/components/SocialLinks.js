import React from "react";
import {
  FaLinkedinSquare,
  FaGithub,
  FaInstagram
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://github.com/dnhess">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/dillon-hess/">
        <FaLinkedinSquare />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/hess_dillon/">
        <FaInstagram />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
