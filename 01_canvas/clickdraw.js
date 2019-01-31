var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var bound = canvas.getBoundingClientRect();

var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");

var mode = true;

canvas.addEventListener('click', function(e){
    if(mode){
	ctx.fillStyle = "#18f0f0";
	ctx.beginPath();
	ctx.ellipse(e.offsetX, e.offsetY, 50, 50, 0, 0, 2 * Math.PI);
	ctx.fill();
    }else{
	ctx.fillStyle = "#af33f2";
	ctx.fillRect(e.offsetX, e.offsetY, 80, 80);
    }
});

clear.addEventListener('click', function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
});

toggle.addEventListener('click', function(){
    if(mode){
	mode = false;
    }else{
	mode = true;
    }
});
