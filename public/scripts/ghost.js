const ghostdiv = document.createElement("div");
const bgelement = document.getElementById('bg');
ghostdiv.style.position = 'absolute';
ghostdiv.style.top = '0';
ghostdiv.style.left = '50%';

ghostdiv.style.width = GHOST_WIDTH + 'px';
ghostdiv.style.height = GHOST_HEIGHT + 'px';
ghostdiv.style.background = 'url("./images/ghost.png") no-repeat';

bgelement.appendChild(ghostdiv);
