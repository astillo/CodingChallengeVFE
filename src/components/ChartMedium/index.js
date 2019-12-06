import React from "react";
import "../../styles/ChartMedium.scss";

// image imports
import ChartMediumImg from "../../images/barGraph.png";
import ChartMediumImgTab from "../../images/barGraphTab.png";

const ChartMedium = () => {
  return (
    <div className="containerChart">
      <img
        src={ChartMediumImg}
        alt="Chart Medium Bar graph"
        width=" 752px"
        className="chartMediumImg"
      />
      <img
        src={ChartMediumImgTab}
        alt="Chart Medium Bar Tablet"
        className="chartMediumImgTab"
      />
    </div>
  );
};

export default ChartMedium;
