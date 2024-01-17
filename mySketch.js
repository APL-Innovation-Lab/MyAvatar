let canvas;

function setup() {
  canvas = createCanvas(200, 200);
  let saveButton = createButton('Save');
  saveButton.mousePressed(saveImage);
  noLoop();
}

function draw() {
  generateAvatar();
}

function generateAvatar() {
  background(255);
  let gradient = drawingContext.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, randomColor());
  gradient.addColorStop(1, randomColor());
  drawingContext.fillStyle = gradient;
  rect(0, 0, width, height);

  let shapeCount = random(5, 10);
  for (let i = 0; i < shapeCount; i++) {
    if (random() < 0.5) {
      drawCircle();
    } else {
      drawTriangle();
    }
  }
}

function drawCircle() {
  fill(randomColor());
  noStroke();
  ellipse(random(width), random(height), random(20, 50));
}

function drawTriangle() {
  fill(randomColor());
  noStroke();
  let x1 = random(width);
  let y1 = random(height);
  triangle(x1, y1, x1 + random(-50, 50), y1 + random(-50, 50), x1 + random(-50, 50), y1 + random(-50, 50));
}

function randomColor() {
  return color(random(255), random(255), random(255));
}

function saveImage() {
  saveCanvas(canvas, 'myAvatar', 'png');
}
