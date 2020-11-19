import React from "react";
import linkedin from "../../images/icons/linkedin.png";
import github from "../../images/icons/github.png";
import resume from "../../images/icons/resume.png";
import email from "../../images/icons/email.png";

const SocialLinks = () => {
  return (
    <>
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
        href="MAILTO:aimeecesler@gmail.com"
      >
        <img className="icon pr-2" src={email} alt="Email Icon" />
      </a>
      <a
        href="https://drive.google.com/file/d/1YcDGV6925kBhLW2yzusRFPoqCfCV38Iu/view?usp=sharing"
        target="blank"
      >
        <img className="icon pr-2" src={resume} alt="Resume Icon" />
      </a>
    </>
  );
};

export default SocialLinks;
