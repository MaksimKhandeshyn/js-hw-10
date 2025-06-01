const input = document.querySelector(".input-text");
const btn = document.querySelector(".start-btn");
const time = document.querySelector(".time");

btn.addEventListener("click", () => {
  time.innerHTML = input.value;
  setInterval(() => {
    if (input.value > 0) {
      input.value--;
      time.innerHTML = input.value;
    } else {
      time.innerHTML = "Time's up!";
      clearInterval(this);
    }
  }, 1000);
});
