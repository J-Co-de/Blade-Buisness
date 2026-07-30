// ===============================
// Element References
// ===============================
const hamburger = document.querySelector(".hamburger");
const hamburgerOpen = document.querySelector(".hamburger-open");
const hamburgerExit = document.querySelector(".hamburger-exit");
const navLinks = document.querySelector(".links");
const hr = document.querySelector("nav hr");
const nav = document.querySelector("nav");
const navContainer = document.querySelector(".nav-content");
let droppedDown = navLinks.classList.contains("reveal");

hamburger.addEventListener("click", () => {
  dropDownToggle();
  droppedDown = navLinks.classList.contains("reveal");
  if (droppedDown) {
    navLinks.addEventListener("click", dropDownToggle);
  } else {
    navLinks.removeEventListener("click", dropDownToggle);
  }
});

function getNavHeight() {
  document.documentElement.style.setProperty(
    "--nav-height",
    nav.offsetHeight + "px",
  );
}
function setHamburgerAriaExpanded() {
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", isExpanded ? "false" : "true");
}
function dropDownToggle() {
  navLinks.classList.toggle("reveal");
  hr.classList.toggle("reveal");
  navContainer.classList.toggle("nav-col");
  hamburgerOpen.classList.toggle("reveal");
  hamburgerExit.classList.toggle("reveal");
  getNavHeight();
  setHamburgerAriaExpanded();
}
getNavHeight();
hamburgerOpen.classList.add("reveal");
