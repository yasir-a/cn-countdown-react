import "./CountDnAlert.css";

const CountDnAlert = ({ counter, inputCounter, isCounterRunning }) => {
  const renderAlert = () => {
    let alert = "";
    if (!isCounterRunning && counter === 0) {
      alert = "Time's up!";
    } else if (isCounterRunning && counter / inputCounter <= 0.5) {
      alert = "More than halfway there!";
    }
    return alert;
  };

  return (
    <div className='cd-alert-container'>
      <p className='cd-alert-text'>{renderAlert()}</p>
    </div>
  );
};

export default CountDnAlert;
