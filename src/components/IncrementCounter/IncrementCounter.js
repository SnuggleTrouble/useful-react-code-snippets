import React, { useState } from "react";

import "./IncrementCounter.css";

export default function IncrementCounter() {
  const [counter, setCounter] = useState(0);
  function incrementCounterHandler() {
    setCounter((prevCounter) => prevCounter + 1);
  }
  return (
    <div>
      <h2>Incrementer</h2>
      <p id="counter">{counter}</p>
      <button onClick={incrementCounterHandler}>Increment</button>
    </div>
  );
}
