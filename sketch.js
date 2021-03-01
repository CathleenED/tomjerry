 var cat1,cat1Img
 var cat2,cat2Img
 var cat3,cat3Img
 var cat4,cat4Img
 var tom
 var jerry
 var mouse1,mouse1Img
 var mouse2,mouse2Img
 var mouse3,mouse3Img
 var mouse4,mouse4Img
var garden,gardenImg
function preload() {
    //load the images here
    cat1Img=loadAnimation("cat1.png","cat2.png")
     mouse1Img=loadAnimation("mouse1.png","mouse2.png")
     mouse2Img=loadAnimation("mouse4.png")
     cat2Img=loadAnimation("cat4.png")
gardenImg=loadImage("garden.png")



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 tom=createSprite(800,600,20,20)
 tom.addAnimation(cat1Img)
 jerry=createSprite(200,600,20,20)
 jerry.addAnimation(mouse1Img)
garden=createSprite(500,400,200,200)
garden.addImage(gardenImg)

}



function draw() {
    
    background(255);

    //Write condition here to evalute if tom and jerry collide
    if (tom.x-jerry.x<tom.width/2+jerry.width/2 && jerry.x-tom.x<tom.width/2+jerry.width/2 &&
        tom.y-jerry.y<tom.height/2+jerry.height/2 && jerry.y-tom.y < tom.height/2+jerry.height/2) {
        tom.shapeColor="blue"
        jerry.shapeColor="orange"
      }
      else {
        tom.shapeColor="green"
        jerry.shapeColor="green"
      }

//keyPressed();
    drawSprites();
}

function keyPressed( ){
if (keyDown("LEFT_ARROW")) {
    tom.velocityX=-3
    tom.velocityY=0
}
}


