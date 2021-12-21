

function preload(){
 backgroundImage = loadImage("background.jpg")
cityImage = loadImage("city.jpg")
 lionImage = loadImage("gun.gif")
 
 jjImage = loadImage("bottle.gif")
 ballImage = loadImage("a.gif")
 jumpSound = loadSound("jump.wav")
}

function setup(){
 createCanvas(1200,600)
 
 


lion = createSprite(1050,350,20,10)
 lion.addImage(lionImage)
 lion.scale = 0.3;
 
 
  

 jj = createSprite(150,210,20,10)
 jj.addImage(jjImage)
 jj.scale = 0.3;
 
 j = createSprite(450,210,20,10)
 j.addImage(jjImage)
 j.scale = 0.3;
 

 ball = createSprite(1000,230,20,10)
 ball.addImage(ballImage)
 ball.scale = 0.3;
 ball.visible= false;

 ball1 = createSprite(1000,230,20,10)
 ball1.addImage(ballImage)
 ball1.scale = 0.3;
 ball1.visible= false;

}

function draw(){
background(backgroundImage)

if(keyIsDown(UP_ARROW)){
 lion.velocityY = -2;
}
if(keyIsDown(DOWN_ARROW)){
    lion.velocityY = 2;
   }
if(keyDown("enter")){
    lion.velocityY = 0;
   }

if(keyDown("space")){
    ball.velocityX = -100;
    ball.visible = true;
    jumpSound.play();
   }

   if(keyDown("ctrl")){
    ball1.velocityX = -100;
    ball1.visible = true;
    jumpSound.play();
   }

   if(ball.isTouching(j)){
    j.visible= false;
    ball.visible= false;
   }
   if(ball1.isTouching(jj)){
    jj.visible= false;
    ball1.visible= false;
   }

   

drawSprites();

  
  
}
