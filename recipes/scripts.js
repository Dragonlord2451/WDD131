// Generate random whole number
function random(num) {
  return Math.floor(Math.random() * num);
}

// Get random recipe from list
function getRandomListEntry(list) {
  return list[random(list.length)];
}

// Generate tags HTML
function tagsTemplate(tags) {
  return tags.map(tag => `<li>${tag}</li>`).join("");
}

// Generate star ratings HTML
function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    html += i <= rating 
      ? `<span aria-hidden="true" class="icon-star">⭐</span>`
      : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
  }
  html += `</span>`;
  return html;
}

// Full recipe template
function recipeTemplate(recipe) {
  return `<figure class="recipe">
    <img src="${recipe.image}" alt="Image of ${recipe.name}" />
    <figcaption>
      <ul class="recipe__tags">
        ${tagsTemplate(recipe.tags)}
      </ul>
      <h2><a href="#">${recipe.name}</a></h2>
      <p class="recipe__ratings">
        ${ratingTemplate(recipe.rating)}
      </p>
      <p class="recipe__description">
        ${recipe.description}
      </p>
    </figcaption>
  </figure>`;
}

// Render recipe list to page
function renderRecipes(recipeList) {
  const output = document.querySelector("#recipes");
  output.innerHTML = recipeList.map(recipeTemplate).join("");
}

// Show one random recipe initially
function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}
init();

// Filter recipes based on search
function filterRecipes(query) {
  return recipes.filter(recipe => {
    const q = query.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(q) ||
      recipe.description.toLowerCase().includes(q) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(q)) ||
      recipe.ingredients.some(ing => ing.toLowerCase().includes(q))
    );
  }).sort((a, b) => a.name.localeCompare(b.name));
}

// Search handler
function searchHandler(e) {
  e.preventDefault();
  const query = document.querySelector("#search-input").value;
  const filtered = filterRecipes(query);
  renderRecipes(filtered);
}

// Event listener for search
document.querySelector("#search-button").addEventListener("click", searchHandler);
