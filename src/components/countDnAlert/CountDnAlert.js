import "./CountDnAlert.css";

const CountDnAlert = ({ counter, counterStarted, inputCounter }) => {
  const renderAlert = () => {
    let alert = "";
    if (counterStarted && counter === 0) {
      alert = "Time's up!";
    } else if (counterStarted && counter / inputCounter <= 0.5) {
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
