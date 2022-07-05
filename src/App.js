import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CalculatorPage from './pages/Calculator';
import HomePage from './pages/Home';
import QuotePage from './pages/Quote';
import NavBar from './components/NavBar';
import './index.scss';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="quote" element={<QuotePage />} />
        </Routes>
      </>
    );
  }
}

export default App;
