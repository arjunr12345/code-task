import { useState } from 'react';
import './PolynomialFunction.css'

document.getElementById("poly").addEventListener("submit", (event) => {
    event.preventDefault();

    const coefficients = document.getElementById("ce").value.split(" ").map(Number);
    const exponents = document.getElementById("ex").value.split(" ").map(Number);
    const x = parseFloat(document.getElementById("x").value);

    if (coefficients.length !== exponents.length) {
        document.getElementById("result4").value = "Error: Mismatched coefficients and exponents";
        return;
    }

    let polynomialString = "";
    let polynomialValue = 0;

    for (let i = 0; i < coefficients.length; i++) {
        let coef = coefficients[i];
        let exp = exponents[i];

        if (i > 0 && coef >= 0) polynomialString += " + ";
        polynomialString += `${coef}x^${exp}`;

        polynomialValue += coef * Math.pow(x, exp);
    }

    document.getElementById("result4").value = polynomialString;
    document.getElementById("result5").value = polynomialValue.toFixed(4); // Rounded to 4 decimal places
});

return (
    <div class="box4">
        <h1>Polynomial</h1>
        <form id="poly">
            <label for="ce">Coefficients:</label>
            <input type="number" id="ce" name="ce" required />
            <label for="ex">Exponents:</label>
            <input type="number" id="ex" name="ex" required />
            <label for="x">x value:</label>
            <input type="number" id="x" name="x" required />
            <label for="result4">Polynomial Function result:</label>
            <input type="text" id="result4" name="result4" />
            <label for="result5">Polynomial Evaluation result:</label>
            <input type="text" id="result5" name="result5" />
            <input type="submit" value="Calculate" />
        </form>
    </div>
)

export default PolynomialFunction;