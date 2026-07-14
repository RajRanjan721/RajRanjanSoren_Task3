document.getElementById('convertBtn').addEventListener('click', function() {
    const inputVal = document.getElementById('tempInput').value.trim();
    const fromUnit = document.getElementById('fromUnit').value;
    const resultArea = document.getElementById('resultArea');

    // Validation: Check if empty or not a valid number
    if (inputVal === "" || isNaN(inputVal)) {
        resultArea.innerHTML = `<p class="result-text error">Please enter a valid number!</p>`;
        return;
    }

    const temp = parseFloat(inputVal);
    let c, f, k;

    // Convert input to all standard baselines based on chosen unit
    if (fromUnit === "C") {
        c = temp;
        f = (temp * 9/5) + 32;
        k = temp + 273.15;
    } else if (fromUnit === "F") {
        c = (temp - 32) * 5/9;
        f = temp;
        k = c + 273.15;
    } else if (fromUnit === "K") {
        // Kelvin absolute zero constraint validation
        if (temp < 0) {
            resultArea.innerHTML = `<p class="result-text error">Kelvin cannot be less than 0 K.</p>`;
            return;
        }
        k = temp;
        c = temp - 273.15;
        f = (c * 9/5) + 32;
    }

    // Build the output result elements (rounded to 2 decimal places)
    let outputHTML = `<p style="margin: 0 0 10px 0; color: #555;">Results for <b>${temp}°${fromUnit}</b>:</p>`;
    
    if (fromUnit !== "C") outputHTML += `<p class="result-text">${c.toFixed(2)} °C</p>`;
    if (fromUnit !== "F") outputHTML += `<p class="result-text">${f.toFixed(2)} °F</p>`;
    if (fromUnit !== "K") outputHTML += `<p class="result-text">${k.toFixed(2)} K</p>`;

    resultArea.innerHTML = outputHTML;
});
