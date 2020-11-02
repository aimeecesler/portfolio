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
            <Link to={() => {window.open("https://www.linkedin.com/in/aimee-esler-3bb31288/",'_blank')}}>
            <img className="icon pr-2" src={linkedin} alt="LinkedIn Icon" />
            </Link>
            <Link to={() => {window.open("https://github.com/aimeecesler",'_blank')}}>
            <img className="icon pr-2" src={github} alt="GitHub Icon" />
            </Link>
            <Link to={() => {window.open("https://drive.google.com/file/d/1YcDGV6925kBhLW2yzusRFPoqCfCV38Iu/view?usp=sharing",'_blank')}}>
            <img className="icon pr-2" src={resume} alt="Resume Icon" />
            </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
