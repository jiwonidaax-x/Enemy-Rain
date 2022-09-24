const heroElement = document.getElementById("hero");

strToNum = (str) => {
  var num = "";
  for (let i = 0; i < str.length; i++) {
    if (isNaN(Number(str[i])) == false) {
      num += String(str[i]);
    }
  }
  var leftval = Number(num);
  return leftval;
};
document.addEventListener("keydown", function (e) {
  //
  const left = getComputedStyle(heroElement).left;
  var leftval = strToNum(left);
  if (e.keyCode === 37 && leftval > 0) {
    heroElement.className = "left";
    //
    heroElement.style.left = leftval - 10 + "px";
  } else if (e.keyCode === 39 && leftval < 765) {
    heroElement.className = "right";
    heroElement.style.left = leftval + 10 + "px";
  }
});

document.addEventListener("keyup", function () {
  heroElement.className = "stop";
});
