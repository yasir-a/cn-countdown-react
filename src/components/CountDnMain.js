import { useState, useEffect } from "react";
import CountDnAlert from "./countDnAlert/CountDnAlert";
import CountDnDisplay from "./countDnDisplay/CountDnDisplay";
import CountDnForm from "./countDnForm/CountDnForm";
import CountDnSpeed from "./countDnSpeed/CountDnSpeed";
import "./CountDnMain.css";

const CountDnMain = () => {
  const [inputCounter, setInputCounter] = useState(0);
  const [counter, setCounter] = useState(0);
  const [counterStarted, setCounterStarted] = useState(false);
  const [isCounterRunning, setIsCounterRunning] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [activePaceId, setActivePaceId] = useState(1);

  const resetCount = () => {
    setCounter(0);
    setIsCounterRunning(false);
    setCounterStarted(false);
    setSpeed(1);
  };

  useEffect(() => {
    const counterZero = counter === 0;
    if (isCounterRunning && !counterZero) {
      const id = window.setInterval(() => {
        setCounter((counter) => counter - 1);
      }, Math.floor(1000 / speed));
      return () => window.clearInterval(id);
    } else if (counterZero) {
      resetCount();
    }
  }, [isCounterRunning, speed, counter]);

  const handleCounterStartClick = (inputVal) => {
    const counter = parseInt(inputVal) * 60;
    setCounter(counter);
    setInputCounter(counter);
    setCounterStarted(true);
    setIsCounterRunning(true);
    setSpeed(1);
  };

  const handleCounterRunning = () => {
    if (isCounterRunning) {
      setIsCounterRunning(false);
    } else {
      setIsCounterRunning(true);
    }
  };

  const handleOnChangeSpeed = (pace, id) => {
    console.log(pace, id);
    setSpeed(pace);
    setActivePaceId(id);
  };

  return (
    <div className='cd-main-container'>
      <CountDnForm
        counter={counter}
        isCounterRunning={isCounterRunning}
        onClick={handleCounterStartClick}
      />
      <CountDnAlert
        counter={counter}
        inputCounter={inputCounter}
        counterStarted={counterStarted}
      />
      <CountDnDisplay
        counter={counter}
        counterStarted={counterStarted}
        onClick={handleCounterRunning}
        isCounterRunning={isCounterRunning}
      />
      <CountDnSpeed
        speed={speed}
        counter={counter}
        activePaceId={activePaceId}
        isCounterRunning={isCounterRunning}
        onClick={handleOnChangeSpeed}
      />
    </div>
  );
};

export default CountDnMain;