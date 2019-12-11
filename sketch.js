var fixedRect, movingRect;
var a;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  a = createSprite(400, 300,80,30);
  a.shapeColor = "green";
  a.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  BounceOff(fixedRect,movingRect);
  if(isTouching(fixedRect, a)){
    fixedRect.shapeColor = "blue";
    a.shapeColor = "blue";
  }
  else {
    fixedRect.shapeColor = "green";
    a.shapeColor = "green";
  }
  drawSprites();
}



