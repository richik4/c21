var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,50,50);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,50,50);
  movingRect.shapeColor = "green";
  rect3 = createSprite(600,200,50,50);
  rect3.shapeColor = "blue";
}

function draw() {
  background("WHITE");  
  drawSprites();
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (istouching (rect3,movingRect)){
    rect3.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    rect3.shapeColor = "blue";
    movingRect.shapeColor = "green";
  }
}
function istouching ( object1, object2){ 
  if(object2.x - object1.x < object2.width/2 + object1.width/2 && object1.x - object2.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2){
 return true ; 
   } 
  else {
    return false
  }
  
  
}