import React from "react";
import "../../styles/Chart.scss";

//image imports
import CardMetricsImg from "../../images/ChartMetrics.png";
import CardMetricsImgTab from "../../images/metricsTablet.png";
const CardMetrics = () => {
  return (
    <div className="cardContainer">
      <img
        src={CardMetricsImg}
        alt="card metrics"
        width=" 1136px"
        className="metricImg"
      />
      <img
        src={CardMetricsImgTab}
        alt="card metrics tablet"
        className="metricImgTab"
      />
    </div>
  );
};

export default CardMetrics;
