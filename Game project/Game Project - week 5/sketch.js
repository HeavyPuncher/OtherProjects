/*

The Game Project 5 - Making a complete level

Week 7

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var realPos;

var isLeft;
var isRight;
var isJumping;
var isFalling;

var clouds;
var mountains;
var trees;
var houseXs;

var t_canyon = {x_pos: 300, width: 100};
var Present = {x_pos: 100, y_pos: 400, size: 50, isFound: false};

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	realPos = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isJumping = false;
	isFalling = false;

	// Initialise arrays of scenery objects.
    houseXs = [-250,400,800,1100,1400];
    clouds = [{xpos: 300, height:200},{xpos: 500,height:200}, {xpos:0, height:200}, {xpos:900,height:200}];
    mountains = [{xpos:100,height:100},{xpos:300,height:100},{xpos:500,height:100},{xpos:850,height:100},{xpos:1000,height:100},{xpos:-800,height:100},{xpos:-500,height:100},{xpos:-150,height:100}]
    trees = [300,600,1000,1500]
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

// Draw clouds.
    push();
    translate(scrollPos*0.3,0);
    
    DrawCloud();
    
    pop();
// Draw mountains.
    push();
    translate(scrollPos*0.2,0);
    
    DrawMountain();
    
    pop();
// Draw trees.
    push();
    translate(scrollPos*0.8,0);
    
    DrawTree();
    
    pop();
// Draw houses.
    push();
    translate(scrollPos*1.2,0);
    
    DrawHouse();
    
    pop();
// Draw canyons.
    push();
    translate(scrollPos*1.2,0);
    
    drawCanyon(t_canyon);
    checkCanyon(t_canyon);
    
    pop();
// Draw pickup items.
    push();
    translate(scrollPos*1.2,0);
    
    drawPresent(Present);
    checkPresent(Present);
    
    pop();
// Draw game character.
    drawGameChar();
  
	// Logic to make the game character move or the background scroll.
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

	// Logic to make the game character rise and fall.
	if(gameChar_y < floorPos_y)
	{
			gameChar_y += 2;
			isJumping = true;
	}
	else
	{
			isJumping = false;
	}

	if(isFalling)
	{
			gameChar_y += 5;
	}

	// Update real position of gameChar for collision detection.
	realPos = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed(){

		// console.log(keyCode);
		// console.log(key);

	if(key == 'A' || keyCode == 37)
	{
			isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
			isRight = true;
	}

	if(key == ' ' || key == 'W')
	{
			if(!isJumping)
			{
					gameChar_y -= 100;
			}
	}
}

function keyReleased(){

	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}

}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	
    if(isLeft && isJumping)
    {
    //Jumping-left code
    ellipse(gameChar_x,gameChar_y-25,15,20);
    rect(gameChar_x-4,gameChar_y-16,8,32);
    stroke(0,0,0);
    strokeWeight(3);
    line(gameChar_x-5,gameChar_y-16,gameChar_x-17,gameChar_y-25);
    line(gameChar_x+4,gameChar_y-15,gameChar_x+17,gameChar_y);
    line(gameChar_x,gameChar_y+13,gameChar_x+10,gameChar_y+25);
    line(gameChar_x+11,gameChar_y+25,gameChar_x+20,gameChar_y+25);
    line(gameChar_x-15,gameChar_y+14,gameChar_x,gameChar_y+14);
    line(gameChar_x-20,gameChar_y+25,gameChar_x-15,gameChar_y+15);
    strokeWeight(1);

    }
    else if(isRight && isJumping)
    {
    //Jumping-right code
    ellipse(gameChar_x,gameChar_y-25,15,20);
    rect(gameChar_x-4,gameChar_y-16,8,32);
    stroke(0,0,0);
    strokeWeight(3);
    line(gameChar_x+4,gameChar_y-16,gameChar_x+17,gameChar_y-25);
    line(gameChar_x-3,gameChar_y-15,gameChar_x-17,gameChar_y);
    line(gameChar_x,gameChar_y+13,gameChar_x-10,gameChar_y+25);
    line(gameChar_x-11,gameChar_y+25,gameChar_x-20,gameChar_y+25);
    line(gameChar_x+15,gameChar_y+14,gameChar_x,gameChar_y+14);
    line(gameChar_x+20,gameChar_y+25,gameChar_x+15,gameChar_y+15);
    strokeWeight(1);

    }
    else if(isLeft)
    {
    //Walking left code
    fill(0)
    ellipse(gameChar_x,gameChar_y-25,15,20);
    fill(255,0,0)
    rect(gameChar_x-4,gameChar_y-16,8,32);
    stroke(0,0,0);
    strokeWeight(3);
    line(gameChar_x,gameChar_y+15,gameChar_x,gameChar_y+35);
    line(gameChar_x-3,gameChar_y+35,gameChar_x,gameChar_y+35);
    line(gameChar_x-10,gameChar_y+5,gameChar_x,gameChar_y-20);
    strokeWeight(1);
    
    }
    else if(isRight)
    {
    //Walking right code
    fill(0)
    ellipse(gameChar_x,gameChar_y-25,15,20);
    fill(255,0,0)
    rect(gameChar_x-4,gameChar_y-16,8,32);
    stroke(0,0,0);
    strokeWeight(3);
    line(gameChar_x,gameChar_y+15,gameChar_x,gameChar_y+35);
    line(gameChar_x+3,gameChar_y+35,gameChar_x,gameChar_y+35);
    line(gameChar_x+10,gameChar_y+5,gameChar_x,gameChar_y-20);
    strokeWeight(1);

    }
    else if(isJumping || isFalling)
    {
    //Jumping facing forwards code
    fill(0,0,0);
    ellipse(gameChar_x,gameChar_y-25,20,20);
    rect(gameChar_x-8,gameChar_y-16,15,32);
    stroke(0,0,0);
    strokeWeight(3)
    line(gameChar_x+7,gameChar_y-15,gameChar_x+18,gameChar_y-35);
    stroke(0,0,0);
    line(gameChar_x-9,gameChar_y-15,gameChar_x-18,gameChar_y-35);
    line(gameChar_x-14,gameChar_y+35,gameChar_x-7,gameChar_y+16);
    line(gameChar_x+10,gameChar_y+35,gameChar_x+5,gameChar_y+16);
    strokeWeight(1);

    }
    else
    {
    // draw game character
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
    
    }
}
// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function DrawCloud()
{
    for(var i = 0; i < clouds.length; i++){
    fill(255,255,255);
    ellipse(clouds[i].xpos,clouds[i].height-150,35,35);
    ellipse(clouds[i].xpos+20,clouds[i].height-150,50,50);
    ellipse(clouds[i].xpos+40,clouds[i].height-150,35,35);
    
 
    }
}
// Function to draw mountains objects.
function DrawMountain()
{
    for(var i =0; i < mountains.length; i++)
    {
    fill(220,220,220)
    triangle(mountains[i].xpos+320,mountains[i].height+332,mountains[i].xpos+550,mountains[i].height+332,mountains[i].xpos+400,mountains[i].height)

    }
}
// Function to draw trees objects.
function DrawTree()
{
    for(var i = 0; i <= trees.length; i++)
    {
    stroke(0,0,0)
    fill(165,42,42)
    rect(trees[i]-263,332,30,100)
    fill(0,128,0)
    ellipse(trees[i]-250,260,80,160)
    }
}
// Function to draw houses objects.
function DrawHouse()
{
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
}

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
    
    noStroke()
    fill(50,50,0);
    rect(t_canyon.x_pos, floorPos_y, t_canyon.width, height - floorPos_y);
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
    if(realPos > t_canyon.x_pos && realPos < t_canyon.x_pos + t_canyon.width)
    {
        if(gameChar_y >= floorPos_y)
        {
            console.log("canyon")
            isFalling = true;
        }
    }
}

// ----------------------------------
// Pick-up render and check functions
// ----------------------------------

// Function to draw pick-up objects.
function drawPresent(Present)
{
    if(!Present.isFound){
    fill(0,0,255)
            rect(Present.x_pos,Present.y_pos,Present.size,Present.size)
            fill(255,0,0)
            rect(117,400,15,50)
            rect(100,417,50,15)
}
}
// Function to check character has picked up an item.
function checkPresent(Present)
{
    if(realPos > Present.x_pos && realPos < Present.x_pos + Present.size)
        {
            if(gameChar_y <= floorPos_y)
                {
                    console.log("Here is your christmas present");
                    Present.isFound = true;
                }
            
        }
}