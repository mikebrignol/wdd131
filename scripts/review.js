let reviewCount = localStorage.getItem("reviewCount");


if (!reviewCount) {
  reviewCount = 0;
}


reviewCount++;
localStorage.setItem("reviewCount", reviewCount);


document.querySelector("#counter").textContent = 
  `You have submitted ${reviewCount} review(s).`;