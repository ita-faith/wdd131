// Update the year and last modified date in the footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(1) + "°C";
    } else {
        return "N/A";
    }
}

// Static values for temperature and wind speed
const temperature = 25;
const windSpeed = 10;

// Set the wind chill value
document.getElementById("windChill").textContent = calculateWindChill(
    temperature,
    windSpeed
);
