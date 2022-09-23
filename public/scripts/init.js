
const startbtn = document.getElementById('start');
const timeElement = document.getElementsByClassName('time')[0];
const scoreElement=document.getElementsByClassName('score')[0];

function start() {
  console.log("btn");
  addghost();
  let ghostrain=setInterval(addghost, 2500);
  var timer=setInterval(function(){
  let str=timeElement.textContent;
  var time=str.split('s');
  console.log(time);
  time=time[0]-1;
  timeElement.textContent=time+"s";

  if(time==10){
    console.log("color");
    timeElement.style.color=" #e94b48";
    timeElement.classList.add("vibration");
  }
  if(time==4){
    clearInterval(ghostrain);
  }
  if(time==0){
    clearInterval(timer); 
  }
  },1000);

}


startbtn.addEventListener("click", start);

