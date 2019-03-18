var image = document.getElementById("image");
var clear = document.getElementById("clear");
var move = document.getElementById("move");
var special = document.getElementById("special");
var overlap = false;
var moving = false;
var colors = false;
var id1;
var id2;
var xvels;
var yvels;

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
  if(!overlap && !moving){
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
  moving = false;
  overlap = false;
  colors = false;
});

move.addEventListener('click', function() {
  if(!moving){
    moving = true;
    var children = image.children;
    xvels = new Array(children.length)
    yvels = new Array(children.length)
    for(var i=0; i < children.length; i++){
      xvels[i] = 5
      yvels[i] = 5
    }
    window.requestAnimationFrame(paint1);
  }
});

function paint1() {
  if(moving){
    var children = image.children;
    for(var i=0; i < children.length; i++){
      x = parseInt(children[i].getAttribute("cx"));
      y = parseInt(children[i].getAttribute("cy"));
      if(x >= 480 || x <= 20){
        xvels[i] *= -1;
      }
      if(y >= 480 || y <= 20){
        yvels[i] *= -1;
      }
      x += xvels[i];
      y += yvels[i];
      children[i].setAttribute("cx", x.toString());
      children[i].setAttribute("cy", y.toString());
    }
    id1 = window.requestAnimationFrame(paint1)
  }else{
    window.cancelAnimationFrame(id1);
  }
}

special.addEventListener('click', function() {
  if(!colors){
    colors = true;
    window.requestAnimationFrame(paint2);
  }
});

function paint2() {
  if(colors){
    var children = image.children;
    for(var i=0; i < children.length; i++){
      circle = children[i]
      x = parseInt(circle.getAttribute("cx"));
      y = parseInt(circle.getAttribute("cy"));
      if(x < 250 && y < 250){
        circle.setAttribute("fill","magenta");
      }
      if(x > 250 && y < 250){
        circle.setAttribute("fill","pink");
      }
      if(x < 250 && y > 250){
        circle.setAttribute("fill","orange");
      }
      if(x > 250 && y > 250){
        circle.setAttribute("fill","turquoise");
      }
    }
    id2 = window.requestAnimationFrame(paint2)
  }else{
    window.cancelAnimationFrame(id2);
  }
}
