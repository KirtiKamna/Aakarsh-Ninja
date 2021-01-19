  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bg 
var ninja 
var ninjaImg
var scenery
var ninjaRun

function preload(){
    
bg= loadImage("desertbg/png/Bg.png");

ninjaImg=loadAnimation("Idle/Idle__001.png","Idle/Idle__002.png","Idle/Idle__003.png","Idle/Idle__004.png","Idle/Idle__005.png","Idle/Idle__006.png","Idle/Idle__007.png",
"Idle/Idle__008.png","Idle/Idle__009.png");

ninjaRun = loadAnimation("Run/Run__000.png","Run/Run__001.png","Run/Run__002.png","Run/Run__003.png","Run/Run__004.png",
"Run/Run__005.png","Run/Run__006.png","Run/Run__007.png","Run/Run__008.png","Run/Run__009.png",)

}

function setup(){
    engine = Engine.create();
    world = engine.world;
  createCanvas(1400,700)
scenery=createSprite(560,300,100,50)
  scenery.addImage(bg)
  scenery.scale=1.2

  ninja= createSprite(100,600,20,20)
  ninja.addAnimation("ninja",ninjaImg)
  ninja.addAnimation("ninjaRun",ninjaRun)
  ninja.scale=0.4
  
}

function draw(){
    Engine.update(engine);
    background("yellow"); 
    //camera.x = ninja.x
  scenery.velocityX=-1;
 console.log(scenery.x);
 if(scenery.x < 630){
    scenery.x = 760;
  }
   if(keyWentDown("RIGHT_ARROW")){

    ninja.changeAnimation("ninjaRun",ninjaRun);
    ninja.velocityX= 5;

   }

   if(keyWentUp("RIGHT_ARROW")){

   ninja.changeAnimation("ninja",ninjaImg);
   ninja.velocityX= 0;


   }
    
   
drawSprites();
}





