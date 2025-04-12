const dot = document.querySelector('.dot');

function setDot() {
  dot.style.left = '50%';
  dot.style.top = '50%';
}

function checkDot() {
  const x = parseFloat(dot.style.left);
  const y = parseFloat(dot.style.top);

  if (x < 2) {
    dot.style.left = '2%';
  } else if (x > 98) {
    dot.style.left = '98%';
  }
  if (y < 2) {
    dot.style.top = '2%';
  }
  else if (y > 98) {
    dot.style.top = '98%';
  }
}

function moveDot(x, y) {
  const xPos = parseFloat(dot.style.left) + (x / 2);
  const yPos = parseFloat(dot.style.top) + (y / 2);

  dot.style.left = `${xPos}%`;
  dot.style.top = `${yPos}%`;

  checkDot();
}

setDot()
moveDot(0, 0);