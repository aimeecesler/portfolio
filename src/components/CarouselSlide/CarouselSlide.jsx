import React from "react";
import { Link } from "react-router-dom";

const CarouselSlide = (props) => {
  return (
      <div className={props.class}>
        <Link to="">
        <img
          src={props.src}
          className="carousel-image d-block w-100"
          alt={props.alt}
          data-interval="10000"
        />
        </Link>
      </div>
  );
};

export default CarouselSlide;
