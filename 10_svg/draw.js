var image = document.getElementById("image");
var clear = document.getElementById("clear");
var overlap = false;

image.addEventListener("click", function(e) {
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.addEventListener("click", function(e) {
    if(circle.getAttribute("fill") == "cyan"){
      circle.setAttribute("fill","red");
      overlap = true;
    }else{
      circle.setAttribute("fill", "cyan");
      circle.setAttribute("cx", Math.floor(Math.random() * 500));
      circle.setAttribute("cy", Math.floor(Math.random() * 500));
      overlap = true;
    }
  });
  circle.setAttribute("r", "20");
  circle.setAttribute("fill", "cyan");
  circle.setAttribute("stroke", "black");
  circle.setAttribute("cx", e.offsetX);
  circle.setAttribute("cy", e.offsetY);
  if(!overlap){
    image.appendChild(circle);
  }
  overlap = false;
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
