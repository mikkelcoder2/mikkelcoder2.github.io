function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(220);
  
  
line(windowWidth/2,0,windowWidth/2,windowHeight)
line(0,windowHeight/2,windowWidth, windowHeight/2)
  
  
if(mouseX < windowWidth/2 && mouseY < windowHeight/2) c = color("white") 
if(mouseX > windowWidth/2 && mouseY < windowHeight/2) c = color("red")
if(mouseX > windowWidth/2 && mouseY > windowHeight/2) c = color("white")
if(mouseX < windowWidth/2 && mouseY > windowHeight/2) c = color("red")
  
fill(c)
square(mouseX,mouseY,20)
}


