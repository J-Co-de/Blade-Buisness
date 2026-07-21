// ===============================
// Element References
// ===============================
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const getHeroHeight = () => {
  const navHeight = nav.getBoundingClientRect().height;
  header.style.height = `${window.innerHeight - navHeight}px`;
  header.style.marginTop = `${navHeight}px`
};
getHeroHeight();
