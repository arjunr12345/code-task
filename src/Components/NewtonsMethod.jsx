import { useState } from 'react';
import './NewtonsMethod.css';

function NewtonsMethod() {
  const [rootGuess, setRootGuess] = useState(0);
  const [result, setResult] = useState('');
  
  function f(x) {
    return 6 * Math.pow(x, 4) - 13 * Math.pow(x, 3) - 18 * Math.pow(x, 2) + 7 * x + 6;
  }

  function fPrime(x) {
    return 24 * Math.pow(x, 3) - 39 * Math.pow(x, 2) - 36 * x + 7;
  }

  function handleSubmit(event) {
    event.preventDefault();

    let x = parseFloat(rootGuess);
    let tolerance = 1e-6;
    let maxIterations = 100;
    let iteration = 0;

    console.log(`Starting Newton’s Method at x = ${x}`);

    while (iteration < maxIterations) {
      let fx = f(x);
      let fpx = fPrime(x);

      if (Math.abs(fpx) < tolerance) {
        setResult('Derivative near zero! No valid root.');
        return;
      }

      let nextX = x - fx / fpx;

      console.log(`Iteration ${iteration}: x = ${nextX}`);

      if (Math.abs(nextX - x) < tolerance) {
        setResult(`Root: ${nextX.toFixed(6)}`);
        return;
      }

      x = nextX;
      iteration++;
    }

    setResult('Did not converge.');
  }

  return (
    <div className="box3">
      <h1>Newton's Method</h1>
      <form id="new-mod" onSubmit={handleSubmit}>
        <label htmlFor="r">Root guess:</label>
        <input
          type="number"
          id="r"
          name="r"
          value={rootGuess}
          onChange={(e) => setRootGuess(e.target.value)}
          required
        />
        <label htmlFor="result3">Result:</label>
        <input
          type="text"
          id="result3"
          name="result3"
          value={result}
          readOnly
        />
        <input type="submit" value="Calculate" />
      </form>
    </div>
  );
}

export default NewtonsMethod;