const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Lone Mountain Nevada Temple",
    location: "Las Vegas, Nevada",
    dedicated: "2025, September, 25",
    area: 70194,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/lone-mountain-nevada-temple/lone-mountain-nevada-temple-45434-main.jpg"
  },
  {
    templeName: "Port-Au-Prince Haiti Temple",
    location: "Petion-Ville, Haiti",
    dedicated: "2019, September, 1",
    area: 10396,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/port-au-prince-haiti-temple/port-au-prince-haiti-temple-6222-main.jpg"
  },
    {
    templeName: "Brasília Brazil Temple",
    location: "Brasília, Brazil",
    dedicated: "2023, September, 17",
    area: 25000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
  },
];

const container = document.getElementById("temples");

temples.forEach(temple => {
  const card = document.createElement("div");
  card.classList.add("temple-card");

  const name = document.createElement("h2");
  name.textContent = temple.templeName;

  const location = document.createElement("p");
  location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

  const dedication = document.createElement("p");
  dedication.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

  const area = document.createElement("p");
  area.innerHTML = `<strong>Area:</strong> ${temple.area} sq ft`;

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy"; 

  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedication);
  card.appendChild(area);
  card.appendChild(img);

  container.appendChild(card);
});

const templesContainer = document.querySelector("#temples");

function displayTemples(filteredTemples) {
  templesContainer.innerHTML = "";
  filteredTemples.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area} sq ft</p>
    <img src="${temple.imageUrl}" alt = "${temple.templeName}" loading = "lazy">
  `;
  templesContainer.appendChild(card);
  });
}

displayTemples(temples);

function filterTemples(criteria) {
  let filtered = [];

  switch (criteria) {
    case "old":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
    break;
    case "new":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
    break;
    case "large":
      filtered = temples.filter(t => t.area > 9000);
    break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
    break;
    default:
      filtered = temples;
  }
  displayTemples(filtered);
}

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const criteria = event.target.textContent.toLowerCase();
      filterTemples(criteria);
    });
});

const year = new Date().getFullYear();

document.getElementById("currentYear").textContent = `© ${year}`;

const last = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modified: ${last}`;