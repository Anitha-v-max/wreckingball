const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var engine,world;
var ground1, box1, box2, box3, box4, box5,box6,box7;
var rope1;
function setup(){
    createCanvas(3000,800);
    engine= Engine.create();
    world=engine.world;

    ground1= new ground(600,600,1200,20);

    box1= new box(900,100,70,70);
    box2= new box(900,100,70,70);
    box3= new box(900,100,70,70);
    box4= new box(900,100,70,70);
    box5= new box(900,100,70,70);
    box6= new box(900,100,70,70);
    box7= new box(800,100,70,70);
    box8= new box(800,100,70,70);
    box9= new box(800,100,70,70);
    box10= new box(800,100,70,70);
    box11= new box(800,100,70,70);
    box12= new box(800,100,70,70);

    ball1= new ball(200,200,80,80);
    rope1= new rope(ball1.body,{ x:500 , y:50 }) ;
}

function draw(){
    background(180);
    Engine.update(engine);

    ground1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();

ball1.display();
rope1.display();


}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX, y:mouseY})
}