d3.json("https://raw.githubusercontent.com/stuy-softdev/workshop/master/thluffy/21_js-mfr/2006_-_2012_School_Demographics_and_Accountability_Snapshot.json?token=AFRFQK7N644MC7AUI4U22J242DI26", function(error, d) {

  var data = d.filter(function(n) {return n["schoolyear"] == 20062007;});
  document.getElementById("a").innerHTML = data.length;
  var enrolled = data.map(function(n) {return n['total_enrollment'];});
  enrolled.sort();
  document.getElementById("b").innerHTML = enrolled[enrolled.length / 2];
  var num_females = data.map(function(n) {return n['female_num'];}).reduce(function(x, y) {
    if(isNaN(y)){
      return x;
    }
    return x + y;});
  var num_enrolled = enrolled.reduce(function(x,y) {return x + y});
  document.getElementById("c").innerHTML = (num_females / num_enrolled) * 100;
  document.getElementById("d").innerHTML = data.filter(function(n) {return Object.keys(n).indexOf("grade5") > -1 && Object.keys(n).indexOf("grade6") > -1;}).length;
});
