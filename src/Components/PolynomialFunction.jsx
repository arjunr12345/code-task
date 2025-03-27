import { useState } from 'react';
import './PolynomialFunction.css';

function PolynomialFunction() {
  const [coefficients, setCoefficients] = useState([]);
  const [exponents, setExponents] = useState([]);
  const [xValue, setXValue] = useState(0);
  const [polynomialString, setPolynomialString] = useState('');
  const [polynomialValue, setPolynomialValue] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    
    // Parse input values
    const coefArray = coefficients.split(' ').map(Number);
    const expArray = exponents.split(' ').map(Number);
    const x = parseFloat(xValue);

    // Check for matching lengths
    if (coefArray.length !== expArray.length) {
      setErrorMessage('Error: Mismatched coefficients and exponents');
      setPolynomialString('');
      setPolynomialValue(null);
      return;
    }

    let polynomialStr = '';
    let polynomialVal = 0;

    for (let i = 0; i < coefArray.length; i++) {
      let coef = coefArray[i];
      let exp = expArray[i];

      if (i > 0 && coef >= 0) polynomialStr += ' + ';
      polynomialStr += `${coef}x^${exp}`;
      
      polynomialVal += coef * Math.pow(x, exp);
    }

    setPolynomialString(polynomialStr);
    setPolynomialValue(polynomialVal.toFixed(4));
    setErrorMessage('');
  }

  return (
    <div className="box4">
      <h1>Polynomial</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ce">Coefficients:</label>
        <input
          type="text"
          id="ce"
          name="ce"
          value={coefficients}
          onChange={(e) => setCoefficients(e.target.value)}
          required
        />

        <label htmlFor="ex">Exponents:</label>
        <input
          type="text"
          id="ex"
          name="ex"
          value={exponents}
          onChange={(e) => setExponents(e.target.value)}
          required
        />

        <label htmlFor="x">x value:</label>
        <input
          type="number"
          id="x"
          name="x"
          value={xValue}
          onChange={(e) => setXValue(e.target.value)}
          required
        />

        {errorMessage && <p className="error">{errorMessage}</p>}

        <label htmlFor="result4">Polynomial Function result:</label>
        <input
          type="text"
          id="result4"
          name="result4"
          value={polynomialString}
          readOnly
        />

        <label htmlFor="result5">Polynomial Evaluation result:</label>
        <input
          type="text"
          id="result5"
          name="result5"
          value={polynomialValue || ''}
          readOnly
        />

        <input type="submit" value="Calculate" />
      </form>
    </div>
  );
}

export default PolynomialFunction;