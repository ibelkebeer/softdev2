//Team MS Paint: Dennis Chen Imad Belkebir
//SoftDev pd7
//K #00: I See A Red Door...
//1/30/19

var canvas = document.getElementById('playground');
var ctx = canvas.getContext('2d');
canvas.addEventListener('click',makeShape);
ctx.beginPath();
var first = true;

function makeShape(e) {
  /*
    offsetX and offsetY provides the offset in the X or Y coordinate
    of the mouse pointer between that event(canvas in this case)
    and the padding edge of the target node
  */
    if(first){
	var x = e.offsetX;
	var y = e.offsetY;
	ctx.lineTo(x,y);
	//ctx.moveTo(x,y);
	ctx.stroke();
	ctx.beginPath();
	ctx.fillStyle = "#18f0f0";
	ctx.ellipse(x , y, 50, 50, 0, 0, 2 * Math.PI);
	ctx.fill()
	ctx.stroke();
    }else{
	first = false;
    }
};

var clear = document.getElementById("clear");
function clearCanvas(e){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    first = true;
}
clear.addEventListener('click',clearCanvas);
