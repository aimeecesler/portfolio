import React from "react";

const PortfolioCard = (props) => {
  return (
    <div className="col-sm-4">
      <div
        className="card text-white bg-secondary mb-4 text-center"
        onMouseOver={(e) => (e.currentTarget.className = "card mb-4 text-center")}
        onMouseOut={(e) => (e.currentTarget.className = "card text-white bg-secondary mb-4 text-center")}
      >
        <img
          src={props.bw}
          class="card-img-top"
          alt="props.alt"
          onMouseOver={(e) => (e.currentTarget.src = props.color)}
          onMouseOut={(e) => (e.currentTarget.src = props.bw)}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <a href={props.github} className="btn btn-dark mr-1">
            GitHub Repository
          </a>
          <a href={props.deployed} className="btn btn-dark ml-1">
            Deployed Application
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
