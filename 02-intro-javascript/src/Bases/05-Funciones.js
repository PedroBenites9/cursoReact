function saludar(nombre){
    return `hola, ${nombre}`;
}

const saludar2 = (nombre) =>{
    return `Hola q ase, soy ${nombre}`;
}

const saludar3= (nombre) => `Hola, Soy ${nombre}`

const getUser = () => {
    return {
        user: 'Pedro',
        email: 'pedro.benites99@hotmail.com',
        password: '1234'
    }
}
/* -----------------------son casi los mismo----------------- */

const usuario = (nombre, email, contraseña) => {
    return {
        user: `${nombre}`,
        email: `${email}`,
        password: `${contraseña}`
    }
}

const categorias = (categoria, usuario) => ({
    category:categoria,
    user: usuario
})

/*------------------------------------------------------------- */
console.log(saludar2('Pedro'));
console.log(saludar3('nyaa'));
console.log(getUser());
console.log(usuario('Pedro Benites', 'pedroche934mail.com', 'elpapichulo123'));

console.log(categorias('anime', 'Victor'))

