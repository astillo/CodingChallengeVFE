import React from "react";
import "../../styles/topNavBar.scss";

//image imports
import logo from "../../images/logo.png";
// import groupTopNav from "../../images/groupTopNav.png";

const TopNavBar = () => {
  return (
    <div>
      <div className="containerTop">
        <div className="logo">
          <img src={logo} alt="logo" width="120px" height="30px" />
        </div>
      </div>
      {/* <div className="groupContainer">
        <div className="groupTopNav">
          <img src={groupTopNav} alt="group top Navigation" />
        </div>
      </div> */}
    </div>
  );
};

export default TopNavBar;
