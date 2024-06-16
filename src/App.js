import "./App.css";
import Forecast from "./components/Forecast";
import Header from "./components/Header";
import TodaysHilights from "./components/TodaysHighlights";
import TodayWeather from "./components/TodayWeather";

import { useState } from "react";

function App() {
  const [location, setLocation] = useState("");
  return (
    <div className="App">
      <div className="app-inner-container">
        <TodayWeather location={location} setLocation={setLocation} />
        <div className="insights-container">
          <Header />
          {/* <Forecast /> */}
          <TodaysHilights />
        </div>
      </div>
    </div>
  );
}

export default App;
