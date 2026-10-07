const DELIVERY_FEE = 50;

const charms = [
  { name: "Plain Heart", category: "Plain", price: 40, icon: "♡" },
  { name: "Plain Star", category: "Plain", price: 40, icon: "☆" },

  { name: "Concave Heart", category: "Concave", price: 50, icon: "♥" },
  { name: "Concave Flower", category: "Concave", price: 50, icon: "✿" },

  { name: "Embossed Sun", category: "Embossed", price: 60, icon: "☼" },
  { name: "Embossed Butterfly", category: "Embossed", price: 60, icon: "🦋" },

  { name: "Pink Flower", category: "Art", price: 140, icon: "🌸" },
  { name: "Cherry", category: "Art", price: 140, icon: "🍒" },
  { name: "Ribbon", category: "Art", price: 140, icon: "🎀" },

  { name: "Crown", category: "Special", price: 150, icon: "♛" },
  { name: "Sparkle", category: "Special", price: 150, icon: "✦" },

  { name: "Dangling Heart", category: "Dangling", price: 150, icon: "💗" },
  { name: "Dangling Star", category: "Dangling", price: 150, icon: "⭐" },

  { name: "Twin Love", category: "Twin", price: 180, icon: "💕" },

  { name: "Watch Face", category: "Watch Face", price: 450, icon: "⌚" }
];

let braceletSize = 16;
let bracelet = Array(braceletSize).fill(null);
let selectedSlot = 0;
let activeCategory = "All";

const braceletEl = document.getElementById("bracelet");
const charmGrid = document.getElementById("charmGrid");
const categoryTabs = document.getElementById("categoryTabs");

function peso(amount) {
  return "₱" + amount.toLocaleString();
}

function renderBracelet() {
  braceletEl.innerHTML = "";

  bracelet.forEach((charm, index) => {
    const slot = document.createElement("div");

    slot.className =
      "slot " +
      (charm ? "filled" : "empty") +
      (index === selectedSlot ? " selected" : "");

    if (charm) {
      slot.innerHTML = `
        <span class="icon">${charm.icon}</span>
        <span class="mini-name">${charm.name}</span>
      `;
    }

    slot.onclick = () => {
      selectedSlot = index;
      renderBracelet();
    };

    slot.ondblclick = () => {
      bracelet[index] = null;
      updateEverything();
    };

    braceletEl.appendChild(slot);
  });
}

function addCharm(charm) {
  if (bracelet[selectedSlot]) {
    const empty = bracelet.findIndex(item => item === null);

    if (empty === -1) {
      alert("Your bracelet is full.");
      return;
    }

    selectedSlot = empty;
  }

  bracelet[selectedSlot] = charm;

  const nextEmpty = bracelet.findIndex(
    (item, index) => item === null && index > selectedSlot
  );

  if (nextEmpty !== -1) {
    selectedSlot = nextEmpty;
  }

  updateEverything();
}

function renderCategories() {
  const categories = [
    "All",
    ...new Set(charms.map(charm => charm.category))
  ];

  categoryTabs.innerHTML = "";

  categories.forEach(category => {
    const button = document.createElement("button");

    button.textContent = category;

    if (category === activeCategory) {
      button.classList.add("active");
    }

    button.onclick = () => {
      activeCategory = category;
      renderCategories();
      renderCharms();
    };

    categoryTabs.appendChild(button);
  });
}

function renderCharms() {
  charmGrid.innerHTML = "";

  const filtered =
    activeCategory === "All"
      ? charms
      : charms.filter(charm => charm.category === activeCategory);

  filtered.forEach(charm => {
    const card = document.createElement("button");

    card.className = "charm-card";

    card.innerHTML = `
      <div class="charm-visual">${charm.icon}</div>
      <strong>${charm.name}</strong>
      <span>${charm.category} • ${peso(charm.price)}</span>
    `;

    card.onclick = () => addCharm(charm);

    charmGrid.appendChild(card);
  });
}

function updatePrice() {
  const selected = bracelet.filter(Boolean);

  const total = selected.reduce(
    (sum, charm) => sum + charm.price,
    0
  );

  document.getElementById("selectedCount").textContent =
    `${selected.length} / ${braceletSize}`;

  document.getElementById("charmTotal").textContent =
    peso(total);

  document.getElementById("grandTotal").textContent =
    peso(total + DELIVERY_FEE);
}

function updateEverything() {
  renderBracelet();
  updatePrice();
}

document.querySelectorAll("#sizePicker button").forEach(button => {
  button.onclick = () => {
    document
      .querySelectorAll("#sizePicker button")
      .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    const newSize = Number(button.dataset.size);

    if (newSize > braceletSize) {
      bracelet = bracelet.concat(
        Array(newSize - braceletSize).fill(null)
      );
    } else {
      bracelet = bracelet.slice(0, newSize);
    }

    braceletSize = newSize;
    selectedSlot = 0;

    updateEverything();
  };
});

document.getElementById("clearBtn").onclick = () => {
  bracelet = Array(braceletSize).fill(null);
  selectedSlot = 0;
  updateEverything();
};

renderCategories();
renderCharms();
updateEverything();
