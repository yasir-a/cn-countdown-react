import { AiOutlinePauseCircle, AiOutlinePlayCircle } from "react-icons/ai";
import "./CountDnDisplay.css";

const displayTimeFormate = (timeUnit) => {
  return timeUnit > 9 ? String(timeUnit) : `0${timeUnit}`;
};
const timeFormat = (counter) => {
  const min = Math.floor(counter / 60);
  const sec = counter - min * 60;
  const formattedMin = displayTimeFormate(min);
  const formattedSec = displayTimeFormate(sec);
  return `${formattedMin}:${formattedSec}`;
};

const CountDnDisplay = ({
  counter,
  onClick,
  isCounterRunning,
  counterStarted,
}) => {
  const formattedCounter = timeFormat(counter);
  const twentySecRemain =
    counterStarted && counter < 21 && counter !== 0 ? "twenty-sec-remain" : "";
  const blinkDisplay =
    counterStarted && counter < 11 && counter !== 0
      ? "ten-sec-remain-blink"
      : "";

  return (
    <div className='cd-display-container'>
      <h1 className={`cd-display-timer ${twentySecRemain} ${blinkDisplay}`}>
        {formattedCounter}
      </h1>
      <button
        className='cd-display-btn'
        onClick={onClick}
        disabled={!counterStarted || counter === 0}
      >
        {isCounterRunning && counter !== 0 ? (
          <AiOutlinePauseCircle className='cd-display-btn-pause' />
        ) : (
          <AiOutlinePlayCircle className='cd-display-btn-pause' />
        )}
      </button>
    </div>
  );
};

export default CountDnDisplay;
