//your code here!

const list = document.getElementById("infinite-list");

let itemCount = 0;

// Function to add list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const item = document.createElement("li");
    item.textContent = `Item ${++itemCount}`;
    list.appendChild(item);
  }
}

// Initial load
addItems(10);

// Scroll Event Listener
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  // Check if we've reached near the bottom
  if (scrollTop + windowHeight >= fullHeight - 10) {
    addItems(2);
  }
});
