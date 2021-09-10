
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(800,680,1600,20)
box1= new Ground(1200,665,250,10)
box2= new Ground(1080,600,10,150)
box3= new Ground(1320,600,10,150)
ball=new Paper(200,650,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 ground. display()
 fill("orange")
 box1.display()
 box2.display()
 box3.display()
 fill("white")
 ball.display()
  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.bady,ball.bady.position,{x:85,y:-85});
}
}



