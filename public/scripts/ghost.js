randomRange = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

addghost = () => {
  const ghostdiv = document.createElement("div");
  const bgelement = document.getElementById("bg");
  const heroele = document.getElementById("hero");
  let randomnum = randomRange(0, BG_WIDTH - GHOST_WIDTH);
  ghostdiv.style.position = "absolute";
  ghostdiv.style.top = "0";
  ghostdiv.style.left = randomnum + "px";

  ghostdiv.style.width = GHOST_WIDTH + "px";
  ghostdiv.style.height = GHOST_HEIGHT + "px";
  ghostdiv.style.background = 'url("./images/ghost.png") no-repeat';

  bgelement.appendChild(ghostdiv);

  let interval = setInterval(() => {
    let gtopnum = strToNum(ghostdiv.style.top);
    let gleftnum = strToNum(ghostdiv.style.left);
    let heroleftnum = strToNum(heroele.style.left);

    ghostdiv.style.top = gtopnum + randomRange(1, 15) + "px";

    if (gtopnum > BG_HEIGHT - (GHOST_HEIGHT + HERO_WIDTH)) {
      if (gleftnum < heroleftnum && heroleftnum < gleftnum + GHOST_WIDTH) {
        killed(ghostdiv);
        clearInterval(interval);
      }
    }

    if (gtopnum > BG_HEIGHT - GHOST_HEIGHT) {
      ghostdiv.remove();
      clearInterval(interval);
    }
  }, 100);
};

killed = (ghost) => {
  ghost.style.backgroundPosition = "-45px 0px";
  setTimeout(function () {
    ghost.remove();
  }, 3000);
};
addghost();
setInterval(addghost, 3500);
