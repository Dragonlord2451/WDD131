console.log("Coolpics.js loaded");

// Menu toggle functionality
const menuButton = document.getElementById("menuButton");
const nav = document.querySelector("nav");

function toggleMenu() {
  nav.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

// Handle window resize
function handleResize() {
  if (window.innerWidth > 1000) {
    nav.classList.remove("hide");
  } else {
    nav.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

// Modal viewer functionality
const gallery = document.querySelector(".gallery");

// Create a dialog element dynamically
const modal = document.createElement("dialog");
modal.classList.add("image-viewer");
document.body.appendChild(modal);

gallery.addEventListener("click", (event) => {
  const clickedImg = event.target.closest("img");
  if (!clickedImg) return;

  const src = clickedImg.getAttribute("src");
  const alt = clickedImg.getAttribute("alt");
  const base = src.split("-")[0];
  const largeSrc = base + "-full.jpeg";

  modal.innerHTML = `
    <img src="${largeSrc}" alt="${alt}">
    <button class="close-viewer">X</button>
  `;
  modal.showModal();
});

// Close modal on button or background click
modal.addEventListener("click", (event) => {
  if (event.target.classList.contains("close-viewer") || event.target === modal) {
    modal.close();
  }
});

