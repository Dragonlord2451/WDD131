function newTask() {
    // Get the list element
    const listElement = document.querySelector('#todoList');
    // Get the input value
    const task = document.querySelector('#todo').value;
  
    // Don't add empty tasks
    if (!task.trim()) return;
  
    // Render the task
    listElement.innerHTML += `
      <li>
        <p>${task}</p>
        <div>
          <span data-function="delete">❎</span>
          <span data-function="complete">✅</span>
        </div>
      </li>
    `;
  
    // Clear input after adding
    document.querySelector('#todo').value = '';
  }
  
  function manageTasks(e) {
    const parent = e.target.closest("li");
    if (!parent) return;
  
    // Check the clicked icon's data-function attribute
    const action = e.target.getAttribute("data-function");
  
    if (action === "delete") {
      parent.remove();
    }
  
    if (action === "complete") {
      parent.classList.toggle("strike");
    }
  }
  
  // Add event listeners
  document.querySelector('#submitTask').addEventListener('click', newTask);
  document.querySelector('#todoList').addEventListener('click', manageTasks);
  