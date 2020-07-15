/*

The Game Project

Week 3

Game interaction

*/


var posX ;
var posY ;

//var gameChar_x;
//var gameChar_y;
var floorPos_y;

var isLeft;      
var isRight;
var isJumping;
var isFalling;

var isFound;

var item = {x_pos: "100", y_pos: "400", size: "50", isFound: "false"};
var canyon = {x_pos: 300, width: 100};

function setup()
{
    isLeft = false
    isRight = false
    isJumping = false
    isFalling = false
    
    createCanvas(1024, 576);
    floorPos_y = height * 3/4;
    posX = width/2;
    posY = floorPos_y;
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
    if(isLeft && isJumping)
    {
        // add your jumping-left code
    ellipse(posX,posY-25,15,20);
    rect(posX-4,posY-16,8,32);
    stroke(0,0,0);
    strokeWeight(3);
    line(posX-5,posY-16,posX-17,posY-25);
    line(posX+4,posY-15,posX+17,posY);
    line(posX,posY+13,posX+10,posY+25);
    line(posX+11,posY+25,posX+20,posY+25);
    line(posX-15,posY+14,posX,posY+14);
    line(posX-20,posY+25,posX-15,posY+15);
    strokeWeight(1);

    }
    else if(isRight && isJumping)
    {
        // add your jumping-right code
    ellipse(posX,posY-25,15,20);
    rect(posX-4,posY-16,8,32);
    stroke(0,0,0);
    strokeWeight(3);
    line(posX+4,posY-16,posX+17,posY-25);
    line(posX-3,posY-15,posX-17,posY);
    line(posX,posY+13,posX-10,posY+25);
    line(posX-11,posY+25,posX-20,posY+25);
    line(posX+15,posY+14,posX,posY+14);
    line(posX+20,posY+25,posX+15,posY+15);
    strokeWeight(1);

    }
    else if(isLeft)
    {
        // add your walking left code
        fill(0)
    ellipse(posX,posY-25,15,20);
        fill(255,0,0)
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
    fill(0)
    ellipse(posX,posY-25,15,20);
        fill(255,0,0)
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
    ellipse(posX,posY-25,20,20);
    rect(posX-8,posY-16,15,32);
    stroke(0,0,0);
    strokeWeight(3)
    line(posX+7,posY-15,posX+18,posY-35);
    stroke(0,0,0);
    line(posX-9,posY-15,posX-18,posY-35);
    line(posX-14,posY+35,posX-7,posY+16);
    line(posX+10,posY+35,posX+5,posY+16);
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
    
    if(isJumping)
    {
        posY -= 4;
    }
    
    
    
    else if(isFalling)
    {
        posY += 4;
    }
    
    if(posY == floorPos_y)
        {
            isFalling = false
        }
    if(item.isFound)
        {
            noStroke()
            fill(0,0,255)
            rect(item.x_pos,item.y_pos,item.size,item.size)
            fill(255,0,0)
            rect(117,400,15,50)
            rect(100,417,50,15)
//            stroke(0)
//            line(item.x_pos,100,item.x_pos,450)
        }
    
    if(posX < item.x_pos)
        {
            item.isFound = false
        }
    
    if(posX >= 300 && posX <= 400 && ! isJumping)
        {
            isFalling = true
        }
    

    
    
//reward object
    
}
function keyPressed()
{
    // if statements to control the animation of the character when
    // keys are pressed.
      if(keyCode == LEFT_ARROW)
    {
       isLeft = true
        console.log("left press")
    }
    
    if(keyCode == RIGHT_ARROW)
    {    
        isRight = true
        console.log("right press")
    }
//moving left and right
    if(keyCode == 32)
    {
        isJumping = true
        console.log("space press")
    }
}
function keyReleased()
{
    // if statements to control the animation of the character when
    // keys are released.
    if(keyCode == LEFT_ARROW ) {
        isLeft = false
        console.log("left release")
    }
    {
    if(keyCode == RIGHT_ARROW ) {
        isRight = false
        console.log("right release")
    }
    }if(keyCode == 32)
    {
        isJumping = false;
        isFalling = true;
    }
    
}
