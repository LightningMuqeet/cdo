var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600 ,400);
  bullet=createSprite(50, 200, 50, 50);
  weight=random(400,1500);
  speed=random(300,402);
  thickness=random(223,331);
  wall=createSprite(1500, 200, 100, height/2);

  
}

function draw() {    
  background(255,255,255);  
  bullet.velocityX = speed/10;
  //bullet.collide(wall);
  
  wall.shapeColor = "rgb(80,80,80)";

  var deformation = (.5 * weight * speed * speed)/(thickness * thickness * thickness);
//  console.log(deformation);

  if(wall.x-bullet.x <= (bullet.width/2 + wall.width/2) && deformation>=10 )
  {
    bullet.velocityX=0;
    wall.shapeColor ="green";
  }
    else if(wall.x-bullet.x <= (bullet.width/2 + wall.width/2) && deformation<10)
    {
      console.log("hello")
      wall.shapeColor = "red";

    }
    
   
  
  


  drawSprites();
}