import React from "react";
import { Link } from "react-router-dom";
import kuduLeft from "../../images/home/kuduleft.png";
import kuduRight from "../../images/home/kuduright.png";
import kuduLeftColor from "../../images/home/colorkuduleft.png";
import kuduRightColor from "../../images/home/colorkuduright.png";

const HomeImages = () => {
  return (
    <div className="col-sm-12 text-center mt-5">
      <Link to="/about">
        <img
          className="kudu"
          src={kuduLeft}
          alt="kudu"
          onMouseOver={(e) => (e.currentTarget.src = kuduLeftColor)}
          onMouseOut={(e) => (e.currentTarget.src = kuduLeft)}
        />
      </Link>
      <Link to="/portfolio">
        <img
          className="kudu"
          src={kuduRight}
          alt="kudu"
          onMouseOver={(e) => (e.currentTarget.src = kuduRightColor)}
          onMouseOut={(e) => (e.currentTarget.src = kuduRight)}
        />
      </Link>
    </div>
  );
};

export default HomeImages;
