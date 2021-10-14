document.addEventListener("DOMContentLoaded", main);

function main() {
  // Get a reference to the canvas and grab something called the "context" off
  // it.  The context defines how we interact with the canvas. We're not doing
  // 3D so we grab 2D.
  var canvas = document.getElementById("easel");
  var ctx = canvas.getContext("2d");

  // The canvas doesn't register the same way as a div, so if you set the width
  // and height properties in your CSS file, you'll end up stretching the canvas
  // which automatically has 2:1 ratio (width of 300px and a height of 150px). 
  // You can get around this by putting the width and height in the HTML or doing
  // it programatically by assigning attributes with Javascript
  canvas.setAttribute('width', '800');
  canvas.setAttribute('height', '800');

  // It turns out to be useful to attach the width and height properties to the
  // ctx too, so it knows how big it's canvas is. 
  ctx.width = canvas.width;
  ctx.height = canvas.height;

  // Define some variables for the x,y coordinates of where we'll draw
  // and the width and height of rectangles we'll draw.
  var xx = 50;
  var yy = 80;
  var width = 100;
  var height = 150;

  // The ctx is like our paintbrush. Let's set the width of a line we'll draw
  // and choose different colors for fill (the inside of shapes) and for it's
  // stroke (a line on the border of shapes).
  ctx.fillStyle = 'black';
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 5;

  // fill an entire rectangle
  // then stroke around it's edges with red.
  ctx.fillRect(xx, yy, width, height);
  ctx.strokeRect(xx, yy, width, height);
}

function drawRectangle(x, y) {
    // these rectangles will be 50x50px squares
    var size = 50;
  
    ctx.fillStyle = 'purple';
    ctx.stokeStyle = 'yellow';
    ctx.lineWidth = 5;
  
    ctx.fillRect(x, y, size, size);
    ctx.strokeRect(x, y, size, size);

    canvas.addEventListener("click", function(event) {
        drawRectangle(ctx, event.offsetX, event.offsetY);
    });
    
  }

  