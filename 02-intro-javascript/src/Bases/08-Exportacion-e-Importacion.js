// import {heroes} from './data/heroes';

import  heroes, {owners}  from "D:/Programacion/React/intro-javascript/src/data/heroes";


// console.log(owners);

//rastreamos solo UN elemento del vector 
 const getHeroeById = (id) =>{
     const idHero = heroes.find(heroes => heroes.id === id);
     return idHero;
 }

// console.log(getHeroeById(2));



//Array.filter rastrea TODO el vector que cumpla con las condiciones que se le asigne 
const getHeroByOwner = (owner) => heroes.filter(heroes => heroes.owner ==owner);

// console.log(getHeroByOwner('DC'));


export{ getHeroeById };