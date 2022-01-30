import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos,  handleDelete, handleToggle}) => {
  return (
    
        <ul className="list-group list-group-flush ">
            {todos.map((lista, i) => (
                <TodoListItem 
                key={lista.id}
                lista={lista}
                index={i}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
                />
            ))}
        </ul>
    
  );
};
