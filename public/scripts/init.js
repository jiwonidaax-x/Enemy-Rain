const startbtn = document.getElementById("start");
const timeElement = document.getElementsByClassName("time")[0];
const scoreElement = document.getElementsByClassName("score")[0];

function start() {
  console.log("btn");
  console.log(heart);
  addghost();
  let ghostrain = setInterval(addghost, 2000);
  var timer = setInterval(function () {
    let str = timeElement.textContent;
    var time = str.split("s");
    console.log(time);
    time = time[0] - 1;
    timeElement.textContent = time + "s";
    console.log(heart);
    if (heart == -1) {
      console.log("incondition");
      clearInterval(timer);
      clearInterval(ghostrain);
      console.log("totalscore");
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

startbtn.addEventListener("click", start);

const background=document.getElementById('bg');

function totalscore(){
  if(!confirm("======END====== \n TOTAL SCORE: \n 다시 하시겠습니까?"))
  {
    var link = '/';
     location.href=link;
    location.replace(link);
    //window.open(link);

  //if no
  }else{
  //if yes
  var link = '/game';
   location.href=link;
  location.replace(link);
  }

}
function gameover(){
  //black background--transparency 넣기
  // replay
 if(! confirm("GAME OVER! \n 다시 하시겠습니까?")){
  var link = '/';
   location.href=link;
  location.replace(link);
  //window.open(link);
   //if no
 }else{
  //if yes
  var link = '/game';
   location.href=link;
  location.replace(link);
 }
}
