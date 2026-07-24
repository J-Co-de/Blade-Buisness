// ===============================
// Element References
// ===============================
const nav = document.querySelector("nav");
const header = document.querySelector("header");

const getHeroHeight = () => {
  const navHeight = nav.getBoundingClientRect().height;
  header.style.height = `${window.innerHeight - navHeight}px`;
  header.style.marginTop = `${navHeight}px`;
};

function setRealVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

getHeroHeight();
setRealVH();
window.visualViewport.addEventListener("resize", () => {
  getHeroHeight();
  setRealVH();
});
