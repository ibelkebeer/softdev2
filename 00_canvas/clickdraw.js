var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var bound = canvas.getBoundingClientRect();

var clear = document.getElementById("clear");
var rect = document.getElementById("rect");
var dot = document.getElementById("dot");

var mode = document.getElementById("mode");

canvas.addEventListener('click', function(e){
  if(mode.innerHTML == "Current mode: Draw-a-dot"){
    ctx.fillStyle = "#18f0f0";
    ctx.beginPath();
    ctx.ellipse(e.clientX - bound.left, e.clientY - bound.top, 50, 50, 0, 0, 2 * Math.PI);
    ctx.fill();
  }else{
    ctx.fillStyle = "#af33f2";
    ctx.fillRect(e.clientX - bound.left, e.clientY - bound.top, 80, 80);
  }
});

clear.addEventListener('click', function(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
});

rect.addEventListener('click', function(){
  mode.innerHTML = "Current mode: Draw-a-rectangle";
});

dot.addEventListener('click', function(){
  mode.innerHTML = "Current mode: Draw-a-dot";
});
