import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/ACElogosimple.png";
import linkedin from "../../images/icons/linkedin.png";
import github from "../../images/icons/github.png";
import resume from "../../images/icons/resume.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-dark">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-right"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ml-auto">
            <NavLink className="nav-link" to="/about">
              About Me
            </NavLink>
            <NavLink className="nav-link" to="/portfolio">
              Portfolio
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
            <span>
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
      </nav>
    </header>
  );
};

export default Navbar;
