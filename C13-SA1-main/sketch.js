var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var obstacle1
var edges

var score;
var cloudsGroup


function preload(){
  trex_running = loadAnimation("girl1.png","girl2.png","girl3.png","girl4.png","girl5.png","girl6.png","girl7.png");
  trex_collided = loadImage("trex_collided.png");
  cloud1Image=loadImage("spike_pixel.png")
  groundImage = loadImage("pixelforest.jpg");
cloudImage=loadImage("obstacle1.png")
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  cloudsGroup=createGroup()
  
  //create a ground sprite
  ground = createSprite(100,50,1000,100);
  ground.addImage(groundImage)
  ground.x = ground.width /2;
  
  ground.velocityX = -2;
  ground.scale=0.98
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  //creating invisible ground
  invisibleGround = createSprite(300,190,1200,10);
  invisibleGround.visible = false;
  invisibleGround.velocityX=-20

  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)
  //obstacle1=createSprite(600,100,40,10)
  //obstacle1.addImage(cloudImage)
  //obstacle1.setCollider("rectangle",0,0,600,10)
  //obstacle1.scale=0.2
}

function draw() {

  //set background color
  background(180);
  
  console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
 
  invisibleGround.x=trex.x
  //stop trex from falling down
  trex.collide(invisibleGround);
  if(keyDown("right")){
  trex.x=trex.x+2
  }
  
  if(ground.x<0){
    ground.x=ground.width/2
   }
    
  if(invisibleGround.x<0){
    invisibleGround.x=invisibleGround.width/2
   }
 trex.collide(cloudsGroup)
  spawnClouds()
  drawSprites();
  if(obstaclesGroup.isTouching(trex)){
    gameState = END;
}
}
else if (gameState === END) {
gameOver.visible = true;
restart.visible = true;

}

//function to spawn the clouds
function spawnClouds(){
if (frameCount%100 === 0){ cloud=createSprite(600,100,40,10);
cloud1=createSprite(600,100,40,10)
cloud1.y=cloud.y
cloud1.velocityX=-2
cloud1.addImage(cloud1Image)
  cloud.y=Math.round(random(80,120))
cloud.velocityX=-2
cloud.scale=0.2
cloud1.scale=0.2
  cloud.addImage(cloudImage)
  cloudsGroup.add(cloud)
  cloud.debug=true 
  cloud.setCollider("rectangle",0,0,600,10)
}


}



