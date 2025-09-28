function calculateWindChill(tempF, speedMph) {
  return Math.round(
    35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedMph, 0.16) + 0.4275 * tempF * Math.pow(speedMph, 0.16)
  );
}

// Static values (you can adjust later)
const temp = parseFloat(document.getElementById("temperature").textContent);
const wind = parseFloat(document.getElementById("wind-speed").textContent);

if (temp <= 50 && wind > 3) {
  document.getElementById("wind-chill").textContent = `${calculateWindChill(temp, wind)}°F`;
} else {
  document.getElementById("wind-chill").textContent = "N/A";

}  

const year = new Date().getFullYear();

document.getElementById("currentYear").textContent = `© ${year}`;

const last = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modified: ${last}`;