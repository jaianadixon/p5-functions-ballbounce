var x = 300;
var y = 200;
var speedx = 8;
var speedy = 6;
var red= 210;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
    
 display();
 
   move();
    
  bounce();
}

function display(){
    //display ball
    stroke(255);
    strokeWeight(10);
    fill(50,250,250);
    rect(x, y, 150, 150);
}

function move(){
     //make ball move
    y = y + speedy;
    x = x + speedx;
}

function bounce(){
      //ball changes direction when it hits wall
    if(x>600 || x<0){
        speedx = -speedx;
    }
     if(y>400 || y<0){
        speedy = -speedy;
     }
}