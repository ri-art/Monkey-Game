var monkey, monkey_running;
var nut, nutImg, stone,stoneImg;
var FoodGroup, stoneGroup;
var score;
var ground;

var survival = 0;

function preload() {


monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  nutImg = loadImage("nut.jpg");
  stoneImg = loadImage("obstacle.png");

}



function setup() {
  createCanvas(400, 400);
  monkey = createSprite(30, 350, 10, 10);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(200, 385, 400, 10);
  ground.x = ground.width / 2;
  ground.velocityX = -3;

  FoodGroup = new Group();
 stoneGroup = new Group();
}


function draw() {
  background("white");

  stroke("black");
  textSize(20);
  survival = Math.round(frameCount / frameRate());
  text("Survival Time: " + survival, 150, 50);

  if (keyDown("space")) {
    monkey.velocityY = -12;
  }

  monkey.velocityY = monkey.velocityY + 0.8;

  if (ground.x < ground.width / 2) {
    ground.x = ground.width / 2;
  }

  monkey.collide(ground);

  food();
  stones();

  drawSprites();

}

function food() {
  if (frameCount % 80 === 0) {
nut = createSprite(200, Math.round(random(120, 200)), 10, 10);
nut.addImage(nutImg);
nut.scale = 0.3;
nut.velocityX = -6;
nut.lifetime = 150;

  FoodGroup.add(nut);
  }
}

function stones() {
  if (frameCount % 300 === 0) {
    stone = createSprite(400, 360, 10, 10);
    stone.addImage(stoneImg);
    stone.scale = 0.1;
    stone .velocityX = -6;
   stone.lifetime = 150;

    stoneGroup.add(stone );
  }
}
