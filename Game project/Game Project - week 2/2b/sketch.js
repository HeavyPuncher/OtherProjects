/*

The Game Project

Week 2 part b

*/

var floorPos_y;
var posX;
var posY;

var posXH;
var posYH;

var posXC;
var posYC;

var posXT;
var posXT;

var posXM;
var posYM;

function setup() 
{
    createCanvas(1024, 576);
    floorPos_y = height*3/4;
    //NB. we are now using a variable for the floor position
    posX = width/2;
    posY = floorPos_y;
    
    posXH = random(0,500)
    posYH = floorPos_y
    
    posXC = random(0,500)
    posYC = floorPos_y
    
    posXT = random(0,500)
    posYT = floorPos_y
    
    posXM = random(0,500)
    posYM = floorPos_y
    

    

}

function draw() 
{    
    background(100, 155, 255); //fill the sky blue
    
    noStroke();
    fill(0, 155, 0);
    rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
    
//Cloud
    fill(255,255,255)
    ellipse(posXC,posYC-400,30,30)
    ellipse(posXC+20,posYC-400,30,30)
    ellipse(posXC+40,posYC-400,30,30)
    
    fill(255,255,255)
    ellipse(posXC+120,posYC-400,30,30)
    ellipse(posXC+140,posYC-400,30,30)
    ellipse(posXC+160,posYC-400,30,30)
    
     fill(255,255,255)
    ellipse(posXC+420,posYC-400,30,30)
    ellipse(posXC+440,posYC-400,30,30)
    ellipse(posXC+460,posYC-400,30,30)
    
//Mountain
    fill(220,220,220)
    triangle(posXM+100,posYM,posXM+175,posYM-285,posXM+250,posYM)
    triangle(posXM+50,posYM,posXM+125,posYM-225,posXM+250,posYM)
    
//Tree with some variation
    fill(165,42,42)
    rect(posXT+100,posYT-100,30,100)
    fill(0,128,0)
    stroke(0,0,0)
    ellipse(posXT+115,posYT-140,80,130)
    
    fill(165,42,42)
    rect(posXT+500,posYT-100,30,100)
    fill(0,128,0)
    ellipse(posXT+515,posYT-140,80,100)
    
    fill(165,42,42)
    rect(posXT+250,posYT-100,30,100)
    fill(0,128,0)
    ellipse(posXT+265,posYT-140,80,160)
    
    
//house
    fill(178,34,34)
    rect(posXH,posYH-210,200,210)
    fill(255,255,0)
    rect(posXH+20,posYH-190,50,50)
    rect(posXH+130,posYH-190,50,50)
    fill(128,0,0)
    rect(posXH+10,posYH-230,180,20)
    rect(posXH+30,posYH-250,30,20)
    fill(255,255,0)
    rect(posXH+70,posYH-90,60,90)
    
//character facing forward
    fill(0,0,0);
    ellipse(posX,posY-25,20,20);
    rect(posX-8,posY-16,15,32);
    stroke(0,0,0);
    strokeWeight(3);
    line(posX+7,posY-15,posX+12,posY+10)
    stroke(0,0,0);
    line(posX-9,posY-15,posX-14,posY+10);
    line(posX-7,posY+35,posX-7,posY+16);
    line(posX+5,posY+35,posX+5,posY+16);
    strokeWeight(1);
}

function mousePressed()
{
    posX = mouseX
    posY = mouseY

    
}

