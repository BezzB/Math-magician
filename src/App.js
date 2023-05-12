import React from 'react';
import Calculator from './component/Calculator';
import QuoteDisplay from './Quotes';
import './QuotesDisplay.css';

function App() {
  return (
    <div className="homecontainer">
      <h1>Calculator</h1>
      <Calculator />
      <QuoteDisplay />
    </div>
  );
}

export default App;
