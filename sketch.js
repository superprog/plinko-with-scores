const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;

var divisions = [];
//var particles = [];
var plinkos = [];

var divisionHeight = 300;

var score =0;
var turn = 0;

var PLAY =1;

var END=0;
var particles;
var gameState = PLAY;
var check=0

function setup() {

  engine = Engine.create();
  world = engine.world;
  createCanvas(500,800);

  ground1 = new Ground(240,790,800,20);

  for(var k=10;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=15;j<=width;j=j+40){
    plinkos.push(new Plinko(j,40,20));
  }

  for(var j=20;j<=width;j=j+50){
    plinkos.push(new Plinko(j,80,20));
  }


  for(var j=15;j<=width;j=j+40){
    plinkos.push(new Plinko(j,120,20));
  }

  for(var j=20;j<=width;j=j+50){
    plinkos.push(new Plinko(j,160,20));
  }

  for(var j=15;j<=width;j=j+40){
    plinkos.push(new Plinko(j,200,20));
  }
  
  

  //Engine.update(engine);
}

function draw() {
  background(0); 
  
  console.log(turn);

 
  ground1.display();
  
  Engine.update(engine); 

  fill("white");
  stroke("red");
  strokeWeight(4);
  textSize(20);
  text("Score : "+score,20,30);
  textSize(25);
  text("500 ",30,525);
  text("200 ",110,525);
  text("400 ",190,525);
  text("150 ",270,525);
  text("600 ",350,525);
  text("250 ",430,525);


  
 
  
  for(var k = 0;k<divisions.length;k++){
    divisions[k].display();
  }

  for(var j = 0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  
  
  
  //var particle;
 /*if(frameCount % 50===0){
    particle = new Particle(random(120,380),10,20);
    //particles1.push(particle);
  }
*/

  if(particles !== null && check!==0){
    console.log(particles)
    particles.display();
    if(particles.body.position.y>760){
    console.log(particles.body.position.x)
      if(particles.body.position.x<90){
        score = score+500;
      // particles =null;
      
      }
      if(particles.body.position.x>90 && particles.body.position.x<170 ){
        score = score+200;
        //particles =null;
      }
      if(particles.body.position.x>170 && particles.body.position.x<250 ){
        score = score+400;
        //particles = null;
      }
      if(particles.body.position.x>250 && particles.body.position.x<330 ){
        score = score+150;
      // particles = null;
      }
      if(particles.body.position.x>330 && particles.body.position.x<410 ){
        score = score+600;
        //particles = null;
      
      }
      if(particles.body.position.x>410 && particles.body.position.x<490 ){
        score = score+250;
        //particles = null;
      }
      particles = null;
    }
   
         

  }
  if( turn === 5)
  {
    //console.log("Hi");
   gameState = END
   textSize(70); 
   text("GAME OVER",150,250) 
  }

  
}

function mousePressed(){

check=1

  if(gameState!==END ){
    console.log(gameState);
    //particle = new Particle(mouseX,10,20);
    particles = new Particle(mouseX,10,20);
    console.log(particles);
    //particles1.push(particle);
    turn++;

   /*for(var m= 0;  m<particles1.length ;m++){
      particles1[m].display();
      console.log(particles1[m]);
    }*/
  }

 
  
}