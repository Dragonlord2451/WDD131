const recipes = [
  {
    title: "Spaghetti Bolognese",
    image: "images/spaghetti.jpg",
    rating: 4,
    description: "A classic Italian pasta dish with rich meat sauce."
  },
  {
    title: "Chocolate Cake",
    image: "images/chocolate-cake.jpg",
    rating: 5,
    description: "A moist and rich chocolate cake topped with ganache."
  }
];

function createRecipeCard(recipe) {
  const card = document.createElement("div");
  card.className = "recipe-card";

  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.title}">
    <div class="recipe-content">
      <h2 class="recipe-title">${recipe.title}</h2>
      <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
        ${renderStars(recipe.rating)}
      </span>
      <p class="description">${recipe.description}</p>
    </div>
  `;

  return card;
}

function renderStars(rating) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    stars += `<span aria-hidden="true" class="${i < rating ? "icon-star" : "icon-star-empty"}">${i < rating ? "⭐" : "☆"}</span>`;
  }
  return stars;
}

document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("recipes");
  recipes.forEach(recipe => {
    section.appendChild(createRecipeCard(recipe));
  });
});
