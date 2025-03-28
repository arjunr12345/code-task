import { useState } from 'react';
import './AmbiguousCase.css';

function ambiguous() {
    const a = document.getElementById("Aa").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const am = c * Math.sin(a * Math.PI / 180);

    function ambiguouscase(event) {
    if (a <= 90) {
        if (b < am) {
            document.getElementById("result-2").value = "No triangle";
        } else if (b == am) {
            document.getElementById("result-2").value = "Right triangle";
        } else if (b > am) {
            document.getElementById("result-2").value = "one triangle";
        } else if (am < b && b < c) {
            document.getElementById("result-2").value = "Two triangles (ambiguous case)";
        }
    } else {
        if (b < c || b == c) {
            document.getElementById("result-2").value = "No Triangle";
        }
        else if (b > c) {
            document.getElementById("result-2").value = "one triangle";
        }
    }
    //document.getElementById("result-2").value = "error";

  }
}


  return (
    <div class="box2">
    <h1>Ambiguous case</h1>
    <form id="ambiguous">
        <label for="Aa">Angle A:</label>
        <input type="number" id="Aa" name="Aa" required />
        <label for="sa">Side A:</label>
        <input type="number" id="b" name="b" required />
        <label for="sb">Side B:</label>
        <input type="number" id="c" name="c" required />
        <label for="result">Result:</label>
        <input type="text" id="result-2" name="result" />
        <input type="submit" value="Calculate" />
    </form>
</div>
  );


export default AmbiguousCase;
