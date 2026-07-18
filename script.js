// ===============================
// Element References
// ===============================
const nav = document.querySelector(".navbar");
const hero = document.getElementById("hero");

const getHeroHeight= () => hero.style.height = `${window.innerHeight - nav.getBoundingClientRect().height}px`;
getHeroHeight();