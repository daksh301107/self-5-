var boy,computer,kiteR,kiteG,thread;
var swingX,swingY;
var swingX1,swingY1;
var heart,kite,kite1;
var boy1,robot;
var cloud ,cloud1;
var Plife=[];
var Gline;
var Clife=[];
var count;
var iground,iground2;
var Complife=5;
var time=50;
var fireGroup;
var Playerlife=5;
function preload(){
 boy1=loadImage("animations/boy.png");
 heart=loadImage("animations/heart.png");
 kite=loadImage("animations/red kite.png");
 kite1=loadImage("animations/green kite.png");
 robot=loadImage("animations/robot.jpg");
 cloud1=loadImage("animations/cloud.png");
}
function setup() {
 cnv= createCanvas(1500,500);
  swingX=0;
  swingY=0;

  swingX1=0;
    swingY1=0;
count=0;
fireGroup=new Group();
iground=createSprite(750,450,1500,20)
  kiteR=createSprite(400, 200, 50, 30);
  kiteR.scale=0.4;
  kiteR.addImage(kite);
   cloud=createSprite(0,100);
   cloud.velocityX=3;
   cloud.addImage(cloud1);
  kiteG=createSprite(800, 200, 50, 30);
  kiteG.scale=0.4;
  kiteG.addImage(kite1);
  boy=createSprite(300,400,30,20);
  boy.addImage(boy1);
  boy.scale=0.3;
cnv.mouseOver(Cutsound);
  computer=createSprite(900,400,30,20);
  computer.addImage(robot);
  computer.scale=0.3;
  for(var i=0;i<5;i++){
    Plife[i]=createSprite(100+40*i,450,10,10);
    Clife[i]=createSprite(1100+40*i,450,10,10);
    Plife[i].scale=0.1;
    Clife[i].scale=0.1;
    Plife[i].addImage( heart);
    Clife[i].addImage( heart);
  }


}

function draw() {
  background(255);  
 //c'ount=count+1;
 if (fireGroup.isTouching(kiteR)&&Playerlife>0){
  
  Plife[Playerlife-1].visible=false;
  Playerlife=Playerlife-1;

 }
 if(count>500){
   count=count-1;
   
 }
 else{
   count=count+1;
 }
 if(mouseIsOver(kiteG)&&Complife>0){

   if(time==0){

    Clife[Complife-1].visible=false;
    Complife=Complife-1;
    time=50;
   }
   else{
    time=time-1;
    console.log(time) 
   }
    

  
   
   
 }
 
 if(kiteR.y>500){
   kiteR.y=450;
   console.log("kite");
 }
  swingX = sin(frameCount/50)*100;
  swingY = cos(frameCount/25)*10;
  
  line(boy.x,boy.y, mouseX + swingX, mouseY + swingY);
  //kiteR(mouseX + swingX, mouseY+ swingY, 30,30);
  kiteR.x=mouseX+swingX;
  kiteR.y=mouseY+swingY;
     if (frameCount%250==0){
      cloud=createSprite(0,100,20,30);
      cloud.velocityX=3;
      cloud.addImage(cloud1);
     console.log ("cloud");
     }


  swingX1 = sin(count/50)*10000;
  swingY1 = cos(count/25)*10;
 // console.log(frameCount);  
  
 // Gline.x=kiteG;
 // ellipse(mouseX + swingX, 300 + swingY, 30,30);
 // kiteR
 if(kiteG.x>670){
  kiteG.x=kiteG.x-10;
  line(computer.x,computer.y, kiteG.x, swingY1);
}
else{
  kiteG.x=200+swingX1;
  line(computer.x,computer.y, 200 + swingX1, swingY1);
}
 
 kiteG.y=swingY1;
 fireball();
///console.log(200+swingX1,swingY1) ;
  drawSprites();
}
function Cutsound(){

console.log("daksh")

}
function fireball(){
  if ( frameCount%500==0){
    var fire =createSprite(random(0,750),450,10,10);
    fire.velocityY=-20;
    fireGroup.add(fire);
  }

}
