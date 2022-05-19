import "./CountDnSpeed.css";
const CountDnSpeed = ({
  onClick,
  activePaceId,
  speed,
  isCounterRunning,
  counter,
}) => {
  const speedRateBtn = [
    { id: 1, name: "1x", pace: 1 },
    { id: 2, name: "1.5x", pace: 2 },
    { id: 3, name: "2x", pace: 3 },
  ];

  const renderSpeedRateBtn = () => {
    return speedRateBtn.map((btn) => {
      return (
        <button
          key={btn.id}
          className={`cd-speed-variant ${
            activePaceId === btn.id ? "active" : ""
          }`}
          disabled={!isCounterRunning || counter === 0}
          onClick={() => onClick(btn.pace, btn.id)}
        >
          {btn.name}
        </button>
      );
    });
  };

  return <div className='cd-speed-container'>{renderSpeedRateBtn()}</div>;
};

export default CountDnSpeed;
