randomRange = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

addghost = () => {
  const ghostdiv = document.createElement("div");
  const bgelement = document.getElementById("bg");
  let randomnum = randomRange(0, BG_WIDTH - GHOST_WIDTH);
  ghostdiv.style.position = "absolute";
  ghostdiv.style.top = "0";
  ghostdiv.style.left = randomnum + "px";

  ghostdiv.style.width = GHOST_WIDTH + "px";
  ghostdiv.style.height = GHOST_HEIGHT + "px";
  ghostdiv.style.background = 'url("./images/ghost.png") no-repeat';

  bgelement.appendChild(ghostdiv);

  let interval = setInterval(() => {
    let ghostTop = ghostdiv.style.top;
    let topnum = strToNum(ghostTop);
    ghostdiv.style.top = topnum + randomRange(1, 10) + "px";

    if (topnum > BG_HEIGHT - GHOST_HEIGHT) {
      //ghostdiv.remove();
      clearInterval(interval);
    }
  }, 100);
};

addghost();
addghost();
addghost();
addghost();
