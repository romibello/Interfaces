//******************* punto5 *******************************

let recPunto5 = canvas.getContext('2d');

// Create a linear gradient
// The start gradient point is at x=20, y=0
// The end gradient point is at x=220, y=0
var gradient = recPunto5.createLinearGradient(530,0, 710,0);

// Add three color stops
gradient.addColorStop(0, 'black');
gradient.addColorStop(.5, 'yellow');
gradient.addColorStop(1, 'red');

// Set the fill style and draw a rectangle
recPunto5.fillStyle = gradient;
recPunto5.fillRect(530, 0, 180, 100);
//******************* punto5 *******************************
