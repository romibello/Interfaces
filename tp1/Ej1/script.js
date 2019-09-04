let btn = document.getElementById("btn");
btn.addEventListener("click",newMatrix);

let matriz = [];
let n = 10;
let m = 10;

function showMatrix(){
    let container = document.getElementById("matrix");
    let table = document.createElement("table");
    container.appendChild(table);
    let tBody = document.createElement("tbody");
    table.appendChild(tBody);
    for(let i=0; i<n ; i++){
        let row = document.createElement("tr");
        tBody.appendChild(row);
        for(let j=0; j<m ; j++){
            let colum=document.createElement("td");
            colum.innerHTML = matriz[i][j];
            row.appendChild(colum);
        }
    }
    table.setAttribute("class", "table table-dark ");
}

function newMatrix(){
    n = document.getElementsByClassName("form-control");

    for (let i = 0; i < n; i++) {
    matriz[i]=new Array(m);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            matriz[i][j]=Math.floor(Math.random()*n);
        }
    }
    showMatrix(matriz,n,m);
}

newMatrix();

//**************************************************************************** maximos y minimos ***************************************************************************************** */

/*function MuestraMaximo(matriz){
    let max=-1;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(matriz[i][j]>max){
                max=matriz[i][j];
            }
        }
    }
    console.log("Elemento mayor de la matriz: " + max);
}


function MuestraMaxOrMin(matriz){
    let max=-1;
    let min=n;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(i%2==0){
                if(matriz[i][j]>max){
                    max=matriz[i][j];
                }
            }else{
                if(matriz[i][j]<min){
                    min=matriz[i][j];
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


let promedio = new Array(n);

function promedios(matriz){
    let suma=0;
    promedio = [];
    for(let i=0; i<n; i++){
        suma=0;
        for(let j=0; j<m; j++){
            suma += matriz[i][j];
        }
        promedio.push(suma/m);
    }
    console.log("arreglo de promedios: " + promedio);
}
*/