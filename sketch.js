var fixedRect ,movingRect;
 function setup() {
createCanvas(1200,800);
fixedRect = createSprite(600,400,50,80);
fixedRect.shapeColor = "blue";
movingRect = createSprite(400,200,80,30);
 movingRect.shapeColor = "blue";
 fixedRect.debug = true;
 movingRect.debug = true;
 
 gameobject1 = createSprite(100,100,50,50);
 gameobject1.shapeColor = "pink";
 gameobject2 = createSprite(200,100,50,50);
 gameobject2.shapeColor = "pink";
 gameobject3 = createSprite(300,100,50,50);
 gameobject3.shapeColor = "pink";
 gameobject4 = createSprite(400,100,50,50);
 gameobject4.shapeColor = "pink";

 movingRect.velocityY = -5;
 fixedRect.velocityY = 5;
 }
  function draw()
 {
    background(0,0,0);
 movingRect.x = World.mouseX;
 movingRect.y = World.mouseY;
 
 if(isTouching(movingRect,gameobject1)){
  gameobject1.shapeColor = "Red";
  movingRect.shapeColor = "Red";
 }else{
  gameobject1.shapeColor = "blue";
  movingRect.shapeColor = "blue";
 }
 bounceOff(movingRect,fixedRect);
 drawSprites(); }
 
 