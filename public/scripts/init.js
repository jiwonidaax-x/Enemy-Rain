

const startbtn = document.getElementById('start');

function start() {
  console.log("btn");
  addghost();
  setInterval(addghost, 3000);
}

startbtn.addEventListener("click", start);
