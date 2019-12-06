import React from "react";
import "../../styles/LeftNavBar.scss";

//Image imports
import hamburger from "../../images/hamburger.png";

const LeftNavBar = () => {
  return (
    <div className="containerLeftNav">
      <div className="hamburgerMenu">
        <img src={hamburger} alt="Navigation icon" />
      </div>
      <div className="group">
        <div className="highlighted">
          <i class="fas fa-th-large icon "></i>
        </div>
        <div className="lineActive"></div>
        <i class="far fa-chart-bar icon"></i>
        <i class="fas fa-car-side icon"></i>
        <i class="far fa-map icon"></i>
        <i class="far fa-envelope icon"></i>
        <i class="fas fa-cog icon"></i>
      </div>
    </div>
  );
};

export default LeftNavBar;
