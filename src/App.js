import React, { useState } from "react";

const App = () => {
  const [tempValue, setTempValue] = useState(10);
  const [tempColor, setTempColor] = useState("cold");

  const increase = () => {
    setTempValue(tempValue + 1);
    tempValue >= 15 && setTempColor("hot");
  };
  const decrease = () => {
    setTempValue(tempValue - 1);
    tempValue <= 15 && setTempColor("cold");
  };
  return (
    <div>
      <h2>Temperature Control App</h2>
      <div className="app-container">
        <div className="temperature-display-container">
          <div className={`temperature-display ${tempColor}`}>
            {tempValue}°C
          </div>
        </div>
        <div className="button-container">
          <button onClick={() => increase()}>+</button>
          <button onClick={() => decrease()}>-</button>
        </div>
      </div>
    </div>
  );
};

export default App;
