function shapesFeature(){
	this.name = "shapesFeature";
	this.icon = "assets/shapes.png";

//draws the stamp onto the screen
    this.draw = function(){
        
        //Draws the stamp only when the mouse is pressed
        if (mouseIsPressed){
		ellipse(pmouseX, pmouseY, 100,100);
        //saves the pixels drawn on the screen
        loadPixels();
	   }
    }
}
