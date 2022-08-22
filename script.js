let scoreHomeEl = document.getElementById("score-home");
let scoreGuestEl = document.getElementById("score-guest");
let secondsEl = document.getElementById("seconds");
let minutesEl = document.getElementById("minutes");
let scoreHome = 0,
  scoreGuest = 0,
  seconds = 0,
  minutes = 0;
scoreHomeEl.textContent = scoreHome;
scoreGuestEl.textContent = scoreGuest;
secondsEl.textContent = seconds;
minutesEl.textContent = minutes;

function home(num) {
  scoreHome += num;
  scoreHomeEl.textContent = scoreHome;
}

function guest(num) {
  scoreGuest += num;
  scoreGuestEl.textContent = scoreGuest;
}

function newGame() {
  scoreGuest = 0;
  scoreHome = 0;
  seconds = 0;
  minutes = 0;
  sec = 0;
  min = 0;
  scoreHomeEl.textContent = scoreHome;
  scoreGuestEl.textContent = scoreGuest;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}



// for (let i = 0; i < 600; i++) {
//   task(i);
// }
// function task(i) {
//   setTimeout(function() {
//     seconds += 1;
//     if (seconds == 59) {
//       seconds = 0;
//       minutes += 1;
//       minutesEl.textContent = minutes;
//     }
//     secondsEl.textContent = seconds;
//   }, 1000 * i);
// }

// function incrementTime() {
//   seconds += 1;
//   secondsEl.textContent = seconds;
// }


let min = 0,
  sec = 0;

function incTime() {
  sec++;
  if (sec === 60) {
    min++;
    sec = 0;
  }
  secondsEl.textContent = sec;
  minutesEl.textContent = min;
}

let repeat = setInterval(incTime, 1000);
