//Team MS Paint: Dennis Chen Imad Belkebir
//SoftDev pd7
//K #02: Connecting the dots
//2/1/19

var canvas = document.getElementById('playground');
var ctx = canvas.getContext('2d');
canvas.addEventListener('click',makeShape);
ctx.beginPath();

function makeShape(e) {
  /*
    offsetX and offsetY provides the offset in the X or Y coordinate
    of the mouse pointer between that event(canvas in this case)
    and the padding edge of the target node
  */
    	var x = e.offsetX;
    	var y = e.offsetY;
    	ctx.lineTo(x,y);
    	ctx.stroke();
    	ctx.beginPath();
    	ctx.fillStyle = "#18f0f0";
    	ctx.ellipse(x , y, 50, 50, 0, 0, 2 * Math.PI);
    	ctx.fill()
    	ctx.stroke();
      ctx.moveTo(x,y);
};

var clear = document.getElementById("clear");
function clearCanvas(e){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
}
clear.addEventListener('click',clearCanvas);
