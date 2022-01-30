const petes = ['TkMafia', 'TkGorda', 'Tkgon'];

const[, ,pete3]=petes;

console.log(pete3);


const retornarArreglo=()=>{

    return ['ABC', 123];

}

const [ letras, numeros] = retornarArreglo();

console.log(letras, numeros); 

const usoEstado =(valor) =>{
    return [valor, ()=> {console.log('setNombre()')}];
}

const [nombre, setNombre] = usoEstado('nombre');
console.log(nombre);
setNombre();


