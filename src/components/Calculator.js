import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator">
        <div className="result">
          <div>
            0
          </div>
        </div>
        <div className="buttons">
          <div className="button grey">AC</div>
          <div className="button grey">+/-</div>
          <div className="button grey">%</div>
          <div className="button orange">÷</div>
          <div className="button grey">7</div>
          <div className="button grey">8</div>
          <div className="button grey">9</div>
          <div className="button orange">X</div>
          <div className="button grey">4</div>
          <div className="button grey">5</div>
          <div className="button grey">6</div>
          <div className="button orange">-</div>
          <div className="button grey">1</div>
          <div className="button grey">2</div>
          <div className="button grey">3</div>
          <div className="button orange">+</div>
          <div className="button grey zero">0</div>
          <div className="button grey">.</div>
          <div className="button orange">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
