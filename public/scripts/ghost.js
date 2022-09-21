addghost = () => {
  const ghostdiv = document.createElement("div");
  const bgelement = document.getElementById('bg');
  const randomnum = Math.floor(Math.random() * 755);
  ghostdiv.style.position = 'absolute';
  ghostdiv.style.top = '0';
  ghostdiv.style.left = randomnum + 'px';

  ghostdiv.style.width = GHOST_WIDTH + 'px';
  ghostdiv.style.height = GHOST_HEIGHT + 'px';
  ghostdiv.style.background = 'url("./images/ghost.png") no-repeat';

  bgelement.appendChild(ghostdiv);
}

addghost();
addghost();
