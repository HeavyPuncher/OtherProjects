/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;
var clouds;
var mountains;
var trees;
var houseXs;



function setup()
{
    createCanvas(1024, 576);
    floorPos_y = height * 3/4;
    gameChar_x = width/2;
    gameChar_y = floorPos_y;

    // Boolean variables to control the movement of the game character.
    isLeft = false;
    isRight = false;

    // Variable to control the background scrolling.
    scrollPos = 0;

    // Initialise arrays of scenery objects.
    houseXs = [-250,400,800,1100,1400];
    clouds = [300,200,500,-100]
    mountains = [{xpos:100,height:100},{xpos:300,height:100},{xpos:500,height:100},{xpos:850,height:100},{xpos:1000,height:100},{xpos:-800,height:100},{xpos:-500,height:100},{xpos:-150,height:100}]
    trees = [300,600,1000,1500]
}

function draw()
{
    background(100, 155, 255); //fill the sky blue
    
    noStroke();
    fill(0, 155, 0);
    rect(0, floorPos_y, width, height/4); //draw some green ground
   

// Draw clouds.
    push();
    translate(scrollPos*0.3,0);
    
    for(var i = 0; i <= clouds.length; i++){
    fill(255,255,255)
    ellipse(clouds[0],clouds[1]-150,35,35)
    ellipse(clouds[0]+20,clouds[1]-150,50,50)
    ellipse(clouds[0]+40,clouds[1]-150,35,35)
    
    fill(255,255,255)
    ellipse(clouds[1]+320,clouds[0]-250,35,35)
    ellipse(clouds[1]+340,clouds[0]-250,50,50)
    ellipse(clouds[1]+360,clouds[0]-250,35,35)
    
     fill(255,255,255)
    ellipse(clouds[2]+420,clouds[1]-150,35,35)
    ellipse(clouds[2]+440,clouds[1]-150,50,50)
    ellipse(clouds[2]+460,clouds[1]-150,35,35)
        
    fill(255,255,255)
    ellipse(clouds[3]-120,clouds[2]-450,35,35)
    ellipse(clouds[3]-140,clouds[2]-450,50,50)
    ellipse(clouds[3]-160,clouds[2]-450,35,35)  
    }
    pop()
// Draw mountains.
    push();
    translate(scrollPos*0.2,0);
    for(var i =0; i < mountains.length; i++)
    {
    fill(220,220,220)
    triangle(mountains[i].xpos+320,mountains[i].height+332,mountains[i].xpos+550,mountains[i].height+332,mountains[i].xpos+400,mountains[i].height)

    }
    pop()
// Draw trees.
    push();
    translate(scrollPos*0.8,0);
    
    for(var i = 0; i <= trees.length; i++)
    {
//    fill(165,42,42)
//    rect(trees[i]-200,100,30,100)
//    fill(0,128,0)
    stroke(0,0,0)
//    ellipse(trees[i]-250,140,80,130)
//    
//    fill(165,42,42)
//    rect(trees[i]-200,100,30,100)
//    fill(0,128,0)
//    ellipse(trees[i]-250,140,80,100)
    
    fill(165,42,42)
    rect(trees[i]-263,332,30,100)
    fill(0,128,0)
    ellipse(trees[i]-250,260,80,160)
    }
    pop()
// Draw houses
    
    push();
    translate(scrollPos*1.2,0);
    
    for(var i =0; i < houseXs.length; i++)
    {
    fill(178,34,34);
    rect(houseXs[i],floorPos_y- 210,200,210);
    fill(255,255,0);
    rect(houseXs[i]+23,floorPos_y -200,50,50);
    rect(houseXs[i]+130,floorPos_y-200,50,50);
    fill(128,0,0);
    rect(houseXs[i]+10,floorPos_y-230,180,20);
    rect(houseXs[i]+30,floorPos_y-250,30,20);
    fill(255,255,0);
    rect(houseXs[i]+70,floorPos_y-90,60,90);
    }
    
    pop()
// Draw the game character.
    
    fill(0,0,0);
    ellipse(gameChar_x,gameChar_y-25,20,20);
    rect(gameChar_x-8,gameChar_y-16,15,32);
    stroke(0,0,0);
    strokeWeight(3);
    line(gameChar_x+7,gameChar_y-15,gameChar_x+12,gameChar_y+10);
    stroke(0,0,0);
    line(gameChar_x-9,gameChar_y-15,gameChar_x-13,gameChar_y+10);
    line(gameChar_x-7,gameChar_y+35,gameChar_x-7,gameChar_y+16);
    line(gameChar_x+5,gameChar_y+35,gameChar_x+5,gameChar_y+16);
    strokeWeight(1);

    if(isLeft)
    {
        if(gameChar_x > width * 0.2)
        {
            gameChar_x -= 5;
        }
        else
        {
            scrollPos += 5;
        }
    }

    if(isRight)
    {
        if(gameChar_x < width * 0.8)
        {
            gameChar_x  += 5;
        }
        else
        {
            scrollPos -= 5; // negative for moving against the background
        }

    }
}

function keyPressed()
{

    if(key == "A" || keyCode == 37)
    {
        isLeft = true;
    }

    if(key == "D" || keyCode == 39)
    {
        isRight = true;
    }

}

function keyReleased()
{
    if(key == "A" || keyCode == 37)
    {
        isLeft = false;
    }

    if(key == "D" || keyCode == 39)
    {
        isRight = false;
    }
}
