import React from "react";
import { Link } from "react-router-dom";
import vineRight from "../../images/home/vinerightwhite.png";
import vineLeft from "../../images/home/vineleftwhite.png";
import vineRightColor from "../../images/home/vinerightcolor.png";
import vineLeftColor from "../../images/home/vineleftcolor.png";


const HomeVines = () => {
  return (
    <div className="col-sm-12 text-center">
      <Link to="/contact">
        <img
          className="vine"
          src={vineLeft}
          alt="vine"
          onMouseOver={(e) => (e.currentTarget.src = vineLeftColor)}
          onMouseOut={(e) => (e.currentTarget.src = vineLeft)}
        />
      </Link>
      <a
        href="https://drive.google.com/file/d/1M6rpd9JO_bZ7uk1hIPFxEqbHpHD5XtMq/view?usp=sharing"
        target="blank"
      >
        <img
          className="vine"
          src={vineRight}
          alt="vine"
          onMouseOver={(e) => (e.currentTarget.src = vineRightColor)}
          onMouseOut={(e) => (e.currentTarget.src = vineRight)}
        />
      </a>
    </div>
  );
};

export default HomeVines;
