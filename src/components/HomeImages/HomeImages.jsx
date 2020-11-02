import React from "react";
import { Link } from "react-router-dom";
import kuduLeft from "../../images/kuduleft.png";
import kuduRight from "../../images/kuduright.png";


const HomeImages = () => {
  return (
    <div className="col-sm-12 text-center mt-5">
      <Link to="/about">
        <img
          className="bw-kudu"
          src={kuduLeft}
          alt="kudu"
        />
      </Link>
      <Link to="/portfolio">
        <img
          className="bw-kudu"
          src={kuduRight}
          alt="kudu"
        />
      </Link>
    </div>
  );
};

export default HomeImages;
