import React from "react";
import "./PortfolioCardWeb.css";

const PortfolioCardWeb = (props) => {
  return (
    <div className="col-auto mb-4">
      <div className="card text-center portfolio-card">
        <img
          src={props.bw}
          className="card-img-top"
          alt={props.alt}
          onMouseOver={(e) => (e.currentTarget.src = props.color)}
          onMouseOut={(e) => (e.currentTarget.src = props.bw)}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p>{props.body}</p>
        </div>
        <div className="card-footer">
          <a href={props.github} target="_blank" rel="noreferrer" className="btn btn-dark m-1">
            GitHub Repository
          </a>
          <a href={props.deployed} target="_blank" rel="noreferrer" className="btn btn-dark m-1">
            Deployed Application
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCardWeb;
