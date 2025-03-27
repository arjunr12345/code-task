import { useState } from 'react';
import './AmbiguousCase.css';

function AmbiguousCase() {
  const [angleA, setAngleA] = useState('');
  const [sideB, setSideB] = useState('');
  const [sideC, setSideC] = useState('');
  const [result, setResult] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    
    const a = parseFloat(angleA);
    const b = parseFloat(sideB);
    const c = parseFloat(sideC);
    
    const am = c * Math.sin(a * Math.PI / 180); // Convert angle from degrees to radians

    if (a <= 90) {
      if (b < am) {
        setResult("No triangle");
      } else if (b === am) {
        setResult("Right triangle");
      } else if (b > am) {
        setResult("One triangle");
      } else if (am < b && b < c) {
        setResult("Two triangles (ambiguous case)");
      }
    } else {
      if (b < c || b === c) {
        setResult("No triangle");
      } else if (b > c) {
        setResult("One triangle");
      }
    }
  }

  return (
    <div className="box2">
      <h1>Ambiguous case</h1>
      <form id="ambiguous" onSubmit={handleSubmit}>
        <label htmlFor="Aa">Angle A:</label>
        <input
          type="number"
          id="Aa"
          name="Aa"
          value={angleA}
          onChange={(e) => setAngleA(e.target.value)}
          required
        />
        <label htmlFor="sa">Side A:</label>
        <input
          type="number"
          id="b"
          name="b"
          value={sideB}
          onChange={(e) => setSideB(e.target.value)}
          required
        />
        <label htmlFor="sb">Side B:</label>
        <input
          type="number"
          id="c"
          name="c"
          value={sideC}
          onChange={(e) => setSideC(e.target.value)}
          required
        />
        <label htmlFor="result">Result:</label>
        <input
          type="text"
          id="result-2"
          name="result"
          value={result}
          readOnly
        />
        <input type="submit" value="Calculate" />
      </form>
    </div>
  );
}

export default AmbiguousCase;
