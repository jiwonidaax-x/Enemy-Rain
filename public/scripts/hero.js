const heroElement = document.getElementById('hero');

document.addEventListener('keydown', function(e) {
  var num = "";
  const left = getComputedStyle(heroElement).left;
  console.log(left);
  for (let i = 0; i < left.length; i++) {
    if (isNaN(Number(left[i])) == false) {
      num += String(left[i]);
    }
  }
  var leftval = Number(num);
  if (e.keyCode === 37) {
    heroElement.className = 'left';
    heroElement.style.left = leftval - 1 + 'px';
  }
  else if (e.keyCode === 39) {
    heroElement.className = 'right';
    heroElement.style.left = leftval + 1 + 'px';
  }
});

document.addEventListener('keyup', function() {
  heroElement.className = 'stop';
});
