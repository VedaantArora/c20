var movingRect,fixedRect;
function setup() {
  createCanvas(800,400);
  movingRect=createSprite(100, 50, 80, 50);
  movingRect.shapeColor="blue"
  movingRect.velocityY=+3
  fixedRect=createSprite(100,350,80,50);
  fixedRect.shapeColor="blue"
  fixedRect.velocityY=-3


}

function draw() {
  background(0);  
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 ){
      movingRect.shapeColor="red";
      fixedRect.shapeColor="red";
    }
    else{
      movingRect.shapeColor="blue";
      fixedRect.shapeColor="blue"; 
    }
    if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
      && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
        movingRect.velocityX*=-1;
        fixedRect.velocityX*=-1;
      }
      if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
        && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
          movingRect.velocityY*=-1;
          fixedRect.velocityY*=-1;  
        }
  drawSprites();
}