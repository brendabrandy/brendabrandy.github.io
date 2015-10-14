
var stage, mouseX, mouseY;



circle = new Object();
shapes = new Array();

function draw(){
  var canvas = document.getElementById("myCanvas");
      
  if (canvas.getContext){
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,2000,1000);
      
  //circle.x = mouseX-10;
  //circle.y = mouseY-10;
  //circle.size = 150;

  var redcircle = new Path2D();
  redcircle.arc(600,400,150,0,2*Math.PI,false);
  ctx.fillStyle = "rgba(200,0,0,0.7)";
  ctx.fill(redcircle);
  }
}


function mousePos(event){
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  stage = canvas.getBoundingClientRect();
  mouseX = event.clientX - stage.left;
  mouseY = event.clientY - stage.top;

  if ((mouseX > 450) && (mouseX < 750) && (mouseY > 250) && (mouseY < 550)){
    draw();
  } else{
    ctx.clearRect(0,0,2000,1000)
  }

  //Debugging
  document.getElementById('debugger').innerHTML = mouseX + " , "+ mouseY;
  //CAll draw circle function
}