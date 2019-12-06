import React from "react";
import "../../styles/LineChart.scss";

//image imports
import lineChart from "../../images/LineChart.png";
const LineChart = () => {
  return (
    <div className="containerLineChart">
      <h1 className="anaFont">Analytics</h1>
      <img
        src={lineChart}
        alt="LineChartGraph"
        width=" 1136px"
        className="chartImg"
      />
    </div>
  );
};

export default LineChart;
