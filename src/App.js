import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import './index.scss';

class App extends React.PureComponent {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Calculator />} />
      </Routes>
    );
  }
}

export default App;
