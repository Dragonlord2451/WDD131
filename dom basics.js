const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);
// Step 4: Create a new section
const newSection = document.createElement("section");

// Create and add an h2 element
const newHeading = document.createElement("h2");
newHeading.innerText = "DOM Basics";
newSection.appendChild(newHeading);

// Create and add a paragraph
const newPara = document.createElement("p");
newPara.innerText = "This was added through Javascript";
newSection.appendChild(newPara);

// Add the new section to the body
document.body.appendChild(newSection);
