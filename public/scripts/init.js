
const startbtn = document.getElementById('start');
const timeElement = document.getElementsByClassName('time')[0];
const scoreElement=document.getElementsByClassName('score')[0];
function start() {
  console.log("btn");
  addghost();
  setInterval(addghost, 3000);
  timeElement.innerText="0s";

}

startbtn.addEventListener("click", start);

//<p class="score">1/18</p> 