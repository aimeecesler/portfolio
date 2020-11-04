import React from "react";

const CarouselSlide = (props) => {
    console.log(props);
  return (
      <div className={props.class}>
        <img
          src={props.src}
          className="carousel-image d-block w-100"
          alt={props.alt}
          data-interval="10000"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>{props.name}</h5>
          <p>
            <a href={props.github}>GitHub Repository</a>
          </p>
          <p>
            <a href={props.deployed}>Deployed Application</a>
          </p>
        </div>
      </div>
  );
};

export default CarouselSlide;
