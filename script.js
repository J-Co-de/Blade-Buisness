// ===============================
// Element References
// ===============================
const nav = document.querySelector("nav");
const main = document.querySelector("main");

function setNavOffset() {
  const navHeight = nav.offsetHeight;
  document.documentElement.style.setProperty("--nav-height", `${navHeight}px`);
  console.log(navHeight);
}
setNavOffset();

const viewport = window.visualViewport ?? window;
viewport.addEventListener("resize", () => {
  setNavOffset();
});
