var x1 = 400;
var y1 = 400;
var xmove1 = 8;
var ymove1 = 6;
var x2 = 500;
var y2 = 200;
var xmove2 = -8;
var ymove2 = 6;
var x3 = 200;
var y3 = 500;
var xmove3 = 6;
var ymove3 = -4;
var x4 = 300;
var y4 = 300;
var xmove4 = 6;
var ymove4 = 4;
var x5 = 400;
var y5 = 100;
var xmove5 = -6;
var ymove5 = 4;
var x6 = 100;
var y6 = 400;
var xmove6 = 4;
var ymove6 = -2;
var x7 = 200;
var y7 = 200;
var xmove7 = 4;
var ymove7 = 2;
var x8 = 300;
var y8 = 400;
var xmove8 = -4;
var ymove8 = 2;
var x9 = 400;
var y9 = 300;
var xmove9 = 2;
var ymove9 = -8;
var x10 = 500;
var y10 = 500;
var xmove10 = 10;
var ymove10 = 8;
var x11 = 600;
var y11 = 300;
var xmove11 = -10;
var ymove11 = 8;
var x12 = 300;
var y12 = 600;
var xmove12 = 8;
var ymove12 = -6;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  x1 = x1 + xmove1;
  y1 = y1 + ymove1;
  if (x1 >= 800 || x1 <= 0) {
    xmove1 = -xmove1;
  }
  if (y1 >= 800 || y1 <= 0) {
    ymove1 = -ymove1
  }
  stroke(0, 0, 255)
  strokeWeight(2)
  fill(0, 0, 255, 90)
  ellipse(x1, y1, 175, 175)


  x2 = x2 + xmove2;
  y2 = y2 + ymove2;
  if (x2 >= 800 || x2 <= 0) {
    xmove2 = -xmove2;
  }
  if (y2 >= 800 || y2 <= 0) {
    ymove2 = -ymove2
  }
  stroke(0, 255, 255)
  strokeWeight(2)
  fill(0, 255, 255, 90)
  ellipse(x2, y2, 200, 200)

  x3 = x3 + xmove3;
  y3 = y3 + ymove3;
  if (x3 >= 800 || x3 <= 0) {
    xmove3 = -xmove3;
  }
  if (y3 >= 800 || y3 <= 0) {
    ymove3 = -ymove3
  }
  stroke(0, 255, 0)
  strokeWeight(2)
  fill(0, 255, 0, 90)
  ellipse(x3, y3, 225, 225)

  x4 = x4 + xmove4;
  y4 = y4 + ymove4;
  if (x4 >= 800 || x4 <= 0) {
    xmove4 = -xmove4;
  }
  if (y4 >= 800 || y4 <= 0) {
    ymove4 = -ymove4
  }
  stroke(153, 255, 0)
  strokeWeight(2)
  fill(153, 255, 0, 90)
  ellipse(x4, y4, 250, 250)


  x5 = x5 + xmove5;
  y5 = y5 + ymove5;
  if (x5 >= 750 || x5 <= 0) {
    xmove5 = -xmove5;
  }
  if (y5 >= 750 || y5 <= 0) {
    ymove5 = -ymove5
  }
  stroke(255, 255, 0)
  strokeWeight(2)
  fill(255, 255, 0, 90)
  ellipse(x5, y5, 275, 275)

  x6 = x6 + xmove6;
  y6 = y6 + ymove6;
  if (x6 >= 800 || x6 <= 0) {
    xmove6 = -xmove6;
  }
  if (y6 >= 800 || y6 <= 0) {
    ymove6 = -ymove6
  }
  stroke(255, 153, 0)
  strokeWeight(2)
  fill(255, 153, 0, 90)
  ellipse(x6, y6, 300, 300)

  x7 = x7 + xmove7;
  y7 = y7 + ymove7;
  if (x7 >= 800 || x7 <= 0) {
    xmove7 = -xmove7;
  }
  if (y7 >= 800 || y7 <= 0) {
    ymove7 = -ymove7
  }
  stroke(255, 102, 0)
  strokeWeight(2)
  fill(255, 102, 0, 90)
  ellipse(x7, y7, 325, 325)


  x8 = x8 + xmove8;
  y8 = y8 + ymove8;
  if (x8 >= 800 || x8 <= 0) {
    xmove8 = -xmove8;
  }
  if (y8 >= 800 || y8 <= 0) {
    ymove8 = -ymove8
  }
  stroke(255, 51, 0)
  strokeWeight(2)
  fill(255, 51, 0, 90)
  ellipse(x8, y8, 350, 350)

  x9 = x9 + xmove9;
  y9 = y9 + ymove9;
  if (x9 >= 800 || x9 <= 0) {
    xmove9 = -xmove9;
  }
  if (y9 >= 800 || y9 <= 0) {
    ymove9 = -ymove9
  }
  stroke(255, 0, 0)
  strokeWeight(2)
  fill(255, 0, 0, 90)
  ellipse(x9, y9, 375, 375)

  x10 = x10 + xmove10;
  y10 = y10 + ymove10;
  if (x10 >= 800 || x10 <= 0) {
    xmove10 = -xmove10;
  }
  if (y10 >= 800 || y10 <= 0) {
    ymove10 = -ymove10
  }
  stroke(255, 0, 102)
  strokeWeight(2)
  fill(255, 0, 102, 90)
  ellipse(x10, y10, 100, 100)


  x11 = x11 + xmove11;
  y11 = y11 + ymove11;
  if (x11 >= 750 || x11 <= 0) {
    xmove11 = -xmove11;
  }
  if (y1 >= 750 || y11 <= 0) {
    ymove11 = -ymove11
  }
  stroke(255, 0, 255)
  strokeWeight(2)
  fill(255, 0, 255, 90)
  ellipse(x11, y11, 125, 125)

  x12 = x12 + xmove12;
  y12 = y12 + ymove12;
  if (x12 >= 800 || x12 <= 0) {
    xmove12 = -xmove12;
  }
  if (y12 >= 800 || y12 <= 0) {
    ymove12 = -ymove12
  }
  stroke(102, 0, 255)
  strokeWeight(2)
  fill(102, 0, 255, 90)
  ellipse(x12, y12, 150, 150)
}