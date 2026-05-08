let counter = document.getElementById("timer");

function start() {
  let num = parseInt(document.getElementById("num").value) || 0;
  let timer = setInterval(() => {
    counter.innerText = num;
    num--;
  
    if (num < 0){
      counter.innerText = "Time's Up!";
      document.getElementById("beep").play();
      document.getElementById("addButton").innerHTML = '<br><button onclick="stopbeep()">Stop</button>';
      clearInterval(timer);
    }
  }, 1000);
}

function convert() {
  let h = parseInt(document.getElementById("h").value) || 0;
  let m = parseInt(document.getElementById("m").value) || 0;
  let totalSec = h * 3600 + m * 60;
  document.getElementById("showsec").innerText = totalSec;
}

function stopbeep() {
  document.getElementById("beep").pause();
}
