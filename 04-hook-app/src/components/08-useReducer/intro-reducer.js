const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];


const todoReducer = (state = initialState, action) => {

    if (action?.type === 'agregar') {   // ----> si le quitamos el signo "?" va a tirar un error, ya que el action es una variable "undefined". 
                                        // Para arreglarlo se le cola el signo para preguntar si el action tiene algun valor

        return [...state, action.payload]; // ----> acá se la operacion de 'agregar'. Usamos un spread y luego le asignamos el nuevo valor para que se 'concatenen' (se unan)

    }



    return state;
}

let todos = todoReducer(); // No usar push cuando usamos React   (todos.push()  ---> NEL >:v, modifica el objeto y eso no queremos)


// Si quiero agregar otro objeto debemos hacer lo siguiente
const newTodo = { // creo el nuevo todo
    id: 2,
    todo: 'comprar leche',
    done: false
}

const agregarTodoAction = { // Esta accion podra hacer las modificaciones, ya sea quitan, agregar, modificar, etc
    type: 'agregar', // en este caso queremos agregar, entonces ponemos type: 'agregar'. (el nombre no importar, luego asignaremos la funcionalidad )
    // newTodo: newTodo, // Este es una manera valida 
    //newTodo  //-----> Tambien podemos dejarlo así, es valido
    payload: newTodo  //----> se recomienda hacerlo de esta manera. Se indica la nueva modificacion a agregar
}
todos = todoReducer(todos, agregarTodoAction);





console.log(todos);