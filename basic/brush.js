let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke()
  fill(r, g, b);
  ellipse(mouseX, mouseY, 25);
  r = map(mouseX, 0, 400, 0, 255);
  b = map(mouseX, 0, 400, 255, 0);
  g = map(mouseY, 0, 400, 0, 255);
}

function mousePressed() {
  background(25)
}
