const menuBtn = document.querySelector(".btn-menu");
const menuList = document.querySelector(".menu-list");

menuBtn.addEventListener("click", function () {
  menuList.classList.toggle("show");
});

menuList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    menuList.classList.remove("show");
  }
});

document.addEventListener("click", function (event) {
  if (!menuBtn.contains(event.target) && !menuList.contains(event.target)) {
    menuList.classList.remove("show");
  }
});
