import React from "react";
import "./styles/app.scss";

//Components Import
import LeftNavBar from "./components/LeftNavBar/index";
import TopNavBar from "./components/TopNavBar/index";
import LineChart from "./components/LineChart/index";
import CardMetrics from "./components/CardMetrics/index";
import TripList from "./components/TripList/index";
import ChartMedium from "./components/ChartMedium";

function App() {
  return (
    <div className="container">
      <LeftNavBar />
      <TopNavBar />
      <LineChart />
      <CardMetrics />
      <TripList />
      <ChartMedium />
    </div>
  );
}

export default App;
