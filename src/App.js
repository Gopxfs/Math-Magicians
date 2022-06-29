import Calculator from './components/Calculator';
import './index.scss';

const calculator = new Calculator();
function App() {
  return (
    calculator.render()
  );
}

export default App;
