import React from 'react';
import Operate from './operate';

// Call the Operate function
Operate();

function Calculator() {
  const createDigits = () => {
    const digits = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 10; i++) {
      digits.push(
        // eslint-disable-next-line react/button-has-type
        <button key={i}>
          {i}
        </button>,
      );
    }
    return digits;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>(0)</span>
          0
        </div>
        <div className="scienceo">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>

        </div>
        <div className="operators">
          <button type="button">÷</button>
          <button type="button">*</button>
          <button type="button">+</button>
          <button type="button">-</button>
          <button type="button">=</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button className="zero" type="button">0</button>
          <button type="button">.</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
