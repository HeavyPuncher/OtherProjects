References
-http://alpha.editor.p5js.org/Mikey316/sketches/Hkv4Hcfyl
-https://p5js.org/reference/
-https://creative-coding.decontextualize.com/text-and-type/

Notes for improving and fixing the tools

-Improved the rectangle and circle tool

-When the mirror tool is selected it deletes the previous drawing, this has been fixed  by adding loadpixels below this.populateOptions = function at the bottom of the code

-shapefeatures tool drawing would erased when mirror tool is selected, this has been fixed by adding loadPixels at the bottom of the code

-if the eraser tool is selected first and then you select the pen tool, the pen tool will act the same as the eraser tool. This has been fixed by changing the arrangement of the code and by using push and pop

-circleTrail tool drawing erased when mirror tool is selected, fixed by adding loadpixels at the bottom 

-Bucket tool would only fill with one colour, now it fills the background colour with any of the colours selected on the colour palette. This was done by adding rect(0,0,innerWidth,innerHeight); between mousePressed 