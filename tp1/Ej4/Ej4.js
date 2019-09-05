//******************* punto4 *******************************

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth*0.8;
canvas.height = window.innerHeight*0.6;
let width = canvas.width;
let height = canvas.height; 
let proportion = 255/height;

window.onresize = () => {
    canvas.width = window.innerWidth*0.8;
    canvas.height =  window.innerHeight*0.6;
    width = canvas.width;
    height = canvas.height;
    proportion = 255/height; 
    drawCanvas()
}

const drawCanvas = () => {

    let imageData = ctx.createImageData(width,height);

    let color = 0;
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            index = (x + y * width) * 4;
            imageData.data[index] = color; 
            imageData.data[index+1] = color; 
            imageData.data[index+2] = color; 
            imageData.data[index+3] = 255;
            color+= proportion;
        }
        color=0;
    }
    ctx.putImageData(imageData,0,0)
}

drawCanvas()

//******************* punto4 *******************************
