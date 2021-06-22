let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);
}

function draw() {
  noStroke();
  fill(r, g, b);
  r = map(mouseX, 0, 400, 0, 255);
  b = map(mouseX, 0, 400, 255, 0);
  g = map(mouseY, 0, 400, 0, 255);

  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 25);
  }

  if (mouseX > 0 && mouseX < 30 && mouseY > 0 && mouseY < 30) {
    fill(255, 10, 10);

    if (mouseIsPressed) {
      background(25);
    }
  } else {
    fill(230, 10, 10);
  }

  rect(0, 0, 30, 30, 10);
}
