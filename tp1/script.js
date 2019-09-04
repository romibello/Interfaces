/********************************* ejercicio 1: matriz *********************************************/
const n=10;
const m=10;
let matriz = [n];

for(let i=0; i<n; i++) {
    matriz[i] = new Array(m);
}

for(let i=0; i<matriz.length; i++){
    for(let j=0; j<m; j++){
        matriz[i][j] = Math.floor(Math.random()*n);
    }
}
console.log(JSON.stringify(matriz));
console.log(matriz);

function MuestraMaximo(matriz){
    let max=-1;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(matriz[i,j]>max){
                max=matriz[i,j];
            }
        }
    }
    console.log("Elemento mayor de la matriz: " + max);
}

MuestraMaximo(matriz);

function MuestraMaxOrMin(matriz){
    let max=-1;
    let min=n;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(i%2==0){
                if(matriz[i,j]>max){
                    max=matriz[i,j];
                }
            }else{
                if(matriz[i,j]<min){
                    min=matriz[i,j];
                }
            }
        }
        if(i%2==0){
            console.log("Elemento max: " + max + " fila: " + i);
        }else{
            console.log("Elemento min: " + min + " fila: " + i);
        }
    }
    console.log("Elemento mayor de la matriz: " + max);
}

MuestraMaxOrMin(matriz);

/********************************* ejercicio 1: matriz *********************************************/
/********************************* ejercicio 2: context *********************************************/
