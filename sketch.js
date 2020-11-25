const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0

function preload(){
  polygonImg = loadImage("images/download.jpg")

}


function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200})

  

  
  ground = new Ground(width/2,height,width,10)
  
  base1 = new Ground(695,height-40,300,20);
  block1 = new Box(575,540,40,40)
  block2 = new Box(615,540,40,40)
  block3 = new Box(655,540,40,40)
  block4 = new Box(695,540,40,40)
  block5 = new Box(735,540,40,40)
  block6 = new Box(775,540,40,40)
  block7 = new Box(815,540,40,40)

  block8 = new Box(615,480,40,40)
  block9 = new Box(655,480,40,40)
  block10 = new Box(695,480,40,40)
  block11 = new Box(735,480,40,40)
  block12 = new Box(775,480,40,40)

  block13 = new Box(655,440,40,40)
  block14 = new Box(695,440,40,40)
  block15 = new Box(735,440,40,40)

  block16 = new Box(695,400,40,40)

}

function draw() {
  background(255,255,255);
  Engine.update(engine);

  text("SCORE : "+score,750,40);

  ground.display();
  base1.display()
  fill("yellow")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("lightblue")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("grey")
  block13.display();
  block14.display();
  block15.display();
  fill("red")
  block16.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  imageMode(CENTER)
  image(polygonImg ,polygon.position.x ,polygon.position.y ,40 ,40)
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if (keyCode===32) {
    slingshot.attach(polygon)
  }
}