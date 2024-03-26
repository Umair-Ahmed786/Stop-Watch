let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function start() {
  if (!isRunning) {
    timer = setInterval(updateDisplay, 1000);
    isRunning = true;
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("reset").disabled = false;
  }
}

function stop() {
  clearInterval(timer);
  isRunning = false;
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
  document.getElementById("reset").disabled = false;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  resetDisplay();
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = false;
  document.getElementById("reset").disabled = false;
}
function resetDisplay() {
  seconds = 0;
  minutes = 0;
  hours = 0;
  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  document.getElementById("display").innerHTML = formattedTime;
}
function updateDisplay() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  document.getElementById("display").innerHTML = formattedTime;
}

function pad(value) {
  return value < 10 ? `0${value}` : value;
}
