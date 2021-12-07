var box;

function setup() {
  createCanvas(1000,1000);
  box = createSprite (500,500,100,100)
  box.shapeColor = "green"
}

function draw() 
{
   background("blue");

  if(keyIsDown(UP_ARROW)){
    box.y = box.y -4;
  }

  if(keyIsDown(DOWN_ARROW)){
    box.y = box.y +4
  }

  if(keyIsDown(LEFT_ARROW)){
    box.x = box.x -4;
  }

  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x +4
  }

  drawSprites();
}




