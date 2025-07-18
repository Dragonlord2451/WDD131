const champions = [
  {
    name: "Ahri",
    role: "Mage",
    skills: {
      Q: { name: "Orb of Deception", description: "Throws an orb that deals magic damage out and true damage back." },
      W: { name: "Fox-Fire", description: "Releases three fox-fires that seek nearby enemies." },
      E: { name: "Charm", description: "Blows a kiss that charms and damages an enemy." },
      R: { name: "Spirit Rush", description: "Dashes forward and fires essence bolts at nearby enemies." }
    }
  },
  {
    name: "Lee Sin",
    role: "Jungle",
    skills: {
      Q: { name: "Sonic Wave / Resonating Strike", description: "Reveals and damages a target, can dash to them." },
      W: { name: "Safeguard / Iron Will", description: "Dashes to an ally or ward, grants shield and lifesteal." },
      E: { name: "Tempest / Cripple", description: "AoE damage that slows nearby enemies." },
      R: { name: "Dragon's Rage", description: "Kicks a target, dealing damage and knocking back enemies." }
    }
  },
  {
    name: "Lux",
    role: "Support",
    skills: {
      Q: { name: "Light Binding", description: "Roots and damages two enemies in a line." },
      W: { name: "Prismatic Barrier", description: "Throws her wand to shield allies." },
      E: { name: "Lucent Singularity", description: "Slows and damages enemies in an AoE." },
      R: { name: "Final Spark", description: "A long-range beam that deals burst damage." }
    }
  }
];

function displayChampions(champArray) {
  const skillList = document.getElementById('skillList');
  skillList.innerHTML = "";

  champArray.forEach(champ => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
      <h2>${champ.name} <span style="font-size: 0.8em; color: gray;">(${champ.role})</span></h2>
      <ul>
        <li><strong>Q - ${champ.skills.Q.name}:</strong> ${champ.skills.Q.description}</li>
        <li><strong>W - ${champ.skills.W.name}:</strong> ${champ.skills.W.description}</li>
        <li><strong>E - ${champ.skills.E.name}:</strong> ${champ.skills.E.description}</li>
        <li><strong>R - ${champ.skills.R.name}:</strong> ${champ.skills.R.description}</li>
      </ul>
    `;
    skillList.appendChild(card);
  });
}

document.getElementById("searchBar").addEventListener("input", function (e) {
  const keyword = e.target.value.toLowerCase();
  const filtered = champions.filter(c =>
    c.name.toLowerCase().includes(keyword)
  );
  displayChampions(filtered);
});

displayChampions(champions); 


