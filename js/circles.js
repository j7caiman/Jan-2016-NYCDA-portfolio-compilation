var circles = (function() {
  "use strict";

  var canvas = document.getElementById("circleCanvas");
  var context = canvas.getContext("2d");

  var RIGHT_BOUND;
  var LOWER_BOUND;
  var MAX_RADIUS = 200;

  canvas.addEventListener('click', cycle);

  function resetBounds(width, height) {
    RIGHT_BOUND = canvas.width = width;
    LOWER_BOUND = canvas.height = height;
  }

  function cycle() {
    Circle.prototype.resetDraw();
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, RIGHT_BOUND, LOWER_BOUND);
    clearInterval(interval);
    circles = [];
    startSequence();
  }

  function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  Circle.prototype.distanceFromPerimeter = function(x, y) {
    return Math.sqrt((x - this.x) * (x - this.x) + (y - this.y) * (y - this.y)) - this.radius;
  }

  // petri dish
  var color;
  Circle.prototype.resetDraw = function() {
    color = 255;
  }

  Circle.prototype.draw = function() {
    var hexColor = color.toString(16);
    color--;

    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = "#" + hexColor + hexColor + hexColor;
    context.fill();
  }

  var circles = [];
  var interval;

  function startSequence() {
    interval = setInterval(function() {
      var giveUp = 40;
      while (giveUp-- > 0) {
        var x = getRandomInt(0, RIGHT_BOUND);
        var y = getRandomInt(0, LOWER_BOUND);

        var maybeSpot = true;
        var radius = MAX_RADIUS;
        for (var i = 0; i < circles.length; i++) {
          var circle = circles[i];
          var distanceFromPerimeter = circle.distanceFromPerimeter(x, y);
          if (distanceFromPerimeter < 0) {
            maybeSpot = false;
            break;
          }

          if (radius > distanceFromPerimeter) {
            radius = distanceFromPerimeter;
          }
        }

        if (maybeSpot) {
          var circle = new Circle(x, y, radius);
          circles.push(circle);
          circle.draw();
          break;
        }
      }

      if (giveUp === 0) {
        clearInterval(interval);
      }
    }, 40);
  }

  function makeCircle(circle) {
    context.beginPath();
    context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    context.fill();
  }

  function setColor(colorString) {
    context.fillStyle = colorString;
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return {
    resetBounds: resetBounds,
    cycle: cycle,
    setMaxRadius: function(radius) {
      MAX_RADIUS = radius;
      cycle();
    },
    setDrawFunction: function(text) {
      Circle.prototype.draw = eval(text);
      cycle();
    }
  }
})();

function exercise1() {
  eval(editor1.getValue());
  var MAX_RADIUS = MAX_RADIUS || 200;

  circles.setMaxRadius(MAX_RADIUS);
}

function exercise2() {
  var input = editor2.getValue();
  var completedString = "(function() {" + input + "})";
  circles.setDrawFunction(completedString);
}

function resetPage() {
  location.reload();
}

var editor1 = ace.edit("editor1");
editor1.setTheme("ace/theme/solarized_light");
editor1.session.setMode("ace/mode/javascript");
editor1.setOptions({
  maxLines: 1,
  showLineNumbers: false
});

var editor2 = ace.edit("editor2");
editor2.setTheme("ace/theme/solarized_light");
editor2.session.setMode("ace/mode/javascript");
editor2.setOptions({
  minLines: 8,
  maxLines: 20
});

$(window).resize(function() {
  circles.resetBounds($("#circleCanvas").width(), $("#textEditors").height());
  circles.cycle();
});

// avoid unknown race condition which doesn't return the expected height of the #textEditors div
setTimeout(function() {
  circles.resetBounds($("#circleCanvas").width(), $("#textEditors").height());
  circles.cycle();
}, 1);