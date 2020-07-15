/*

The Game Project

Week 1 - part b

Use p5 drawing functions such as rect, ellipse, line, triangle and point to draw the scenery as set out in the comments below. The items should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = You've used lots of shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to imaginatively modify these and interpret the scenery titles loosely to match your game theme.


*/

function setup() 
{
    createCanvas(1920,900);
}

function draw() 
{    
    background(100,155,255); //fill the sky blue
    
    noStroke();
    fill(0,155,0); 
    rect(0, height * 3/4,width, height/4); //draw some green ground

    
    //1. a cloud in the sky 
    //... add your code here
    fill (255,255,255);
    ellipse(50,50,50,50);
    ellipse(60,60,50,50);
    ellipse(80,60,50,50);
    
    fill (255,255,255);
    ellipse(250,80,50,50);
    ellipse(260,90,50,50);
    ellipse(280,90,50,50);
    
    fill (255,255,255);
    ellipse(650,50,50,50);
    ellipse(660,60,50,50);
    ellipse(680,60,50,50);
    
    fill (255,255,255);
    ellipse(850,80,50,50);
    ellipse(860,90,50,50);
    ellipse(880,90,50,50);

    
    noStroke();
    fill(255);
    text("cloud", 200,100);
    
    //2. a mountain in the distance
    //... add your code here
    fill(211,211,211)
    triangle(860,675,900,380,1200,675)
    triangle(900,675,990,200,1200,675)
    triangle(900,675,1200,350,1400,675)
    
    noStroke();
    fill(255);
    text("mountain", 500,height/2);
    
    //3. a tree 
    //... add your code here
    fill(102,51,0);
    rect(700,500,50,300);
    fill(0,204,0);
    ellipse(700,500,50,50);
    ellipse(690,480,50,50);
    ellipse(690,460,50,50);
    ellipse(690,440,50,50);
    ellipse(700,440,50,50);
    ellipse(730,420,50,50);
    ellipse(750,400,50,50);
    ellipse(750,420,50,50);
    ellipse(770,440,50,50);
    ellipse(790,460,50,50);
    ellipse(770,480,50,50);
    ellipse(770,460,50,50);
    ellipse(770,500,50,50);
    ellipse(740,500,50,50);
    ellipse(740,450,60,128);
    
    noStroke();
    fill(255);
    text("tree", 800, height * 0.6);
    
    //4. a house
    //... add your code here
    //House base
    fill (178,34,34);
    rect (50,450,200,250);
    
    //Windows and doors
    fill (255,255,0);
    rect (70,470,60,60);
    rect (170,470,60,60);
    rect (130,620,40,80);
    
    fill (128,0,0);
    rect (60,425,180,25);
    
    fill (165,42,42);
    rect (80,375,50,50);
    
    noStroke();
    fill(255);
    text("house", 100, height * 0.6);
    
    //5. another foreground item of your choice
    //... add your code here
    
    //The Sun
    fill(255,140,0);
    ellipse(500,50,80,80);
    
    //pool
    fill(0,255,255)
    ellipse(400,790,250,70)
   
    noStroke();
    fill(255);
    text("???", 400, height * 0.7);
    
    
}