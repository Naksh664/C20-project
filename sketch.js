var wall,car;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,50,50);
  car.weight = random(400,1500);
  car.speed = random(55,90)
  car.velocityX = car.speed
  wall =createSprite(1500, 200, 60, height/2);
  deformation = 0.5*car.weight*car.speed*car,speed/22500;
}

function draw() {
  background(255,255,255);  
  
  if(deformation<100{
   car.shapeColor = "green"
  }
  if(deformation>100 && deformation<180){
    car.shapeColor = "yellow"
   }
   if(deformation>180{
    car.shapeColor = "red"
   }
  drawSprites();
}
