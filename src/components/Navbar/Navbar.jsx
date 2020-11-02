import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Aimee Esler
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
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavLink className="nav-link" to="/about">
            About Me
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
          <NavLink className="nav-link" to="/portfolio">
            Portfolio
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
