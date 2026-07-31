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

// Track menu state based on aria-expanded
let isExpanded = hamburger.getAttribute("aria-expanded") === "false";

// ===============================
// Event Listeners
// ===============================
hamburger.addEventListener("click", () => {
  dropDownToggle();

  // Clicking any nav link closes the menu (mobile only)
  if (!navLinks.hidden) {
    navLinks.addEventListener("click", dropDownToggle);
  } else {
    navLinks.removeEventListener("click", dropDownToggle);
  }
});

window.addEventListener("resize", handleNavOrientation);

// ===============================
// Core Functions
// ===============================

// Update CSS variable for nav height
function getNavHeight() {
  document.documentElement.style.setProperty(
    "--nav-height",
    nav.offsetHeight + "px",
  );
}

// Toggle aria-expanded and update state
function toggleHamburgerAriaExpanded() {
  const currentlyExpanded = hamburger.getAttribute("aria-expanded") === "true";
  const newState = !currentlyExpanded;

  hamburger.setAttribute("aria-expanded", newState ? "true" : "false");
  isExpanded = newState;

  console.log("Menu expanded:", isExpanded);
}

// Open/close the dropdown menu
function dropDownToggle() {
  navLinks.hidden = !navLinks.hidden;
  hr.hidden = !hr.hidden;
  navContainer.classList.toggle("nav-col");

  hamburgerOpen.hidden = !hamburgerOpen.hidden;
  hamburgerExit.hidden = !hamburgerExit.hidden;

  getNavHeight();
  toggleHamburgerAriaExpanded();
}

// Handle layout changes on resize
function handleNavOrientation() {
  const portrait = window.innerWidth <= 900;

  if (!portrait) {
    // Desktop mode: menu always visible
    navLinks.hidden = false;
    hr.hidden = true;
    navContainer.classList.remove("nav-col");

    hamburger.setAttribute("aria-expanded", "false");
    isExpanded = false;
    return;
  }

  // Portrait mode: hide menu only if not expanded
  if (!isExpanded) {
    navLinks.hidden = true;
  }
}

// ===============================
// Initial Setup
// ===============================
getNavHeight();
handleNavOrientation();
