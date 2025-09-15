const year = new Date().getFullYear();

document.getElementById("currentYear").textContent = `© ${year}`;

const last = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modified: ${last}`;