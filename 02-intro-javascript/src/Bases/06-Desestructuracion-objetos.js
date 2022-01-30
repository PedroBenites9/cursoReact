// destructuracion de objetos


const persona ={
    nombre: 'tony',
    edad: 45,
    clave:' tuvie'
}

// const {nombre} = persona;

// const retornarPersona = ({nombre, edad, clave}) => {

//     console.log(nombre, edad, clave);
    
// }

// retornarPersona(persona);


const rePersona = ({clave, nombre, edad, rango = 'capitan'})=>{


    return{
        nombreClave: clave,
        anios:edad,
        latlng:{
            lat:14.1325,
            lng:-154.1201
        }
    }

}

const {nombreClave, anios, latlng:{lat,lng}} = rePersona(persona);

console.log(nombreClave, anios);
console.log(lat,lng);
