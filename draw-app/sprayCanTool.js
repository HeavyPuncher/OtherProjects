function SprayCanTool(){
	
	this.name = "sprayCanTool";
	this.icon = "assets/sprayCan.jpg";

	var points = 13;
	var spread = 10;

	//draws the pixels to the screen 
    this.draw = function(){
		
        //random variable created so that the pixels appear within the range randomly
        var r = random(5,10);
		////only draws when mouse is clicked
        if(mouseIsPressed){
			//for loop created so that pixels continue to be drawn until user stops clicking the mouse
            for(var i = 0; i < points; i++){
				point(random(mouseX-spread, mouseX + spread), random(mouseY-spread, mouseY+spread));
			}
		}
	};
}