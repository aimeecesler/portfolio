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
        <div className="row">
        <span className="col-sm-4 text-left my-auto">
          <Link className="text-muted" to="/contact">Contact Me</Link>
        </span>
        <span className="col-sm-4 text-center copyright text-muted my-auto">
          Copyright&copy; 2020 Aimee Corbin Esler
        </span>
        <span className="col-sm-4 text-right my-auto">
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
      </div>
    </footer>
  );
};

export default Footer;
