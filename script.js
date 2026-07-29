// ===============================
// Element References
// ===============================
const hamburger = document.querySelector(".hamburger");
const hamburgerOpen = document.querySelector(".hamburger-open");
const hamburgerExit = document.querySelector(".hamburger-exit");
const links = document.querySelector(".links");
const hr = document.querySelector("nav hr");
const nav = document.querySelector("nav");
const navContainer = document.querySelector(".nav-content");
hamburger.addEventListener("click", () => {
  links.classList.toggle("reveal");
  hr.classList.toggle("reveal");
  navContainer.classList.toggle("nav-col");
  hamburgerOpen.classList.toggle("reveal");
  hamburgerExit.classList.toggle("reveal");
});
hamburgerOpen.classList.add("reveal");
console.log(hamburgerOpen);

function getNavHeight() {
  document.documentElement.style.setProperty(
    "--nav-height",
    nav.offsetHeight + "px",
  );
}
getNavHeight();
