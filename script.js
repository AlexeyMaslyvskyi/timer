const refs = {
  timer: document.getElementById("timer"),
  // stopBtn: document.getElementById("stopBtn"),
};

const countDownDate = new Date(`Jan 1 , ${new Date().getFullYear() + 1}`);
// refs.stopBtn.addEventListener("click", stopTimer);

countDownTimeToNY();
let timerId = setInterval(countDownTimeToNY, 1000);

function countDownTimeToNY() {
  const now = new Date();
  const diff = countDownDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  refs.timer.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}
// function stopTimer() {
//   alert("stopp");
//   clearInterval(timerId);
// }
