// ===============================
// Element References
// ===============================
const nav = document.querySelector(".navbar");
const header = document.querySelector("header");

const getHeroHeight= () => header.style.height = `${window.innerHeight - nav.getBoundingClientRect().height}px`;
getHeroHeight();