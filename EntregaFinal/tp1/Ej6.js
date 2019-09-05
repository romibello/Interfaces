//******************* punto6 *******************************

let posX=200;
let posY=110;

let myImage = new Image();
myImage.src = "1.jpg";

myImage.onload = function(){
  myDrawImageMethod(this);
}
function myDrawImageMethod(img){
  ctx.drawImage(img, posX, posY);
  let w = img.width;
  let h = img.height;

  let imageData2 = ctx.getImageData(posX,posY, img.width, img.height);
  let avg;
  let index;
  for (let x = 0; x < w; x++) {
      for (let y = 0; y < h; y++) {
          index = (x + y * w) * 4;
          avg = (imageData2.data[index] + imageData2.data[index+1]  + imageData2.data[index+2]) / 3;
          imageData2.data[index] = avg;
          imageData2.data[index+1] = avg;
          imageData2.data[index+2] = avg;

      }

  }
  ctx.putImageData(imageData2,posX,posY);
}

//******************* punto6 *******************************