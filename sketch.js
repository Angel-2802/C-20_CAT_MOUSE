var canvas, cat , mouse, cat1 , mouse1 , mouse2, cat2, mouse3, cat3;
 var bg;

function preload() {

cat1 = loadImage  ("cat1.png");
mouse1= loadImage  ("mouse1.png");
mouse2 =  loadAnimation("mouse2.png","mouse3.png");
cat2 = loadAnimation("cat2.png","cat3.png");
mouse3 = loadAnimation("mouse4.png");
cat3 =  loadAnimation("cat4.png"); 
bg = loadImage("garden.png");
}

function setup() {
createCanvas (1000, 800); 

cat =  createSprite(870,600);
cat.addImage(cat1);
cat.scale =  0.2;

mouse = createSprite(200,600);
mouse.addImage(mouse1);
mouse.scale =  0.15;

}

function draw() {

background (bg);

 if (cat.x -  mouse.x < (cat.width -  mouse.width)/2){


cat.addAnimation ("catteasing", cat3)
cat.x = 300;
cat.scale = 0.2;
cat.changeAnimation("catteasing");

mouse.addAnimation("jerrylastImage",mouse3); 
mouse.scale = 0.2;
mouse.changeAnimation("jerrylastImage");
cat.velocityX = 0;

}

drawSprites();
}

function keyPressed(){

if(keyCode === LEFT_ARROW){
    
cat.velocityX = -5;
cat.addAnimation("tomRunning", cat2);
cat.changeAnimation("tomRunning");

mouse.addAnimation("jerryRunning", mouse2);
mouse.frameDelay = 25;
mouse.changeAnimation("jerryRunning");

    }
}