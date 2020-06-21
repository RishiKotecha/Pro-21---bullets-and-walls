var bullet, wall;
var thickness, weight, speed;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  invisiblewall = createSprite(775,200,60,height/2);
  invisiblewall.visible = false
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor =(80,80,80);

 
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
}

function draw() {
  background(255,255,255);  
  bullet.velocityX = speed
  bullet.collide(wall)

if (hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
console.log(damage)
  if(damage>10){
    wall.shapeColor = color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor = color(0,255,0);
  }
}

  //hasCollided();
  drawSprites();


 
}
function hasCollided(Lbullet,Lwall){
  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
   }