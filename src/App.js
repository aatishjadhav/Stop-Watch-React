import "./App.css";

import React, { useState } from "react";

let adjustInterval = undefined;

function App() {
  const [watch, setWatch] = useState(0);
  const [started, setStarted] = useState(false);

  const startWatch = () => {
    adjustInterval = setInterval(() => {
      setWatch((x) => x + 1);
    }, 1000);
    setStarted(true);
  };
  const stopWatch = () => {
    clearInterval(adjustInterval);
    setStarted(false);
  };
  const resetWatch = () => {
    setWatch(0);
  };

  return (
    <div className="App">
      <h1>Start Stop watch</h1>
      <h1>{watch}</h1>
      <button disabled={started} className="start" onClick={startWatch}>
        Start
      </button>
      <button className="stop" onClick={stopWatch}>Stop</button>
      <button className="reset" onClick={resetWatch}>Reset</button>
    </div>
  );
}

export default App;




