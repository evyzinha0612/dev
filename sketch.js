
background("white")
}
  
function draw() {

  stroke ("black");
  fill ("pink");
  
  createCanvas(600, 600);
  // console.log(mouseIsPressed);
  
  if(mouseIsPressed) {
  rect(mouseX, mouseY, 20, 35);
  }
}