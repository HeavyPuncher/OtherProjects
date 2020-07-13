function bucket(){
	this.name = "Bucket";
	this.icon = "assets/bucketfill.png";
    
    //draws the pixels (black background) on to the screen 
    this.draw = function(){
        
        //only draws the pixels when mouse is clicked
        if(mouseIsPressed){
            //Rect is drawn since the canvase is based on a rectangle
            //0,0 is the top corner and innerWidth and innerHeight will allow me to access the colours in the colour palette
            rect(0,0,innerWidth,innerHeight);
            //Saves the pixels onto the screen
            loadPixels();
        }
    }
}
