document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("infi-list"); // Make sure ID matches HTML
  let itemCount = 0;

  function addItems(count) {
    for (let i = 0; i < count; i++) {
      const item = document.createElement("li");
      item.textContent = `Item ${++itemCount}`;
      list.appendChild(item);
    }
  }

  // Initial load
  addItems(10);

  // Infinite scroll logic
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= fullHeight - 10) {
      addItems(2);
    }
  });
});
