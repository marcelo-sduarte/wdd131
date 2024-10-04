// last modified

const lastModif = new Date();
document.querySelector('#lastModified').textContent = lastModif.toLocaleString('pt-BR').replace(',', '');

// Static values for temperature and wind speed
const temperature = 43; // in degrees Fahrenheit
const windSpeed = 10; // in mph

// Function to calculate wind chill
function calculateWindChill(temp, speed) {
    // Return the wind chill factor based on the formula
    /*return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16));*/

    return Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));
}

// Function to display wind chill
function displayWindChill() {
    let windChill;
    
    // Check conditions for viable wind chill calculations
    if (temperature <= 50 && windSpeed > 3) {
        windChill = calculateWindChill(temperature, windSpeed);
    } else {
        windChill = "N/A";
    }

    // Display the result in the weather section
    document.getElementById("wind-chill").textContent = `Wind Chill: ${windChill}`;

    document.getElementById("temperature").textContent = `${temperature} F`;
}

// Call displayWindChill when the page loads
window.onload = displayWindChill;
