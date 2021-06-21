let left = false;
let right = false;
let on = false;
let speed = 3;
let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 255);
  noStroke();
  fill(255);

  if (on) {
    background(255);
    fill(0, 0, 255);
    x = x - speed;
  }


  rect(150, 200, 100, 180);
  ellipse(x, 90, 100);

  x = x + speed;

  if (x >= width) {
    speed = speed - 3;
  }

  if (x <= 0) {
    speed = speed + 3;
  }

  fill(255, 0, 0);
  rect(120, 250, 30);
  fill(0, 255, 0);
  rect(250, 250, 30);
}

function mousePressed() {
  if (mouseX > 150 && mouseX < 250 && mouseY > 200 && mouseY < 380) {
    on = !on;
  }

  if (mouseX > 120 && mouseX < 150 && mouseY > 250 && mouseY < 280) {
    print('Im Here')
  }
  
  if (mouseX > 250 && mouseX < 280 && mouseY > 250 && mouseY < 280) {
    print('Im also here')
  }
}
