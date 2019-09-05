//******************* punto3 *******************************
let ctx = canvas.getContext("2d");
let imageData = ctx.createImageData(100,100);
  for(x=0; x<100; x++){
    for(y=0;y<100; y++){
      setPixel(imageData,x,y,0,190,0,255);
    }
  }
  ctx.putImageData(imageData,110,0);

function setPixel (imageData, x, y, r, g, b, a){
  index = (x+y * imageData.width) * 4;
  imageData.data[index+0] = r;
  imageData.data[index+1] = g;
  imageData.data[index+2] = b;
  imageData.data[index+3] = a;
}
//******************* punto3 *******************************
