"use strict";

var canvas = document.getElementById("circleCanvas");
var context = canvas.getContext("2d");

var RIGHT_BOUND = canvas.width = window.innerWidth;
var LOWER_BOUND = canvas.height = window.innerHeight;
var MAX_RADIUS = 300;

var count = 0;
canvas.addEventListener('click', function() {
  if (count % 3 === 0) {
    Circle.prototype.draw = Circle.prototype.draw1;
  } else if (count % 3 === 1) {
    Circle.prototype.draw = Circle.prototype.draw2;
  } else {
    color = 255;
    Circle.prototype.draw = Circle.prototype.draw3;
  }
  count++;

  clearInterval(interval);
  context.clearRect(0, 0, canvas.width, canvas.height);
  circles = [];
  startSequence();
});

function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
}

Circle.prototype.distanceFromPerimeter = function(x, y) {
  return Math.sqrt((x - this.x) * (x - this.x) + (y - this.y) * (y - this.y)) - this.radius;
}

// crescents
Circle.prototype.draw1 = function() {
  context.beginPath();
  context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  context.fillStyle = getRandomColor();
  context.fill();

  var shadow = 0.99;
  context.beginPath();
  context.arc(this.x - this.radius * (1 - shadow), this.y, (this.radius) * shadow, 0, 2 * Math.PI);
  context.fillStyle = "#FFF";
  context.fill();

}

// bubbles
Circle.prototype.draw2 = function() {
  context.beginPath();
  context.arc(this.x, this.y, this.radius + 5, 0, 2 * Math.PI);
  context.fillStyle = getRandomColor();
  context.fill();
}

// darkening circles
var color = 255;
var colorCount = 0;
Circle.prototype.draw3 = function() {
  var hexColor = color.toString(16);
  if(colorCount++ % 2 === 0) {
    color--;
  }
  context.beginPath();
  context.arc(this.x, this.y, this.radius , 0, 2 * Math.PI);
  context.fillStyle = "#" + hexColor + hexColor + hexColor;
  context.fill();
}

Circle.prototype.draw = Circle.prototype.draw3;
startSequence();

var circles = [];
var interval;
function startSequence() {
  interval = setInterval(function() {
    var giveUp = 100;
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
  }, 1);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[getRandomInt(0, 16)];
  }
  return color;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}