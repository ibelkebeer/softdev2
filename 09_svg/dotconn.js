var image = document.getElementById("image");
var clear = document.getElementById("clear");
var prev_circle;
var x;
var y;

image.addEventListener("click", function(e) {
  if(prev_circle){
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x);
  	line.setAttribute("y1", y);
  	line.setAttribute("x2", e.offsetX );
  	line.setAttribute("y2", e.offsetY );
  	line.setAttribute("stroke", "black" );
  	image.appendChild(line);
    image.append(prev_circle);
  }
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  x = e.offsetX;
  y = e.offsetY;
  circle.setAttribute("r", "15");
  circle.setAttribute("fill", "cyan");
  circle.setAttribute("stroke", "black");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  image.appendChild(circle);
  prev_circle = circle;
});

clear.addEventListener("click", function(e) {
  var children = image.children;
  var len = children.length;
  var i = 0;
  while(i < len){
    image.removeChild(children[0]);
    i++;
  }
  prev_circle = null;
});
