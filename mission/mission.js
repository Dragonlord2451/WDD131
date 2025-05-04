// mission.js

const themeSelector = document.getElementById('theme-selector');
const body = document.body;

function changeTheme() {
  const selectedTheme = themeSelector.value;

  if (selectedTheme === 'dark') {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
}

themeSelector.addEventListener('change', changeTheme);

// Set to light theme on initial load
body.classList.remove('dark');
