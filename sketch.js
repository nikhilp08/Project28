
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
 
var boy;
var boyImage;
var tree;
var treeImage;
var stone;
var mango1, mango2, mango3, mango4;
var chain;

function preload()
{
    boyImage = loadImage('Plucking mangoes/boy.png');
    treeImage = loadImage('Plucking mangoes/tree.png');
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20);

    stone = new Stone(250,50,10);

    mango1 = new Mango(800,200,35);
    mango2 = new Mango(910,100,35);
    mango3 = new Mango(950,170,35);
    mango4 = new Mango(860,160,35);

    

    boy = createSprite(200,325,10,10);
    boy.addImage("boy", boyImage)
    boy.scale = 0.1;

    tree = new Tree(900,225,400,600);

    var options = {
        bodyA: stone.body,
        pointB: {x:135,y:275},
        stiffness: 0.04,
        length:2
    }

    chain = Constraint.create(options);
    World.add(world,chain);
    
    
    
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  stone.display();
  tree.display();
  
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    fly();
}

function keyPressed(){
    if(keyCode === 32){
        attach();
    }
}

function fly(){
    chain.bodyA = null;
}

function attach(){
    chain.bodyA = stone.body;
}


