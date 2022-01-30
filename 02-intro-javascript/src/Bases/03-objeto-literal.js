const persona = {
    nombre: 'Tony',
    apellido:'Stark',
    edad:45,
    direccion: {
        ciudad:'Florecion Varela',
        calle: 'tuVieja' ,
        altura: 69
    }
}

const persona2 = {...persona};//copira los atributos el objeto, en este caso el obeto "persona"
persona2.nombre = 'El alesi';
persona2.edad=20;

console.log(persona);
console.log(persona2);