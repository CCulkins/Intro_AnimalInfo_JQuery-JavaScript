$(document).ready(function() {
  var animal = prompt("Please type in 'Turtles', 'Snakes', or 'Insects' to learn about one of the three");


if (animal === "Turtles") {
  $("#Turtles").show();
}

if (animal === "Snakes") {
  $("#Snakes").show();
}

if (animal === "Insects") {
$("#Insects").show();
}

});
