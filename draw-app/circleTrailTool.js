function circleTrailTool(){
	this.icon = "assets/circleTrail.jpg";
	this.name = "circleTrailTool";

//creates two variables for the starting x and y-coordinates
	var startMouseX = -1;
	var startMouseY = -1;
    
    //boolean variable when drawing the circle trail
    var drawingcircleTrail = true;    
    
    //random variable is used to determine the size of each circle within the range shown below
    var r = random(10, 100);
    
    this.draw = function(){
        if(mouseIsPressed){
        push();
            if(drawingcircleTrail == true){
                noFill();
                
                //This willl loop twice and draws 4 arcs (each of the arcs are for a quarter of a circle)
                //each of the arc lengths are randomised to create a realistic circle trail shape
                //NOTE: There are approximately 6 different circles which are drawn due to multiple-frames per second after each mouse-click
                for(var i = 1; i < 3; i++){
                    arc(mouseX, mouseY, r, r, random(0, HALF_PI), random(0, HALF_PI));
                    arc(mouseX, mouseY, r, r, random(HALF_PI, PI), random(HALF_PI, PI));
                    arc(mouseX, mouseY, r, r, random(PI, PI + HALF_PI), random(PI, PI + HALF_PI));
                    arc(mouseX, mouseY, r, r, random(PI + HALF_PI, TWO_PI), random(PI + HALF_PI, TWO_PI));
                    //the random variable is randomised again for a different set of circles
                    r = random(0, 80);
                    //saves the pixels onto the screen
                    loadPixels();
                }                 
        pop();
            }
        }
    }


}