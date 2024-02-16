const btn = document.getElementById("toggleMenu");
const list = document.querySelector(".list");

btn.addEventListener("click", function () {
  list.classList.toggle("hidden");
});
