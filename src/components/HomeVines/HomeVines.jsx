import React from "react";
import { Link } from "react-router-dom";
import vineRight from "../../images/vinerightwhite.png";
import vineLeft from "../../images/vineleftwhite.png";
import vineRightColor from "../../images/vinerightcolor.png";
import vineLeftColor from "../../images/vineleftcolor.png";


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
        href="https://drive.google.com/file/d/1YcDGV6925kBhLW2yzusRFPoqCfCV38Iu/view?usp=sharing"
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
