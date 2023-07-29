const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const body = document.querySelector("#body");

navToggle.addEventListener("click", function () {
	console.log("click working");
	links.classList.toggle("show-links");
});

// body.style.backgroundColor = red;
