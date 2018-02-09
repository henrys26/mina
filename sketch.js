var time;
var a;
var b;
var c;
var d;
var e;
var aopacity;
var bopacity;
var copacity;
var dopacity;
var eopacity;
var fopacity;
var gopacity;
var face;

function preload(){
  img = loadImage("boy.png");
  soup = loadImage("cursorr.png"); //여기에SOUP IMAGE
  end = loadImage("explanation.png"); //여기에EXPLANATION IMAGE
  sad = loadImage("sad.png");
  ill1 = loadImage('1.png')
  ill2 = loadImage('2.png')
  ill3 = loadImage('3.png')
  ill4 = loadImage('4.png')
  ill5 = loadImage('5.png')
}

function setup() {
  createCanvas(windowWidth,windowWidth*0.85375);
  time = 50;
  a = 255;
  b = 255;
  c = 255;
  d = 255;
  e = 255;
  face = sad;
}

function draw() {

  noCursor();
  background('#EBBC74');
  image(face, 400, 400, 300, 570.1);
  
  push();
  tint(255, a);
  image(ill1,390,380,248/3.7,438/3.7);
  pop();
  
  if (mouseX >= 390 && mouseX <= 410 && mouseY >= 370 && mouseY <= 400){
   a = a - 34;
}
  
  push();
  tint(255, b);
  image(ill2,300,530,436/3.7,575/3.7);
  pop();

  if (mouseX >= 290 && mouseX <= 310 && mouseY >= 520 && mouseY <= 540){
   b = b - 25;
}
  
  push();
  tint(255, c);
  image(ill3, 400, 530, 135/3.7, 348/3.7);
  pop();
  
  if (mouseX >= 390 && mouseX <= 405 && mouseY >= 525 && mouseY <= 540){
   c = c - 34;
}
  
  push();
  tint(255, d);
  image(ill4, 470, 480, 295/3.7, 385/3.7);
  pop();
  
  if (mouseX >= 460 && mouseX <= 480 && mouseY >= 450 && mouseY <= 490){
   d = d - 34;
}
  
  push();
  tint(255, e);
  image(ill5, 430, 630, 327/3.7, 290/3.7);
  pop();
  
  if (mouseX >= 420 && mouseX <= 460 && mouseY >= 620 && mouseY <= 640){
   e = e - 34;
}

if (a <= 0 && b <= 0 && c <= 0 && d <= 0 && e <= 0){
  time = time -1;
  image(img, 400, 400, 300, 570.1);
}

if (time <= 0){
  imageMode(CENTER);
  image(end,400,341.5,133.3*4,100*4);
}

  imageMode(CENTER);
  image(soup,mouseX,mouseY,50,50);
  

}
