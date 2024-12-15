function convertTemperature() {
    // Get input values
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    const output = document.getElementById("output");

    // Validate input
    if (isNaN(temperature)) {
        output.innerHTML = "Please enter a valid number!";
        return;
    }

    // Conversion logic
    let resultCelsius, resultFahrenheit, resultKelvin;

    if (unit === "celsius") {
        resultFahrenheit = (temperature * 9/5) + 32;
        resultKelvin = temperature + 273.15;
        output.innerHTML = `
            ${temperature}°C = ${resultFahrenheit.toFixed(2)}°F <br>
            ${temperature}°C = ${resultKelvin.toFixed(2)}K
        `;
    } else if (unit === "fahrenheit") {
        resultCelsius = (temperature - 32) * 5/9;
        resultKelvin = resultCelsius + 273.15;
        output.innerHTML = `
            ${temperature}°F = ${resultCelsius.toFixed(2)}°C <br>
            ${temperature}°F = ${resultKelvin.toFixed(2)}K
        `;
    } else if (unit === "kelvin") {
        resultCelsius = temperature - 273.15;
        resultFahrenheit = (resultCelsius * 9/5) + 32;
        output.innerHTML = `
            ${temperature}K = ${resultCelsius.toFixed(2)}°C <br>
            ${temperature}K = ${resultFahrenheit.toFixed(2)}°F
        `;
    }
}
