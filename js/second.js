const refs = {
  fEl: document.querySelector(".first-el"),
  sEl: document.querySelector(".second-el"),
  tEl: document.querySelector(".third-el"),
};

refs.fEl.addEventListener("click", () => {
  setInterval(() => {
    refs.fEl.style.backgroundColor = `red`;
  }, 3000);
});
refs.sEl.addEventListener("click", () => {
  setInterval(() => {
    refs.sEl.style.width = 500 + "px";
    refs.sEl.style.height = 700 + "px";
  }, 3000);
});
