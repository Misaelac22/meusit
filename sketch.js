unction setup() {
  createCanvas(600, 600);
  background("blue");
}

function draw() {
  
  
  stroke("white");
  fill("black");
  // console.log(mousIsPressed);
  
  if(mouseIsPressed) { 
    rect(mouseX, mouseY, 20, 45);
   }
