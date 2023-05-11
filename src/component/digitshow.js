/* eslint-disable react/button-has-type */
import React from 'react';

function Digits() {
  const createDigits = () => {
    const digits = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i}>
          {i}
        </button>,
      );
    }
    return digits;
  };

  return (
    <>
      {createDigits()}
      <button className="zero" type="button">0</button>
      <button type="button">.</button>
    </>
  );
}

export default Digits;
