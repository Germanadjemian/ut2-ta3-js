//VERSION 1
let array = [12,13,14];
array.splice(1,1);
console.log(array);
//VERSION 2
function removeFromArray(arreglo, item) {
    const index = arreglo.indexOf(item);
    if (index > -1) {   //esto es porque indexOf devuelve -1 si no encuentra nada
        arreglo.splice(index, 1);
        return arreglo;
    }
}

let arreglo = [1, 2, 3, 4, 5];
console.log(removeFromArray(arreglo, 3));

//VERSION 3
function removeFromArray2(arreglo, item){
    const newArray = arreglo.filter(element => element !== item)
    return newArray;
}

let arreglo2 = ["manzana", "banana", "frutilla", "naranja"];
console.log(removeFromArray2(arreglo2, "banana"));









/*let Array = [1, 2, 3, 4, 5];
const index = Array.indexOf(90);
const element = Array.filter(item => item == 8);
console.log(index);
console.log("HOLA");
console.log(element);
if(element){
    console.log("ENCONTRADO");
}
else{
    console.log("SUPER F");
}*/