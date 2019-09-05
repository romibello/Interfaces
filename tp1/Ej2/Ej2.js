//******************* punto2 *******************************

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = parent.innerWidth*0.4;
canvas.height =  parent.innerHeight*0.3;
let width = canvas.width;
let height = canvas.height; 

window.onresize = () => {
    canvas.width = parent.innerWidth*0.4;
    canvas.height =  parent.innerHeight*0.3;
    width = canvas.width;
    height = canvas.height; 
    drawCanvas();
}

function drawCanvas(){
    ctx.fillStyle = "#f00";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

drawCanvas();
//******************* punto2 *******************************
