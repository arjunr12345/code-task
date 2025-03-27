import { useState } from 'react';
import './HeronsFormula.css';

function HeronsFormula() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    
    // Convert input values to numbers
    const sideA = parseFloat(a);
    const sideB = parseFloat(b);
    const sideC = parseFloat(c);

    // Apply Heron's formula for area of triangle
    const area = (1 / 4) * Math.sqrt(((4 * Math.pow(sideA, 2)) * Math.pow(sideB, 2)) - Math.pow((Math.pow(sideA, 2) + Math.pow(sideB, 2) - Math.pow(sideC, 2)), 2));

    // Set result in state
    setResult(area.toFixed(4)); // Format result to 4 decimal places
  }

  return (
    <div className="box5">
      <h1>Heron's Formula</h1>
      <form id="heron" onSubmit={handleSubmit}>
        <label htmlFor="a">Side a:</label>
        <input
          type="number"
          id="av"
          name="av"
          value={a}
          onChange={(e) => setA(e.target.value)}
          required
        />
        <label htmlFor="b">Side b:</label>
        <input
          type="number"
          id="bv"
          name="bv"
          value={b}
          onChange={(e) => setB(e.target.value)}
          required
        />
        <label htmlFor="c">Side c:</label>
        <input
          type="number"
          id="cv"
          name="cv"
          value={c}
          onChange={(e) => setC(e.target.value)}
          required
        />
        <label htmlFor="result6">Result:</label>
        <input
          type="text"
          id="result6"
          name="result6"
          value={result}
          readOnly
        />
        <input type="submit" value="Calculate" />
      </form>
    </div>
  );
}

export default HeronsFormula;