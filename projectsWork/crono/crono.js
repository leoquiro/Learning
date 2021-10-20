const timer = document.querySelector('#tempo');
const startButton = document.querySelector('#startButton');
const pauseButton = document.querySelector('#pauseButton');
const resetButton = document.querySelector('#resetButton');

let tempo = 0,
  interval;

function showTime() {
  tempo += 1;
  timer.innerHTML = toStandardTime(tempo);
}

function start() {
  interval = setInterval(showTime, 1000);
  hideButton([startButton]);
  showButton([pauseButton, resetButton]);
}

function pause() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    pauseButton.innerHTML = 'RESUME';
  } else {
    interval = setInterval(showTime, 1000);
    pauseButton.innerHTML = 'PAUSE';
  }
}

function reset() {
  clearInterval(interval);
  interval = null;
  pauseButton.innerHTML = 'PAUSE';
  tempo = 0;
  timer.innerHTML = toStandardTime(tempo);
  hideButton([pauseButton, resetButton]);
  showButton([startButton]);
}

function toStandardTime(tempo) {
  let horas = Math.floor(tempo / 3600);
  let minutos = Math.floor((tempo - horas * 3600) / 60);
  let segundos = tempo - horas * 3600 - minutos * 60;

  horas = `${horas}`.padStart(2, '0');
  minutos = `${minutos}`.padStart(2, '0');
  segundos = `${segundos}`.padStart(2, '0');

  return horas + ':' + minutos + ':' + segundos;
}

function showButton(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'inline-block'));
}
function hideButton(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'none'));
}

