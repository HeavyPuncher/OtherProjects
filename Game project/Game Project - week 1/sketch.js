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
    createCanvas(innerWidth,innerHeight);
}

function draw() 
{    
    background(100,155,255); //fill the sky blue
    
    noStroke();
    fill(0,155,0); 
    rect(0, height * 3/4,width, height/4); //draw some green ground

    
    //1. a cloud in the sky 
    //... add your code here
    fill (255,255,255)
    ellipse (205,90,40,40)
    ellipse (260,90,40,40)
    ellipse (233,90,40,40)
    ellipse (220,100,40,40)
    ellipse (245,100,40,40)
    ellipse (233,90,50,50)
    
    fill (255,255,255)
    ellipse (555,70,40,40)
    ellipse (610,70,40,40)
    ellipse (583,70,40,40)
    ellipse (570,80,40,40)
    ellipse (595,80,40,40)
    ellipse (583,70,50,50)
    
    fill (255,255,255)
    ellipse (30,60,40,40)
    ellipse (85,60,40,40)
    ellipse (58,60,40,40)
    ellipse (45,70,40,40)
    ellipse (70,70,40,40)
    ellipse (58,60,50,50)
    
    fill (255,255,255)
    ellipse (380,70,40,40)
    ellipse (435,70,40,40)
    ellipse (408,70,40,40)
    ellipse (395,80,40,40)
    ellipse (420,80,40,40)
    ellipse (408,70,50,50)
    
    
    noStroke();
    fill(255);
    text("cloud", 200,100);
    
    //2. a mountain in the distance
    //... add your code here
    fill (160,160,160)
    triangle (410,1040,520,200,700,1200)
    
    noStroke();
    fill(255);
    text("mountain", 500,height/2);
    
    //3. a tree 
    //... add your code here
    fill (165,42,42)
    rect (800,297,25,200)
    
    fill (0,128,0)
    ellipse (810,275,150,150)
    ellipse (740,325,50,50)
    ellipse (740,285,50,50)
    
    noStroke();
    fill(255);
    text("tree", 800, height * 0.6);
    
    //4. a house
    //... add your code here
    fill (178,34,34)
    rect (60,282,200,200)
    //windows and door
    fill (255,255,0)
    rect (70,300,60,60)
    rect (190,300,60,60)
    rect (70,370,60,60)
    rect (190,370,60,60)
    rect (145,432,30,50)
    //roof
    fill (128,0,0)
    rect (70,257,180,25)
    //chimney
    fill (51,0,0)
    rect (90,227,20,30)
    
    noStroke();
    fill(255);
    text("house", 100, height * 0.6);
    
    //5. another foreground item of your choice
    //... add your code here
   
    noStroke();
    fill(255);
    text("???", 400, height * 0.7);
    
    
}