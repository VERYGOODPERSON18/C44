const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var samurai1,samurai2;
var ninja1,ninja2;
var ground;

function setup(){
    var canvas = createCanvas(1920,1080);
    engine = Engine.create();
    world = engine.world;
ground.createSprite=(0,0,1920,1000);

   
  
}

function draw(){
    background("brown");
    Engine.update(engine);
   
   
}