var car,wall, car1,car2,wall1,wall2;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50,100, 50, 50);
  car1 = createSprite(50,200,50,50);
  car2 = createSprite(50,300,50,50);
  wall = createSprite(1000, 100, 50, 90);
  wall1 = createSprite(1000, 200, 50, 90);  
  wall2 = createSprite(1000, 300, 50, 90);

  wall.shapeColor = color(80,80,80);
  wall1.shapeColor = color(80,80,80);
  wall2.shapeColor = color(80,80,80);
  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(255,255,255);  

  car.velocityX = speed;

if (wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22509;
  if (deformation>180){
    car.shapeColor = color(255,0,0);
  }
  if (deformation<180 && deformation>100){
    car.shapeColor = color(230,230,0);
  }
  if (deformation<100){
    car.shapeColor = color(0,255,0);
  }
}

car1.velocityX = speed;

if (wall1.x-car1.x < (car1.width+wall1.width)/2)
{
  car1.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22509;
  if (deformation>180){
    car1.shapeColor = color(255,0,0);
  }
  if (deformation<180 && deformation>100){
    car1.shapeColor = color(230,230,0);
  }
  if (deformation<100){
    car1.shapeColor = color(0,255,0);
  }
}

car2.velocityX = speed;

if (wall2.x-car2.x < (car2.width+wall2.width)/2)
{
  car2.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22509;
  if (deformation>180){
    car2.shapeColor = color(255,0,0);
  }
  if (deformation<180 && deformation>100){
    car2.shapeColor = color(230,230,0);
  }
  if (deformation<100){
    car2.shapeColor = color(0,255,0);
  }
}

  drawSprites();
}