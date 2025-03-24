import { useState } from 'react';
import './NewtonsMethod.css'

document.getElementById("new-mod").addEventListener("submit", (event) => {
    event.preventDefault();

    let x = parseFloat(document.getElementById("r").value);
    let tolerance = 1e-6;
    let maxIterations = 100;
    let iteration = 0;

    function f(x) {
        return 6 * Math.pow(x, 4) - 13 * Math.pow(x, 3) - 18 * Math.pow(x, 2) + 7 * x + 6;
    }

    function fPrime(x) {
        return 24 * Math.pow(x, 3) - 39 * Math.pow(x, 2) - 36 * x + 7;
    }

    console.log(`Starting Newton’s Method at x = ${x}`);

    while (iteration < maxIterations) {
        let fx = f(x);
        let fpx = fPrime(x);

        if (Math.abs(fpx) < tolerance) {
            document.getElementById("result3").value = "Derivative near zero! No valid root.";
            return;
        }

        let nextX = x - fx / fpx;

        console.log(`Iteration ${iteration}: x = ${nextX}`);

        if (Math.abs(nextX - x) < tolerance) {
            document.getElementById("result3").value = `Root: ${nextX.toFixed(6)}`;
            return;
        }

        x = nextX;
        iteration++;
    }

    document.getElementById("result3").value = "Did not converge.";
});

return (
    <div class="box3">
        <h1>Newton's method</h1>
        <form id="new-mod">
            <label for="r">Root guess:</label>
            <input type="number" id="r" name="r" required />
            <label for="result3">Result:</label>
            <input type="text" id="result3" name="result3" />
            <input type="submit" value="Calculate" />
        </form>
    </div>
)

export default NewtonsMethod;