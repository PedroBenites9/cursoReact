import React from 'react';

export const TodoListItem = ({lista, index, handleDelete, handleToggle}) => {
    return (

        <li key={lista.id} className="list-group-item">
            <p onClick={() => handleToggle(lista.id)} className={`${lista.done && 'complete'}`} >{index + 1}. {lista.desc}</p>
            <button onClick={() => handleDelete(lista.id)} className="btn btn-danger" >Borrar</button>
        </li>

    );
};
