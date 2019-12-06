import React from "react";
import "../../styles/TripList.scss";

//image imports
import TripListImg from "../../images/trips.png";
import TripListImgTab from "../../images/tripListTab.png";

const TripList = () => {
  return (
    <div className="containerTripList">
      <img
        src={TripListImg}
        alt="TripList"
        height=" 460px"
        className="tripListImg"
      />
      <img
        src={TripListImgTab}
        alt="TripList Tablet"
        className="tripListImgTab"
      />
    </div>
  );
};

export default TripList;
