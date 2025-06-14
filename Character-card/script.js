const character = {
  name: "Juno FireBlade",
  class: "Shadow Flame Warrior",
  level: 5,
  health: 100,
  attacked() {
    if (this.health >= 20) {
      this.health -= 20;
      return `${this.name} was attacked and lost 20 health!`;
    } else {
      this.health = 0;
      return `${this.name} has fallen in battle.`;
    }
  },
  levelUp() {
    this.level += 1;
    this.health += 20;
    return `${this.name} leveled up! Now level ${this.level}.`;
  }
};

// DOM Elements
const classSpan = document.getElementById("class");
const levelSpan = document.getElementById("level");
const healthSpan = document.getElementById("health");
const log = document.getElementById("log");

// Update UI function
function updateDisplay(message = "") {
  classSpan.textContent = character.class;
  levelSpan.textContent = character.level;
  healthSpan.textContent = character.health;
  log.textContent = message;
}

// Event listeners
document.getElementById("attacked").addEventListener("click", () => {
  const message = character.attacked();
  updateDisplay(message);
});

document.getElementById("levelup").addEventListener("click", () => {
  const message = character.levelUp();
  updateDisplay(message);
});

// Initial display
updateDisplay();
