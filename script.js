function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});

moveRandom.addEventListener("click", function (e) {
  // Deselect or reset position instantly on click
  moveRandom.style.position = "static"; // Reset position
  moveRandom.style.transform = "translate(0, 0)"; // Reset transform (if necessary)
});
