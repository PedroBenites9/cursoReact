//arreglos en js

// const arreglo = new Array();
const arreglo=[1,2,3,4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);
// arreglo.push(5);
let arreglo2 = [...arreglo, 5];

const arrelgo3 = arreglo2.map(function(x){
    return x*2 //multipica *2 los valores que tiene el array
})

console.log(arreglo);
console.log(arreglo2);
console.log(arrelgo3);