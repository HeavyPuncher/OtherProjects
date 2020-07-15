/*

The Game Project 6 - Making a complete level part 2

Week 8

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

var t_canyons;
var Presents;

var score;
var isWon;
var lives;
var isLost;
//var life;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;

    score = 0;
    lives = 3;
    
    startGame();

}

function startGame()
{
    // Variable to control the background scrolling.
	scrollPos = 0;
    gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	realPos = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isJumping = false;
	isFalling = false;
    isWon = false;
    isLost = false;
    
	// Initialise arrays of scenery objects.
    houseXs = [];
    
    for(var i =0 ; i < 15; i++)
        {
            var h = {xpos: random(0,8000), height:300};
            houseXs.push(h);
        }
    
    clouds = [];
    
    for(var i =0 ; i < 100; i++)
    {
        var c = {xpos: random(0,8000), height: random(180,300),
        fill: random(150,250) };
        clouds.push(c);
    }
    
    mountains = [{xpos:100,height:100},{xpos:300,height:100},{xpos:500,height:100},{xpos:850,height:100},{xpos:1000,height:100},{xpos:-800,height:100},{xpos:-500,height:100},{xpos:-150,height:100}];
    
    for(var i =0 ; i <40; i++)
    {
        var m = {xpos: random(0,5000), height: random(100,200)};
        mountains.push(m);
    }
    
    trees = [];
    
    for(var i=0 ; i < 20; i++)
    {
        var t = {xpos: random(0,8000), height:250, fill: random(200,250)};
        trees.push(t);
    }                                               
    Presents = 
        [
            {x_pos: 100, y_pos: 400, size: 50, isFound: false},
            {x_pos: 750, y_pos: 400, size: 50, isFound: false},
            {x_pos: 950, y_pos: 400, size: 50, isFound: false},
            {x_pos: 600, y_pos: 400, size: 50, isFound: false}
        ]
    t_canyons = 
        [
            {x_pos: 300, width: 100},
            {x_pos: 800, width: 100},
            {x_pos: 1100, width: 70}
        ]
}

function draw()
{
	noStroke();
    background(100, 155, 255); // fill the sky blue

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
// draw some green ground
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); 
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
    
    for(var i = 0; i < t_canyons.length; i++)
    {
    drawCanyon(t_canyons[i]);
    checkCanyon(t_canyons[i]);
    }
    pop();
// Draw pickup items.
    push();
    translate(scrollPos*1.2,0);
    
    for(var i = 0; i < Presents.length; i++)
    {
    drawPresent(Presents[i]);
    checkPresent(Presents[i]);
    }
    pop();
    
//Winning the game
    checkPlayerWon();
    
//Losing in the game
    checkPlayerDied();
       
    
//Onscreen lives 
    fill(255,0,0);
    noStroke();
    textSize(20);
    text("lives:" + lives,20,20);

//Onscreen score    
    fill(0);
    noStroke();
    textSize(20);
    text("score: " + score,20,40);
    
//Game over for Losing and winning
    if(isLost == true && lives ==0)
     {
    fill(255,0,0);
    noStroke();
    textSize(50);
    text("Game over - you lost!", width-750, height/2)
    return; 
     }
    
    if(isWon == true && lives > 0){
    fill(0,255,0);
    noStroke();
    textSize(50);
    text("Game over - you won!", width-750, height/2)
    return; 
       }
    
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
    if(isLost || isWon)
{
    if(key == ' ')
    {
        nextLevel();
    }
    return;
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
    fill(clouds[i].fill);
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
    for(var i = 0; i < trees.length; i++)
    {
    stroke(0,0,0)
    fill(165,42,42)
    rect(trees[i].xpos,floorPos_y-100,30,100)
    fill(0,128,0)
        ellipse(trees[i].xpos+15,trees[i].height+25,80,160)
    }
}
// Function to draw houses objects.
function DrawHouse()
{
    for(var i =0; i < houseXs.length; i++)
    {
    fill(178,34,34);
    rect(houseXs[i].xpos,floorPos_y- 210,200,210);
    fill(255,255,0);
    rect(houseXs[i].xpos+23,floorPos_y -200,50,50);
    rect(houseXs[i].xpos+130,floorPos_y-200,50,50);
    fill(128,0,0);
    rect(houseXs[i].xpos+10,floorPos_y-230,180,20);
    rect(houseXs[i].xpos+30,floorPos_y-250,30,20);
    fill(255,255,0);
    rect(houseXs[i].xpos+70,floorPos_y-90,60,90);
    }
}

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyons)
{
    
    noStroke()
    fill(50,50,0);
    rect(t_canyons.x_pos, floorPos_y, t_canyons.width, height - floorPos_y);
}

// Function to check character is over a canyon.

function checkCanyon(t_canyons)
{
    if(realPos > t_canyons.x_pos && realPos < t_canyons.x_pos + t_canyons.width)
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
    if(!Present.isFound)
    {
    fill(0,0,255)
        rect(Present.x_pos,Present.y_pos,Present.size,Present.size)
            fill(255,0,0)
        rect(Present.x_pos,Present.y_pos+15,Present.size,Present.size-30)
            
        rect(Present.x_pos+15,Present.y_pos,Present.size-30,Present.size)
    }
}

// Function to check character has picked up an item.
function checkPresent(Present)
{
    if(realPos > Present.x_pos && realPos < Present.x_pos + Present.size)
        {
            if(!Present.isFound)
                {
                    Present.isFound = true;
                    score += 1;
                    console.log(score);
                }
            
        }
}

function checkPlayerWon() {
    if(score == Presents.length)
    {
        isWon = true
        console.log("Wow...You actually won")
    }
}

function checkPlayerDied() 
{
        if(gameChar_y > height)
        {
            console.log("I knew you were going to die");
            if(lives > 0)
            {
                lives -= 1;
                startGame();
            }
            else
            {
               isLost = true; 
            }
            
        }
}
function nextLevel()
{
    // DO NOT CHANGE THIS FUNCTION!
    console.log('next level');
}