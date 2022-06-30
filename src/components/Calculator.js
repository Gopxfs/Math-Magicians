import React from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  newOperation = (symbol) => {
   this.setState(calculate(this.state, symbol));
  }

  render() {
    return (
      <div className="calculator">
        <div className="result">
          <div>
            0
          </div>
        </div>
        <div className="buttons">
          <button type="button" onClick={() => this.newOperation('AC')} className="button grey">AC</button>
          <button type="button" onClick={() => this.newOperation('+/-')} className="button grey">+/-</button>
          <button type="button" onClick={() => this.newOperation('%')} className="button grey">%</button>
          <button type="button" onClick={() => this.newOperation('÷')} className="button orange">÷</button>
          <button type="button" onClick={() => this.newOperation('7')} className="button grey">7</button>
          <button type="button" onClick={() => this.newOperation('8')} className="button grey">8</button>
          <button type="button" onClick={() => this.newOperation('9')} className="button grey">9</button>
          <button type="button" onClick={() => this.newOperation('X')} className="button orange">X</button>
          <button type="button" onClick={() => this.newOperation('4')} className="button grey">4</button>
          <button type="button" onClick={() => this.newOperation('5')} className="button grey">5</button>
          <button type="button" onClick={() => this.newOperation('6')} className="button grey">6</button>
          <button type="button" onClick={() => this.newOperation('-')} className="button orange">-</button>
          <button type="button" onClick={() => this.newOperation('1')} className="button grey">1</button>
          <button type="button" onClick={() => this.newOperation('2')} className="button grey">2</button>
          <button type="button" onClick={() => this.newOperation('3')} className="button grey">3</button>
          <button type="button" onClick={() => this.newOperation('+')} className="button orange">+</button>
          <button type="button" onClick={() => this.newOperation('0')} className="button grey zero">0</button>
          <button type="button" onClick={() => this.newOperation('.')} className="button grey">.</button>
          <button type="button" onClick={() => this.newOperation('=')} className="button orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
