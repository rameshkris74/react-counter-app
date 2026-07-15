import { useState } from "react";
import "./Counter.css";
import Button from "../Button/Button";

function Counter() {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);

  function increase() {
    if (count < 100) {
      setCount(count + 1);
      setClicks(clicks + 1);
    }
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
      setClicks(clicks + 1);
    }
  }

  function increaseFive() {
    if (count <= 95) {
      setCount(count + 5);
      setClicks(clicks + 1);
    }
  }

  function decreaseFive() {
    if (count >= 5) {
      setCount(count - 5);
      setClicks(clicks + 1);
    }
  }

  function reset() {
    setCount(0);
    setClicks(0);
  }

  return (
    <div className="counter-card">
      <h2>Counter App</h2>

      <h1
        className={
          count === 0
            ? "zero"
            : count === 100
            ? "max"
            : "positive"
        }
      >
        {count}
      </h1>

      <p className="status">
        {count === 0
          ? "Zero"
          : count === 100
          ? "Maximum Limit Reached"
          : "Positive Number"}
      </p>

      <div className="button-group">
        <Button text="+1" onClick={increase} disabled={count === 100} />
        <Button text="-1" onClick={decrease} disabled={count === 0} />
        <Button text="+5" onClick={increaseFive} disabled={count >= 96} />
        <Button text="-5" onClick={decreaseFive} disabled={count < 5} />
        <Button text="Reset" onClick={reset} />
      </div>

      <h3>Total Clicks : {clicks}</h3>
    </div>
  );
}

export default Counter;