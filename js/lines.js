"use strict";

var canvas = document.getElementById("linesCanvas");
var context = canvas.getContext("2d");

var RIGHT_BOUND = canvas.width = window.innerWidth;
var LOWER_BOUND = canvas.height = window.innerHeight;

function Shape(path, fillColor) {
  this.path = path;
  this.fillColor = fillColor;
}

Shape.prototype.containsPoint = function(vertex) {
  var path = this.path;

  var inside = false;
  for (var i = 0, j = path.length - 1; i < path.length; j = i++) {
    var intersect = ((path[i].y > vertex.y) != (path[j].y > vertex.y)) && (vertex.x < (path[j].x - path[i].x) * (vertex.y - path[i].y) / (path[j].y - path[i].y) + path[i].x);
    if (intersect) {
      inside = !inside;
    }
  }

  return inside;
}

Shape.prototype.split = function(line) {
  var path = this.path;

  var newShape1 = [];
  var newShape2 = [];

  var flag = true;
  newShape1.push(path[path.length - 1]);
  for (var i = 0, j = path.length - 1; i < path.length; j = i++) {
    var intersectPoint = getIntersectionPoint(line.start, line.end, path[i], path[j]);
    if (intersectPoint === false) {
      if (flag) {
        newShape1.push(path[i]);
      } else {
        newShape2.push(path[i]);
      }
    } else {
      if (flag) {
        newShape1.push(intersectPoint);
        newShape2.push(intersectPoint);
        newShape2.push(path[i]);
      } else {
        newShape2.push(intersectPoint);
        newShape1.push(intersectPoint);
        newShape1.push(path[i]);
      }
      flag = !flag;
    }
  }

  return [
    new Shape(newShape1, getRandomColor()),
    new Shape(newShape2, getRandomColor())
  ];
}

context.lineWidth = 0.07;
context.fillStyle = 'rgba(0,0,0,0.015)';
Shape.prototype.draw = function() {
  context.beginPath();
  context.moveTo(this.path[0].x, this.path[0].y);
  for (var i = 1; i < this.path.length; i++) {
    var point = this.path[i];
    context.lineTo(point.x, point.y);
  }
  // context.fillStyle = this.fillColor;
  context.fill();
  context.stroke();
}

var firstShape = new Shape(
  [{
    x: 0,
    y: 0
  }, {
    x: 0,
    y: LOWER_BOUND
  }, {
    x: RIGHT_BOUND,
    y: LOWER_BOUND
  }, {
    x: RIGHT_BOUND,
    y: 0
  }],
  getRandomColor()
);

var shapes = [];
shapes.push(firstShape);

var interval = false;
canvas.addEventListener('click', function() {
  if (interval) {
    clearInterval(interval);
    interval = false;
  } else {
    interval = setInterval(function() {
      for (var i = 0; i < 1; i++) {
        runOneIteration();
      }
    }, 1);
  }
});


function runOneIteration() {
  var line = makeLine();
  for (var i = 0; i < shapes.length; i++) {
    var shape = shapes[i];
    if (shape.containsPoint(line.randomPoint)) {
      shapes.splice(i, 1);
      var newShapes = shape.split(line);
      newShapes[0].draw();
      newShapes[1].draw();
      shapes.push(newShapes[0]);
      shapes.push(newShapes[1]);
      break;
    }
  }
}

function getIntersectionPoint(p, p2, q, q2) {
  var r = subtractPoints(p2, p);
  var s = subtractPoints(q2, q);

  var uNumerator = crossProduct(subtractPoints(q, p), r);
  var uDenominator = crossProduct(r, s);

  if (uDenominator == 0) {
    return false;
  }

  var u = uNumerator / uDenominator;
  var t = crossProduct(subtractPoints(q, p), s) / uDenominator;

  if ((t >= 0) && (t <= 1) && (u >= 0) && (u <= 1)) {
    return {
      x: p.x + t * r.x,
      y: p.y + t * r.y
    };
  } else {
    return false;
  }

  function crossProduct(point1, point2) {
    return point1.x * point2.y - point1.y * point2.x;
  }

  function subtractPoints(point1, point2) {
    return {
      x: point1.x - point2.x,
      y: point1.y - point2.y
    };
  }
}

function makeLine() {
  var randomPoint = {
    x: Math.random() * RIGHT_BOUND,
    y: ((Math.random() - 0.5) * (Math.random() - 0.5) + 0.5) * LOWER_BOUND,
  };

  var angle = Math.random() * Math.PI;

  // context.fillStyle = "#FF0000"
  // context.fillRect(randomPoint.x, randomPoint.y, 7, 7);

  // switch (getRandomInt(0, 3)) {
  //   case 0:
  //     angle = Math.atan2(-6000, (randomPoint.x - RIGHT_BOUND / 2));
  //     break;
  //   case 1:
  //     angle = -Math.atan2(randomPoint.y - LOWER_BOUND / 4, randomPoint.x);
  //     break;
  //   case 2:
  //     angle = Math.atan2(randomPoint.y - LOWER_BOUND / 4, RIGHT_BOUND - randomPoint.x);
  //     break;
  // }

  var startPosition = {
    x: 0,
    y: randomPoint.y + Math.tan(angle) * randomPoint.x
  };

  var slope = (randomPoint.y - startPosition.y) / (randomPoint.x - startPosition.x);

  var endPosition = {
    x: RIGHT_BOUND,
    y: startPosition.y + RIGHT_BOUND * slope
  }

  return {
    start: {
      x: startPosition.x,
      y: startPosition.y
    },
    end: {
      x: endPosition.x,
      y: endPosition.y
    },
    randomPoint: {
      x: randomPoint.x,
      y: randomPoint.y
    }
  };
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

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}