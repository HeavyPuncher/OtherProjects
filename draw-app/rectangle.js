function rectangle(){
	this.icon = "shapes/rectangle.jpg";
	this.name = "rectangle";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	//This tool is adapted from  the lineToTool
    
    //draws the line to the screen 
	this.draw = function(){

		//only draw when mouse is clicked
		if(mouseIsPressed){
			//if it's the start of drawing a new rectangle
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//save the current pixel Array
				loadPixels();
			}

			else{
				//update the screen with the saved pixels to hide any previous
				//rectangle between mouse pressed and released
				updatePixels();
				//draw the line
				rect(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);
			}

		}

		else if(drawing){
			//save the pixels with the most recent rectangle and reset the
			//drawing bool and start locations
			loadPixels();
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}