export const todoReducer =(state = [], action)=>{  // siempre se declara un state y un action. En este caso el state será un arreglo, el caso que no tenga nada, se declarará un arreglo vacio

    //acá se le agregar la logica

    switch (action.type) {
        case 'agregar':
            return[...state, action.payload];
        case 'borrar':
            return state.filter(todo => todo.id!== action.payload);
        case 'toggle':
            return state.map(todo => 
                (todo.id === action.payload)
                ? {...todo, done: !todo.done}
                : todo
            );
        case 'toggle-old':
            return state.map( todo => {
                if (todo.id === action.payload) {
                    return{
                        ...todo,
                        done:!todo.done
                    }
                } else {
                    return todo;
                }
            });   
        default:
            return state;   
        
    }

}