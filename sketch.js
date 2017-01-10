function setup() {
  TOP_COLOR = color("#233237"); // gunmetal
  BOTTOM_COLOR = color("#984b43"); // rusty red
  WHITE = color(255, 255, 255);
  
  createCanvas(windowWidth, windowHeight)
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(96);
  
  top_score = 0;
  bottom_score = 0;
}

function draw() {
  // top half
  fill(TOP_COLOR);
  rect(0, 0, width, 0.5 * height);
  fill(WHITE);
  text(top_score.toString(), 0.5 * width, 0.25 * height);
  
  // bottom half
  fill(BOTTOM_COLOR);
  rect(0, 0.5 * height, width, 0.5 * height);
  fill(WHITE);
  text(bottom_score.toString(), 0.5 * width, 0.75 * height);
}

function mousePressed() {
  if (mouseY < 0.5 * height) {
    ++top_score;
  } else {
    ++bottom_score;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}