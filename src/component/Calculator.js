/* eslint-disable no-console */
import { useState } from 'react';
import Digits from './digitshow';
// import calculate from './logic/calculate';

function Calculator() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === '')
      || (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc((prevCalc) => prevCalc + value);

    if (!ops.includes(value)) {
      // eslint-disable-next-line no-eval
      setResult(eval(calc + value).toString());
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>{result}</span> : ''}
          {calc || '0'}
          0
        </div>
        <div className="scienceo">
          <button type="button">AC</button>
          <button type="button" onClick={() => updateCalc('+/-')}>
            +/-
          </button>
          <button type="button" onClick={() => updateCalc('%')}>
            %
          </button>
        </div>
        <div className="operators">
          <button type="button" onClick={() => updateCalc('÷')}>
            ÷
          </button>
          <button type="button" onClick={() => updateCalc('*')}>
            *
          </button>
          <button type="button" onClick={() => updateCalc('+')}>
            +
          </button>
          <button type="button" onClick={() => updateCalc('-')}>
            -
          </button>
          <button type="button">=</button>
        </div>
        <div className="digits">
          <Digits updateCalc={updateCalc} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
