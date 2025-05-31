const notification = document.querySelector(".notification");
let i = 0;
const intervalId = setInterval(() => {
  i++;
  console.log(i);
  if (i > 5) {
    onIntervalClear();
    notification.classList.add("hidden");
  }
  notification.classList.toggle("show");
}, 1000);

function onIntervalClear() {
  clearInterval(intervalId);
}
