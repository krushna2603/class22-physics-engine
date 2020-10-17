const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies


var engineV,worldV,objectV;


var ground,ball;
function setup() {
  var canvas =  createCanvas(400,400);
  //Creates the physics engine
  engineV = Engine.create();
 // Add the engine to the world
  worldV=engineV.world;

  var ground_options={
  isStatic : true
  }
  // create the physical body for the object
 ground = Bodies.rectangle(200,380,200,20,ground_options);
 //Add the object to the world
 World.add(worldV,ground);
var ball_options={
  restitution :2.0
}

ball=Bodies.circle(200,100,20,ball_options);
 
console.log(ground);
 World.add(worldV,ball);
 
}

function draw() {
  background("lightgreen"); 
  Engine.update(engineV);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}