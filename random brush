let bg = 50;
let brush;
let r, g, b, a;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);
  // i've added rgb brush and fill here too because i want the brush to be a random color from the beggining
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  brush = random(5, 80);
  fill(r, g, b);
}

function draw() {
  noStroke();
  ellipse(mouseX, mouseY, brush);
}

function mousePressed() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  a = random(0, 255);
  brush = random(5, 80);
  background(bg);
  fill(r, g, b, a);
}
