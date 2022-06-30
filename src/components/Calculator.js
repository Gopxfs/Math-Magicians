import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [operation, setOperation] = useState({ total: null, next: null });

  const newOperation = (symbol) => {
    setOperation(calculate(operation, symbol));
  };

  return (
    <div className="calculator">
      <div className="result">
        <div>
          {operation.next ?? operation.total ?? 0}
        </div>
      </div>
      <div className="buttons">
        <button type="button" onClick={() => newOperation('AC')} className="button grey">AC</button>
        <button type="button" onClick={() => newOperation('+/-')} className="button grey">+/-</button>
        <button type="button" onClick={() => newOperation('%')} className="button grey">%</button>
        <button type="button" onClick={() => newOperation('÷')} className="button orange">÷</button>
        <button type="button" onClick={() => newOperation('7')} className="button grey">7</button>
        <button type="button" onClick={() => newOperation('8')} className="button grey">8</button>
        <button type="button" onClick={() => newOperation('9')} className="button grey">9</button>
        <button type="button" onClick={() => newOperation('x')} className="button orange">x</button>
        <button type="button" onClick={() => newOperation('4')} className="button grey">4</button>
        <button type="button" onClick={() => newOperation('5')} className="button grey">5</button>
        <button type="button" onClick={() => newOperation('6')} className="button grey">6</button>
        <button type="button" onClick={() => newOperation('-')} className="button orange">-</button>
        <button type="button" onClick={() => newOperation('1')} className="button grey">1</button>
        <button type="button" onClick={() => newOperation('2')} className="button grey">2</button>
        <button type="button" onClick={() => newOperation('3')} className="button grey">3</button>
        <button type="button" onClick={() => newOperation('+')} className="button orange">+</button>
        <button type="button" onClick={() => newOperation('0')} className="button grey zero">0</button>
        <button type="button" onClick={() => newOperation('.')} className="button grey">.</button>
        <button type="button" onClick={() => newOperation('=')} className="button orange">=</button>
      </div>
    </div>
  );
};

export default Calculator;
