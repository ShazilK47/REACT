import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    counter += 1;
    setCounter(counter);
  };

  const resetValue = () => {
    counter = 0;
    setCounter(counter);
  };

  return (
    <>
      <h1>COUNTER</h1>
      <h3>Counter value: {counter} </h3>

      <button onClick={addValue}>Add Value</button>
      <button onClick={resetValue}>Reset Value</button>
    </>
  );
}

export default App;
