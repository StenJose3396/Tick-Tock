
var hr,min,sec;
var scAngle,minAngle,hrAngle;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  translate(400,200);
  
  rotate(-90);
  hr = hour();
  min = minute();
  sec = second();

  angleMode(DEGREES);
  scAngle = map(sec,0, 60, 0, 360)
  minAngle = map(min, 0, 60, 0, 360)
  hrAngle = map(hr%12, 0, 12, 0, 360)

  push();
  stroke(255,0,0);
  strokeWeight(7);
  rotate(scAngle);
  line(0,0,100,0);
  pop();

  push();
  stroke(0,255,0);
  strokeWeight(7);
  rotate(minAngle);
  line(0,0,80,0);
  pop();

  push();
  stroke(255,0,255);
  strokeWeight(7);
  rotate(hrAngle);
  line(0,0,50,0);
  pop();

  noFill();
  stroke("white");
  strokeWeight(10);
  arc(0, 0, 300, 300, 0, scAngle);

  stroke("blue");
  strokeWeight(10);
  arc(0, 0, 280, 280, 0, minAngle);

  stroke("green");
  strokeWeight(10);
  arc(0, 0, 250, 250, 0, hrAngle);
}