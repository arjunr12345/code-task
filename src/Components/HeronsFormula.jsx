import { useState } from 'react';
import './HeronsFormula.css'

document.getElementById("heron").addEventListener("submit", (event) => {
  event.preventDefault();
  
  const a = document.getElementById("av").value;
  const b = document.getElementById("bv").value;
  const c = document.getElementById("cv").value;
  const area = (1 / 4) * Math.sqrt(((4 * Math.pow(a, 2)) * Math.pow(b, 2)) - Math.pow((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)), 2));

  document.getElementById("result6").value = area;
});

return (
  <div class="box5">
        <h1>Heron's Formula</h1>
        <form id="heron">
            <label for="a">Side a:</label>
            <input type="number" id="av" name="av" required />
            <label for="b">Side b:</label>
            <input type="number" id="bv" name="bv" required />
            <label for="c">Side c:</label>
            <input type="number" id="cv" name="cv" required />
            <label for="result6">Result:</label>
            <input type="text" id="result6" name="result6" />
            <input type="submit" value="Calculate" />
        </form>
    </div>
)

export default HeronsFormula;