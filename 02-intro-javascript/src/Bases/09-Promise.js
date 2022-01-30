import hero from "./data/heroes";
import  { getHeroeById } from "./Bases/08-Exportacion-e-Importacion";


// const promesa = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         const p1 = getHeroeById(2);
//           resolve(p1);
//         // resolve(', No se puedo encontrarn el heroe');
//     }, 2000);
// });

// promesa.then((heroe)=>{
//     // console.log('Then de la promesa', heroe )
//     console.log('Heroe', heroe)
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            const p1 = getHeroeById(id);
            if(p1){
                resolve(p1);
            }else{
                reject(p1)
            }
        }, 2000);
        
    });
}

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(err=>console.warn('Nel mijo, el heroe no existe'));