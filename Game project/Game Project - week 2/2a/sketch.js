/*

The Game Project

Week 2 - part a

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used lots of shape functions to create a detailed
game character

** Only submit your sketch.js **

*/
//head for standing front facing
var posX =45;
var posY =100;

var posX2 =245;
var posY2 =100

var posX3 =45
var posY3 =300

var posX4 =245
var posY4 =300

var posX5 =45
var posY5 =500

var posX6 =245
var posY6 =500



function setup()
{
    createCanvas(400, 600);
}

function draw()
{
    background(255);

//Standing, facing frontwards
    stroke(100);
    noFill();
    rect(20, 60, 50, 80);
    noStroke();
    fill(0);
    text("1. standing front facing", 20, 160);

    //Add your code here ...
   
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
   
    
//Jumping facing forwards
    stroke(100);
    noFill();
    rect(220, 60, 50, 80);
    noStroke();
    fill(0);
    text("2. jumping facing forwards", 220, 160);

    //Add your code here ...
    fill(0,0,0);
    ellipse(posX2,posY2-25,20,20);
    rect(posX2-8,posY2-16,15,32)
    stroke(0,0,0)
    strokeWeight(3)
    line(posX2+7,posY2-15,posX2+18,posY2-35)
    stroke(0,0,0)
    line(posX2-9,posY2-15,posX2-18,posY2-35)
    line(posX2-14,posY2+35,posX2-7,posY2+16);
line(posX2+10,posY2+35,posX2+5,posY2+16);
strokeWeight(1);

    
    

//Walking, turned left
    stroke(100);
    noFill();
    rect(20, 260, 50, 80);
    noStroke();
    fill(0);
    text("3. Walking left", 20, 360);

    //Add your code here ...
    ellipse(posX3,posY3-25,15,20);
    rect(posX3-4,posY3-16,8,32);
    stroke(0,0,0);
    strokeWeight(3);
    line(posX3,posY3+15,posX3,posY3+35);
    line(posX3-3,posY3+35,posX3,posY3+35);
    line(posX3-10,posY3+5,posX3,posY3-20);
    strokeWeight(1)


    //Walking, turned right
    stroke(100);
    noFill();
    rect(220, 260, 50, 80);
    noStroke();
    fill(0);
    text("4. Walking right", 220, 360);

    //Add your code here ...
    ellipse(posX4,posY4-25,15,20);
    rect(posX4-4,posY4-16,8,32);
    stroke(0,0,0);
    strokeWeight(3)
    line(posX4,posY4+15,posX4,posY4+35)
    line(posX4+3,posY4+35,posX4,posY4+35)
    line(posX4+10,posY4+5,posX4,posY4-20)
    strokeWeight(1)


//Jumping right
    stroke(100);
    noFill();
    rect(20, 460, 50, 80);
    noStroke();
    fill(0);
    text("5. Jumping to the right", 20, 560);

    //Add your code here ...
    ellipse(posX5,posY5-25,15,20);
    rect(posX5-4,posY5-16,8,32);
    stroke(0,0,0);
    strokeWeight(3)
    line(posX5+4,posY5-16,posX5+17,posY5-25)
    line(posX5-3,posY5-15,posX5-17,posY5)
    line(posX5,posY5+13,posX5-10,posY5+25)
    line(posX5-11,posY5+25,posX5-20,posY5+25)
    line(posX5+15,posY5+14,posX5,posY5+14)
    line(posX5+20,posY5+25,posX5+15,posY5+15)
    strokeWeight(1)
    
    


//Jumping to the left
    stroke(100);
    noFill();
    rect(220, 460, 50, 80);
    noStroke();
    fill(0);
    text("6. Jumping to the left", 220, 560);

    //Add your code here ...
    ellipse(posX6,posY6-25,15,20);
    rect(posX6-4,posY6-16,8,32);
    stroke(0,0,0);
    strokeWeight(3)
    line(posX6-5,posY6-16,posX6-17,posY6-25)
    line(posX6+4,posY6-15,posX6+17,posY6)
    line(posX6,posY6+13,posX6+10,posY6+25)
    line(posX6+11,posY6+25,posX6+20,posY6+25)
    line(posX6-15,posY6+14,posX6,posY6+14)
    line(posX6-20,posY6+25,posX6-15,posY6+15)
    strokeWeight(1)

}
