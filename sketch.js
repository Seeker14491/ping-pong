function preload() {
  RESET_SYMBOL = loadImage("assets/appbar.refresh.svg");
}

function setup() {
  COLOR_1 = color("#233237"); // gunmetal
  COLOR_2 = color("#984b43"); // rusty red
  
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textAlign(CENTER, CENTER);
  
  score_1 = 0;
  score_2 = 0;
  reset_button_diameter = 0;
  serve_turn = true;
  
  serve_indicator = createGraphics(1, 1);
  windowResized();
}

function draw() {
  // score_1 background
  fill(COLOR_1);
  (height > width) ? rect(0, 0, width, 0.5 * height) : rect(0, 0, 0.5 * width, height);
  // score_2 background
  fill(COLOR_2);
  (height > width) ? rect(0, 0.5 * height, width, 0.5 * height) : rect(0.5 * width, 0, 0.5 * width, height);
  
  // serve indicator
  push();
  blendMode(LIGHTEST);
  var total_score = score_1 + score_2;
  var serve_indicator_pos = serve_turn != ((floor(total_score / 2) % 2) === 0);
  if (height > width) {
    serve_indicator_pos ? image(serve_indicator, 0, 0, width, 0.5 * height) : image(serve_indicator, 0, 0.5 * height);
  } else {
    serve_indicator_pos ? image(serve_indicator, 0, 0) : image(serve_indicator, 0.5 * width, 0);
  }
  pop();
  
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
  push();
  imageMode(CENTER);
  reset_button_diameter = 0.0625 * max(width, height);
  fill(255);
  ellipse(0.5 * width, 0.5 * height, reset_button_diameter);
  image(RESET_SYMBOL, 0.5 * width, 0.5 * height, reset_button_diameter, reset_button_diameter);
  pop();
}

function mousePressed() {
  if (dist(mouseX, mouseY, 0.5 * width, 0.5 * height) < 0.5 * reset_button_diameter) {
    // reset button clicked
    if (score_1 + score_2 === 0) {
      serve_turn = !serve_turn;
    } else {
      score_1 = 0;
      score_2 = 0;
    }
  } else {
    var score_1_clicked = (height > width) ? (mouseY < 0.5 * height) : (mouseX < 0.5 * width);
  
    score_1_clicked ? ++score_1 : ++score_2;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  serve_indicator = (height > width) ? createGraphics(windowWidth, 0.5 * windowHeight) : createGraphics(0.5 * windowWidth, windowHeight);
  serve_indicator.noStroke();
  serve_indicator.background(255);
  serve_indicator.fill(0);
  serve_indicator.ellipse(0.5 * serve_indicator.width, 0.5 * serve_indicator.height, sqrt(0.5 * width * height));
}
