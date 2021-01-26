const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";
var scoringSound;

function preload(){

scoringSound = loadSound("jump.wav");

}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   //creating the divisions
   for(var k = 5; k <= width; k = k + 79){
    divisions.push(new Divisions(k, 700));
  }
    
  //creating the plinkos
    for(var j = 24; j <= width; j = j + 60){
      plinkos.push(new Plinko(j, 70));
  }

  for(var j = 55; j <= width; j = j + 60){
      plinkos.push(new Plinko(j, 140))
  }

  for(var j = 24; j <= width; j = j + 60){
      plinkos.push(new Plinko(j, 210));
  }

  for(var j = 55; j <= width; j = j + 60){
      plinkos.push(new Plinko(j, 280));
  }

  for(var j = 24; j <= width; j = j + 60){
      plinkos.push(new Plinko(j, 350));
  }

  for(var j = 55; j <= width; j = j + 60){
      plinkos.push(new Plinko(j, 420));
  }

  for(var j = 24; j <= width; j = j + 60){
    plinkos.push(new Plinko(j, 490));
}
    
}
 
function draw() {
  background(0);

  textSize(18);
  text("Score : "+score,20,40);
  fill("white");

  textSize(12);
  text("You have 5 chances to increase your score",200,20);
  fill("white");
  
  textSize(25);
    fill(255);
    text("500", 25, 600);
    text("450", 103, 600);
    text("100", 181, 600);
    text("200", 261, 600);
    text("300", 341, 600);
    text("300", 419, 600);
    text("200", 498, 600);
    text("100", 578, 600);
    text("450", 657, 600);
    text("500", 736, 600);
  
  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
    
    textSize(80);
    text("GameOver", 200, 300);
  }

  
  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }

  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  
 
  if(particle != null){
    particle.display();
    
    if(particle.body.position.y > 760){

        if(particle.body.position.x > 10 && particle.body.position.x < 90){
            score = score + 500;
            particle=null;
            scoringSound.play();
            if ( count>= 5)  gameState ="end";
        }

        else if(particle.body.position.x > 91 && particle.body.position.x < 170){
            score = score + 450;
            particle=null;
            scoringSound.play();
            if ( count>= 5)  gameState ="end";
        }

        else if(particle.body.position.x > 171 && particle.body.position.x < 250){
            score = score + 100;
            particle=null;
            scoringSound.play();
            if ( count>= 5)  gameState ="end";
        }

        else if(particle.body.position.x > 251 && particle.body.position.x < 330){
            score = score + 200;
            particle=null;
            scoringSound.play();
            if ( count>= 5)  gameState ="end";
        }

        else if(particle.body.position.x > 331 && particle.body.position.x < 405){
            score = score + 300;
            particle=null;
            scoringSound.play();
            if ( count>= 5)  gameState ="end";
        }

        else if(particle.body.position.x > 406 && particle.body.position.x < 486){
          score = score + 300;
          particle=null;
          scoringSound.play();
          if ( count>= 5)  gameState ="end";
        }

        else if(particle.body.position.x > 487 && particle.body.position.x < 565){
            score = score + 200;
            particle=null;
            scoringSound.play();
            if ( count>= 5)  gameState ="end";
        }

        else if(particle.body.position.x > 566 && particle.body.position.x < 645){
            score = score + 100;
            particle=null;
            scoringSound.play();
            if ( count>= 5)  gameState ="end";
        }

        else if(particle.body.position.x > 646 && particle.body.position.x < 725){
            score = score + 450;
            particle=null;
            scoringSound.play();
            if ( count>= 5)  gameState ="end";
        }

        else if(particle.body.position.x > 726 && particle.body.position.x < 800){
            score = score + 500;
            particle=null;
            scoringSound.play();
            if ( count>= 5)  gameState ="end";
        }
    }
}

}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 12.5, 12.5); 
  }   
}