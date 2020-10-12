const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisions = [];
var particles1 = [];
var plinkos = [];

var divisionHeight = 300;

var score =0;
var turn = 0;

var PLAY =1;

var END=0;
var particle;
var gameState = PLAY;
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
  
  

  Engine.run(engine);
}

function draw() {
  background(0); 
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

  if(particle !== undefined){
    particle.display();
    if(particle.body.position.y>760){
    
      if(particle.body.position.x<90){
        score = score+500;
        particle =undefined;
      
      }
      if(particle.body.position.x>90 && particle.body.position.x<170 ){
        score = score+200;
        particle =undefined;
      }
      if(particle.body.position.x>170 && particle.body.position.x<250 ){
        score = score+400;
        particle = undefined;
      }
      if(particle.body.position.x>250 && particle.body.position.x<330 ){
        score = score+150;
        particle = undefined;
      }
      if(particle.body.position.x>330 && particle.body.position.x<410 ){
        score = score+600;
        particle = undefined;
      }
      if(particle.body.position.x>410 && particle.body.position.x<490 ){
        score = score+250;
        particle = undefined;
      }
     
    }

  }
  
  


  ground1.display();
  drawSprites();

   
 
//mousePressed();

}

function keyPressed(){
  if(keyCode===32){
    if(gameState===PLAY ){
    console.log(gameState);
    particle = new Particle(mouseX,10,20);
   
    console.log(particle);
    //particles1.push(particle);
    turn++;

   /*for(var m= 0;  m<particles1.length ;m++){
      particles1[m].display();
      console.log(particles1[m]);
    }*/
    
  }

}
  
}