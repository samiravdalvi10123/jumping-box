var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edge1,edge2,edge3,edge4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(10,500,200,20);
    surface1.shapeColor = "orange";

    surface2 = createSprite(250,500,150,20);
    surface2.shapeColor = "purple";

    surface3 = createSprite(450,500,150,20);
    surface3.shapeColor = "pink";

    surface4 = createSprite(650,500,150,20);
    surface4.shapeColor = "yellow"

    box = createSprite(300,300,20,20);
    box.velocityY = 3;
    box.velocityX = 3;

    edge1 = createSprite (0,0,10,1200)
    edge2 = createSprite(800,0,10,1200)
    edge3 = createSprite(600,0,1200,10)
    edge4 = createSprite(0,600,1600,10)
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
  
   box.bounceOff(edge1);
   box.bounceOff(edge2);
   box.bounceOff(edge3);
   box.bounceOff(edge4);
   
   if(surface1.isTouching(box) && box.bounceOff(surface1)){
       box.shapeColor = "orange";
   }
   if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor = "purple";
    box.velocityX = 0;
    box.velocityY = 0;
}
if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor = "pink";
}

if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor = "pyellow";
}
    //add condition to check if box touching surface and make it box
    drawSprites();
}
