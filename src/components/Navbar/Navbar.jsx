import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/ACElogosimple.png";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-dark">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>
        <button
          className="navbar-toggler mb-5"
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
              <SocialLinks />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
