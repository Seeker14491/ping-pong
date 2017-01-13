function preload() {
  RESET_SYMBOL = loadImage("assets/appbar.refresh.svg");
}

function setup() {
  COLOR_1 = color("#233237"); // gunmetal
  COLOR_2 = color("#984b43"); // rusty red
  
  createCanvas(windowWidth, windowHeight)
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(96);
  imageMode(CENTER);
  
  score_1 = 0;
  score_2 = 0;
  reset_button_diameter = 0;
}

function draw() {
  // score_1 background
  fill(COLOR_1);
  if (height > width) {
    rect(0, 0, width, 0.5 * height);
  } else {
    rect(0, 0, 0.5 * width, height);
  }
  // score_2 background
  fill(COLOR_2);
  if (height > width) {
    rect(0, 0.5 * height, width, 0.5 * height);
  } else {
    rect(0.5 * width, 0, 0.5 * width, height);
  }
  
  // scores
  fill(255);
  textSize(0.375 * min(width, height));
  if (height > width) {
    text(score_1.toString(), 0.5 * width, 0.25 * height);
    text(score_2.toString(), 0.5 * width, 0.75 * height);
  } else {
    text(score_1.toString(), 0.25 * width, 0.5 * height);
    text(score_2.toString(), 0.75 * width, 0.5 * height);
  }
  
  // reset button
  reset_button_diameter = 0.0625 * max(width, height);
  fill(255);
  ellipse(0.5 * width, 0.5 * height, reset_button_diameter);
  image(RESET_SYMBOL, 0.5 * width, 0.5 * height, reset_button_diameter, reset_button_diameter);
}

function mousePressed() {
  if (dist(mouseX, mouseY, 0.5 * width, 0.5 * height) < 0.5 * reset_button_diameter) {
    // reset button clicked
    score_1 = 0;
    score_2 = 0;
  } else {
    var score_1_clicked = (height > width) ? (mouseY < 0.5 * height) : (mouseX < 0.5 * width);
  
    if (score_1_clicked) {
      ++score_1;
    } else {
      ++score_2;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
