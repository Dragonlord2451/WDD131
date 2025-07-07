const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

// Helper to render lists
function renderList(elementId, items) {
  const ul = document.getElementById(elementId);
  ul.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

// Activity 1: Sorting
const simpleSort = [...simpleList].sort();
renderList("simpleSort", simpleSort);

function compareFn(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}
const anotherSort = [...simpleList].sort(compareFn);
renderList("anotherSort", anotherSort);


// Activity 2: Filtering
function searchListStrings(list, query) {
  return list.filter(item => item.toLowerCase().includes(query.toLowerCase()));
}
renderList("filterB", searchListStrings(simpleList, "b"));
renderList("filterAn", searchListStrings(simpleList, "an"));


// Hikes Array
const hikes = [
  { name: "Bechler Falls", stub: "bechler_falls", distance: "3 miles", tags: ["Easy", "Yellowstone", "Waterfall"], description: "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls" },
  { name: "Teton Canyon", stub: "teton_canyon", distance: "3 miles", tags: ["Easy", "Tetons"], description: "Beautiful short (or long) hike through Teton Canyon." },
  { name: "Denanda Falls", stub: "denanda_falls", distance: "7 miles", tags: ["Moderate", "Yellowstone", "Waterfall"], description: "Beautiful hike through Bechler meadows to Denanda Falls" },
  { name: "Coffee Pot Rapids", stub: "coffee_pot", distance: "2.2 miles", tags: ["Easy"], description: "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids." },
  { name: "Menan Butte", stub: "menan_butte", distance: "3.4 miles", tags: ["Moderate", "View"], description: "A steep climb to one of the largest volcanic tuff cones in the world." }
];

function searchListHikes(list, query) {
  const filtered = list.filter(hike =>
    hike.name.toLowerCase().includes(query.toLowerCase()) ||
    hike.description.toLowerCase().includes(query.toLowerCase()) ||
    hike.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );

  return filtered.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
}

function renderHikeList(elementId, hikes) {
  const ul = document.getElementById(elementId);
  ul.innerHTML = "";
  hikes.forEach(hike => {
    const li = document.createElement("li");
    li.textContent = `${hike.name} - ${hike.distance} - Tags: ${hike.tags.join(", ")}`;
    ul.appendChild(li);
  });
}

renderHikeList("searchYellowstone", searchListHikes(hikes, "yellowstone"));
renderHikeList("searchModerate", searchListHikes(hikes, "moderate"));
renderHikeList("searchAl", searchListHikes(hikes, "al"));
