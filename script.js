// ===============================
// Element References
// ===============================
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

const getHeroHeight = () => {
  if (!nav || !header) return;
  const navHeight = nav.getBoundingClientRect().height;
  header.style.height = `${window.innerHeight - navHeight}px`;
  header.style.marginTop = `${navHeight}px`;
};

function setRealVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

if (hamburger && links) {
  hamburger.addEventListener("click", () => {
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!isExpanded));
    hamburger.setAttribute("aria-label", isExpanded ? "Open menu" : "Close menu");
    links.classList.toggle("is-open", !isExpanded);
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "Open menu");
    });
  });
}



getHeroHeight();
setRealVH();

const viewport = window.visualViewport ?? window;
viewport.addEventListener("resize", () => {
  getHeroHeight();
  setRealVH();
});
