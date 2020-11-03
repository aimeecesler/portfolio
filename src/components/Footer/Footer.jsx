import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-1">
      <div className="container-fluid pr-5 pl-5">
        <div className="row">
          <span className="col-sm-4 text-left my-auto">
            <Link className="text-muted" to="/contact">
              Contact Me
            </Link>
          </span>
          <span className="col-sm-4 text-center copyright text-muted my-auto">
            Copyright&copy; 2020 Aimee Corbin Esler
          </span>
          <span className="col-sm-4 text-right my-auto">
            <SocialLinks />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
