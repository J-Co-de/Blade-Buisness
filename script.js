// ===============================
// Element References
// ===============================
const nav = document.querySelector(".navbar");
const header = document.querySelector("header");
const arrowObject = document.querySelector(".arrow-object");
const getHeroHeight = () =>
  header.style.height = `${window.innerHeight - nav.getBoundingClientRect().height}px`;
getHeroHeight();
const getArrowHeight = () => {
    arrowObject.style.height = `${nav.getBoundingClientRect().height}px`;
}
getArrowHeight();