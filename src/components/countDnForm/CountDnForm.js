import { useState } from "react";
import "./CountDnForm.css";

const CountDnForm = ({ onClick, isCounterRunning, counter }) => {
  const [inputVal, setInputVal] = useState("");

  const handleInputValChange = (e) => {
    const regexPat = /^[1-9\b]+$/;
    if (e.target.value === "" || regexPat.test(e.target.value)) {
      setInputVal(e.target.value);
    }
  };

  const handleOnClick = () => {
    onClick(inputVal);
    setInputVal("");
  };
  return (
    <div className='cd-form-container'>
      <h1 className='cd-form-title'>Countdown:</h1>
      <input
        className='cd-form-input'
        type='text'
        placeholder='(Min)'
        onChange={handleInputValChange}
        value={inputVal}
        disabled={isCounterRunning && counter !== 0}
      />
      <button
        className='cd-form-btn'
        onClick={handleOnClick}
        disabled={inputVal === ""}
      >
        START
      </button>
    </div>
  );
};

export default CountDnForm;
