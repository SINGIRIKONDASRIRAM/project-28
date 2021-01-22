
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;

function preload()
{
	boyImage = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	mango1 = new Bob (170,500,55);
	mango2 = new Bob (170,500,55);
	mango3 = new Bob (170,500,55);
	mango4 = new Bob (170,500,55);
	mango5 = new Bob (170,500,55);
	


function draw() {
  rectMode(CENTER);
  background(0);
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);


  mango1.display();
  mango1.display();
  mango1.display();
  mango1.display();
  mango1.display();



  drawSprites();
 
}


function detectollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition+Lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.y)
	if(distance<-lmango.r+Lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false)
	}
}
function keyPressed(){
	if (keyCode === 32){
		matter.Body.setPosition(stoneObj.body,{ x:235,y:420})
		lancherObject.attach(stoneObj.body);
	}
}
