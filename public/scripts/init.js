const startbtn = document.getElementById("start");
const timeElement = document.getElementsByClassName("time")[0];
const scoreElement = document.getElementsByClassName("score")[0];
const background = document.getElementById("bg");

startbtn.addEventListener("click", start);

function start() {
  addghost();
  let ghostrain = setInterval(addghost, 1400);
  var timer = setInterval(function () {
    let str = timeElement.textContent;
    var time = str.split("s");
    console.log(time);
    time = time[0] - 1;
    timeElement.textContent = time + "s";
    console.log(heart);
    if (heart == -1) {
      clearInterval(timer);
      clearInterval(ghostrain);
      gameover();
    }
    if (time == 10) {
      console.log("color");
      timeElement.style.color = " #e94b48";
      timeElement.classList.add("vibration");
    }
    if (time == 4) {
      clearInterval(ghostrain);
    }
    if (time == -1) {
      clearInterval(timer);
      totalscore();
    }
  }, 1000);
}

function totalscore() {
  if (
    !confirm(
      `======END====== \n\n TOTAL SCORE: ${score * 100}\n 다시 하시겠습니까?`
    )
  ) {
    var link = "/";
    location.href = link;
    location.replace(link);
  } else {
    var link = "/game";
    location.href = link;
    location.replace(link);
  }
}

function gameover() {
  if (!confirm("GAME OVER! \n 다시 하시겠습니까?")) {
    var link = "/";
    location.href = link;
    location.replace(link);
  } else {
    var link = "/game";
    location.href = link;
    location.replace(link);
  }
}
