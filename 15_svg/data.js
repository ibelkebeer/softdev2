// from http://resources.seattlecentral.edu/qelp/sets/023/023.html

var data = [
  [457, 855],
  [405, 715],
  [455, 975],
  [460, 895],
  [335, 472],
  [365, 540],
  [390, 660],
  [368, 581],
  [385, 609],
  [360, 557],
  [346, 433],
  [438, 840]
];
var margin = {top: 60, right: 80, bottom: 60, left: 80};
var width = 1000 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

var x = d3.scaleLinear()
.domain([0, d3.max(data, function(d) {
  return d[0];
})])
.range([0, width]);

var y = d3.scaleLinear()
.domain([0, d3.max(data, function(d) {
  return d[1];
})])
.range([height, 0]);

var chart = d3.select('body')
.append('svg')
.attr('width', width + margin.right + margin.left)
.attr('height', height + margin.top + margin.bottom)
.attr('class', 'chart')

var main = chart.append('g')
.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
.attr('class', 'main')

main.append('text')
.attr("x", 450 )
.attr("y",  0 )
.style("text-anchor", "middle")
.text('Rainbow trout from the Spokane River, WA');

var xaxis = d3.axisBottom(x);

main.append('g')
.attr('transform', 'translate(0,' + height + ')')
.attr('class', 'axis')
.call(xaxis);

main.append("text")
.attr("x", 450 )
.attr("y",  420 )
.style("text-anchor", "middle")
.text("Length (mm)");

var yaxis = d3.axisLeft(y);

main.append('g')
.attr('class', 'axis')
.call(yaxis);

main.append("text")
.attr("transform", "rotate(-90)")
.attr("x", -200 )
.attr("y",  -40 )
.style("text-anchor", "middle")
.text("Weight (g)");

var g = main.append("g");
g.selectAll("dots")
.data(data)
.enter().append("circle")
.attr("cx", function (d) {
  return x(d[0]);
})
.attr("cy", function (d) {
  return y(d[1]);
})
.attr("r", 7);
