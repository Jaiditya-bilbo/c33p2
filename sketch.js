var snowImage
var snowBg
var snowImg
var snow
var boyAni
var boy
var boy2Img
var boy2
function preload(){
  snowImage = loadImage("snow1.jpg")
  snowImg = loadImage("snow4.webp")
  boyAni = loadAnimation("1 m.png","2.png", "3.png")
  boy2Img = loadImage("1 m.png")
}
function setup() {
  createCanvas(800,600);
  snowBg = createSprite(400, 300, 100, 100);
  snowBg.addImage(snowImage)
  snowBg.scale = 1.55;

  boy = createSprite(-10, 400, 50, 50)
  boy.addAnimation("snowboy",boyAni)
  boy.velocityX = 2;

  boy2 = createSprite(400, 400, 50, 50)
  boy2.addAnimation("snowboy2",boy2Img)
  boy2.velocityX = 0;
  boy2.visible = false;
}

function draw() {
  background("black");  
  spawnSnow();
  drawSprites();
}

function spawnSnow(){
  if(frameCount % 20 === 0){
    var snow = createSprite(780, 1, 1, 1)
    snow.x = Math.round(random(10,700));
    snow.addImage(snowImg)
    snow.scale = 0.2
    snow.velocityY = 5;
  }

  if(boy.position.x > 400){
    boy.velocityX = 0;
    boy.visble = false;
    boy2.visible = true;
  }
}