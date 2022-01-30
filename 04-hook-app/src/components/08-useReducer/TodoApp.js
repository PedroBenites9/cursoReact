import React from 'react';
import { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';


import './styles.css'
import { TodoList } from './TodoList';

export const TodoApp = () => {


    const init = () => {
        return JSON.parse(localStorage.getItem('state')) || [];



        // return [{
        //     id: new Date().getTime(),
        //     desc: 'Aprender React',
        //     done: false}]
    }



    // const [state, dispatch] = useReducer(reducer, initialState, init);   // El Reducer tiene que ser la funcion "reducer()"
    // El initialState es un estado inicial que yo le puedo asignar
    // El init es usado como una funcion para inicializar el initialState en caso ese state sea procesado o haga varias acciones (incluso puede memorizar el resultado para que no volver ejecutarlo )


    // El reducer será todoReducer, el nombre de la variable del archivo todoReducer.js que exportamos
    const [state, dispatch] = useReducer(todoReducer, [], init); // El 'reducer' puede declararse en este archivo, pero mayormente se puede extender el codigo, entonces combiene crear un archivo independiente y luego llamarlo, para evitar una mezcla de codigo

    // console.log(state); // Acá me muestra el useReducer llamado desde la variable 'state'

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });


    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    }, [state]);



    const handleSubmit = (e) => { // Acá se realizará la accion de agregar un nuevo to-do
        e.preventDefault(); // Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
        const newTodo = { // Creamos el nuevo Todo y luego le asignamos las propiedades del nuevo todo
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        if (description.trim().length <= 1) {
            return;
        };



        const action = { // una vez creada la funcion para crear un nuevo todo, tenemos que realizar la accion de "agregar". En este caso usamos el useReducer y el mismo tiene una variable en la que se le tiene que asignar la funcion de acction, esa variable es la 'dispatch'
            type: 'agregar',
            payload: newTodo
        }
        dispatch(action); //  asignamos que funcion se va ejecutar, en este caso "action"
        reset();
    }

    const handleDelete = (todoID) => {


        const action = {
            type: 'borrar',
            payload: todoID
        }
        dispatch(action);

    }

    const handleToggle = (todoID) => {
        const action = {
            type: 'toggle',
            payload: todoID
        }
        dispatch(action);
    }


    return (
        <>
            <h1>TodoApp: ({state.length})</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    todos
                    <TodoList 
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                        todos={state}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input value={description} onChange={handleInputChange} type="text" name="description" placeholder="aprender..." autoComplete="off" className="form-control " />
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-outline-primary m-1 ">Agregar</button>

                        </div>
                    </form>


                </div>
            </div>



        </>
    )
}