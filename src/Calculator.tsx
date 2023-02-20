import { useRef, useState } from 'react';
import './Calculator.css';

const Calculator = {
  ac: () => 0,
  div: (a: any, b: any) => `${a / b}`,
  mul: (a: any, b: any) => `${a * b}`,
  sum: (a: any, b: any) => `${a + b}`,
  sub: (a: any, b: any) => `${a - b}`,
  equal: (a: string) => a,
  comma: (a: string) => (a.includes(',') ? a : `${a},`),
  plus_minus: (a: number) => (a > 0 ? `-${a}` : `${a * -1}`),
};

function App() {
  const [input, setInput] = useState('0');

  const append = (a: number) => {
    const value = Number(input);
  };

  return (
    <div className="calculator">
      <input className="input" readOnly value={input} />
      <button>AC</button>
      <button>+/-</button>
      <button>%</button>
      <button className="orange">/</button>
      <button
        onClick={() => {
          // setInput(1);
        }}
      >
        1
      </button>
      <button>2</button>
      <button>3</button>
      <button className="orange">*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className="orange">-</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="orange">+</button>
      <button className="zero">0</button>
      <button>,</button>
      <button>=</button>
    </div>
  );
}

export default App;
