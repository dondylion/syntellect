import React from "react";
import "./App.css";
import ControlAutocomplit from "./components/ControlAutocomplit/ControlAutocomplit";
import ControlWithButtons from "./components/ControlWithButtons/ControlWithButtons";

function App() {
  return (
    <div className="lg:flex flex-row space-between">
      <ControlWithButtons/>
      <ControlAutocomplit/>
    </div>
  );
}

export default App;
