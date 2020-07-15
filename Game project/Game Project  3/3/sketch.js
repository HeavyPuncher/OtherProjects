/*

The Game Project

Week 3

Game interaction

*/
var posX =45;
var posY =396;

var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isJumping;
var isFalling;

var jewel = {x_pos: 100, y_pos: 100, size: 50, isFound: false};
var canyon = {x_pos: 300, width: 100};

function setup()
{
    isLeft = false
    isRight = false
    isJumping = false
    isFalling = false
    
    createCanvas(1024, 576);
    floorPos_y = height * 3/4;
    gameChar_x = width/2;
    gameChar_y = floorPos_y;
}

function draw()
{
    background(100,155,255); //fill the sky blue

    noStroke();
    fill(0,155,0);
    rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground


    //draw the canyon
    fill(50,50,0);
    rect(canyon.x_pos, floorPos_y, canyon.width, height - floorPos_y);


    //the game character
    fill(0)
    if(isLeft && isJumping)
    {
        // add your jumping-left code
    ellipse(posX6,posY6-25,15,20);
    rect(posX6-4,posY6-16,8,32);
    stroke(0,0,0);
    strokeWeight(3);
    line(posX6-5,posY6-16,posX6-17,posY6-25);
    line(posX6+4,posY6-15,posX6+17,posY6);
    line(posX6,posY6+13,posX6+10,posY6+25);
    line(posX6+11,posY6+25,posX6+20,posY6+25);
    line(posX6-15,posY6+14,posX6,posY6+14);
    line(posX6-20,posY6+25,posX6-15,posY6+15);
    strokeWeight(1);

    }
    else if(isRight && isJumping)
    {
        // add your jumping-right code
    ellipse(posX5,posY5-25,15,20);
    rect(posX5-4,posY5-16,8,32);
    stroke(0,0,0);
    strokeWeight(3);
    line(posX5+4,posY5-16,posX5+17,posY5-25);
    line(posX5-3,posY5-15,posX5-17,posY5);
    line(posX5,posY5+13,posX5-10,posY5+25);
    line(posX5-11,posY5+25,posX5-20,posY5+25);
    line(posX5+15,posY5+14,posX5,posY5+14);
    line(posX5+20,posY5+25,posX5+15,posY5+15);
    strokeWeight(1);
    
    }
    else if(isLeft)
    {
        // add your walking left code
    ellipse(posX,posY-25,15,20);
    rect(posX-4,posY-16,8,32);
    stroke(0,0,0);
    strokeWeight(3);
    line(posX,posY+15,posX,posY+35);
    line(posX-3,posY+35,posX,posY+35);
    line(posX-10,posY+5,posX,posY-20);
    strokeWeight(1);

    }
    else if(isRight)
    {
        // add your walking right code
    ellipse(posX,posY-25,15,20);
    rect(posX-4,posY-16,8,32);
    stroke(0,0,0);
    strokeWeight(3);
    line(posX,posY+15,posX,posY+35);
    line(posX+3,posY+35,posX,posY+35);
    line(posX+10,posY+5,posX,posY-20);
    strokeWeight(1);

    }
    else if(isJumping || isFalling)
    {
        // add your jumping facing forwards code
    fill(0,0,0);
    ellipse(posX2,posY2-25,20,20);
    rect(posX2-8,posY2-16,15,32);
    stroke(0,0,0);
    strokeWeight(3)
    line(posX2+7,posY2-15,posX2+18,posY2-35);
    stroke(0,0,0);
    line(posX2-9,posY2-15,posX2-18,posY2-35);
    line(posX2-14,posY2+35,posX2-7,posY2+16);
    line(posX2+10,posY2+35,posX2+5,posY2+16);
    strokeWeight(1);

    }
    else
    {
        // add your standing front facing code
    fill(0,0,0);
    ellipse(posX,posY-25,20,20);
    rect(posX-8,posY-16,15,32);
    stroke(0,0,0);
    strokeWeight(3);
    line(posX+7,posY-15,posX+12,posY+10);
    stroke(0,0,0);
    line(posX-9,posY-15,posX-14,posY+10);
    line(posX-7,posY+35,posX-7,posY+16);
    line(posX+5,posY+35,posX+5,posY+16);
    strokeWeight(1);

    }
    if(isLeft == true)
    {
        posX -= 3;
    }
    
    if(isRight == true)
    {
        posX += 3;
    }
    
    if(isJumping == true)
    {
        posY -= 3;
    }
    
    if(posY <= 240)
    {
        isJumping = false;
        isfalling = true;
    }
    
    if(isfalling == true)
    {
        posY += 3;
    }
    
    if(posY == 395)
        {
            isfalling = false
        }
}


function keyPressed()
{
    // if statements to control the animation of the character when
    // keys are pressed.
    
    if(keyCode == LEFT_ARROW)
    {
       isLeft = true
    }
    
    if(keyCode == RIGHT_ARROW)
    {    
        isRight = true   
    }
//moving left and right
    if(keyCode == 32)
    {
        isJumping = true
    }
//jumping up
}

function keyReleased()
{
    // if statements to control the animation of the character when
    // keys are released.
    if( isLeft == true ) {
        isLeft = false
    } else {
      isLeft = false}
    {
    if( isRight == true ) {
        isRight = false
    } else {
      isRight = false}
    }
    
}
//moving left and right
