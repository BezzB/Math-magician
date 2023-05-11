import React from 'react';
import Digits from './digitshow';

// Call the Operate function
function Calculator() {
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
          <Digits />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
