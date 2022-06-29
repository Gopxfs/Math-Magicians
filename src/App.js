import React from 'react';
import Calculator from './components/Calculator';
import './index.scss';

class App extends React.PureComponent {
  render() {
    return Calculator.render();
  }
}

export default App;
