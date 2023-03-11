import React from "react";
import "./PortfolioCardiOS.css";

const PortfolioCardiOS = (props) => {
  return (
    <div className="col-auto mb-4">
      <div className="card text-center portfolio-card">
        <img
          src={props.static}
          className="card-img-top iOS-image"
          alt={props.alt}
          onMouseOver={(e) => (e.currentTarget.src = props.animated)}
          onMouseOut={(e) => (e.currentTarget.src = props.static)}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p>{props.body}</p>
        </div>
        <div className="card-footer">
          <a href={props.appstore} target="_blank" rel="noreferrer" className="btn btn-dark m-1">
            AppStore - Coming Soon!
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCardiOS;
