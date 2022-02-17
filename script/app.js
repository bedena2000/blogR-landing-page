// Aside Menu

const textW1 = document.querySelector(".text-w-1");
const textW2 = document.querySelector(".text-w-2");
const textW3 = document.querySelector(".text-w-3");

textW1.addEventListener("click", (event) => {
  const asideWrapper = document.querySelector(".aside-1");
  asideWrapper.classList.toggle("show");
});

textW2.addEventListener("click", (event) => {
  const asideWrapper = document.querySelector(".aside-2");
  asideWrapper.classList.toggle("show");
});

textW3.addEventListener("click", (event) => {
  const asideWrapper = document.querySelector(".aside-3");
  asideWrapper.classList.toggle("show");
});

// Burger Menu

const burgerMenu = document.querySelector(".header-burger-menu");
burgerMenu.addEventListener("click", (event) => {
  const asideMenu = document.querySelector(".aside-menu");
  asideMenu.classList.toggle("show");
});