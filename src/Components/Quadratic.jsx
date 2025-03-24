import { useState } from 'react';
import './Quadratic.css'

document.getElementById("quad-form").addEventListener('submit', (event) => {
    event.preventDefault();
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        document.getElementById("result").value = "No Roots";
    } else if (discriminant > 0) {
        const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
        const rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById("result").value = `x1=${rootOne}, x2=${rootTwo}`;
    } else {
        const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
        document.getElementById("result").value = `x=${rootOne}`;
    }
}
);

return (
    <div className="box1">
        <h1>Quadratic Formula</h1>
        <form id="quad-form">
            <label for="a">a value:</label>
            <input type="number" id="a" name="a" required />
            <label for="b">b value:</label>
            <input type="number" id="b" name="b" required />
            <label for="c">c value:</label>
            <input type="number" id="c" name="c" required />
            <label for="result">Result:</label>
            <input type="text" id="result" name="result" />
            <input type="submit" value="Calculate" />
        </form>
    </div>
)

export default Quadratic;