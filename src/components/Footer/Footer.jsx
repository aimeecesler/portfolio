import React from "react";
import linkedin from "../../images/icons/linkedin.png";
import github from "../../images/icons/github.png";
import resume from "../../images/icons/resume.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-1">
      <div className="container-fluid pr-5 pl-5">
        <span className="text-muted">
          Copyright&copy; 2020 Aimee Corbin Esler
        </span>
        <span className="float-right">
          <a
            href="https://www.linkedin.com/in/aimee-esler-3bb31288/"
            target="blank"
          >
            <img className="icon pr-2" src={linkedin} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/aimeecesler" target="blank">
            <img className="icon pr-2" src={github} alt="GitHub Icon" />
          </a>
          <a
            href="https://drive.google.com/file/d/1YcDGV6925kBhLW2yzusRFPoqCfCV38Iu/view?usp=sharing"
            target="blank"
          >
            <img className="icon pr-2" src={resume} alt="Resume Icon" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
