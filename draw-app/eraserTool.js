function eraserTool(){
	this.name = "Eraser";
	this.icon = "assets/eraser.png";
    
    //Draws the eraser to the canvas so that it can be used to erase pixels
    this.draw = function(){
	   ////only erases when mouse is clicked
        if (mouseIsPressed) {
            //saves the pixels erased on the screen
            push();
            strokeWeight(30);
	        stroke('white');
		    line(pmouseX, pmouseY, mouseX, mouseY);
            //restores the settings and makes sure that the pixels erased are saved after being used
            pop();
	}
}
    
}