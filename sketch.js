const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var grd1,grd2,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,grd3,Polygon;


function preload(){

}


function setup(){
 
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

   grd1=new Ground(240,790,500,10)




















}

function draw(){
  background(255)
  
  grd1.display();
}

