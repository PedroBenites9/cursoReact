import { useState } from "react";

export const useForm = (initialState = {}) => {
    
    const [values, setvalues] = useState(initialState); //este custom hook se va a encargar del manejo de formularios 

    const reset = () =>{
        setvalues(initialState);
    }

    // const borrar = () =>{
    //     setvalues(setvalues).pop();
    // }

    const handleInputChange = ({target})=>{
        setvalues({
            ...values,
            [target.name]: target.value
        });
    }
    return [values, handleInputChange, reset]; //Podemos retornar cualquier tipo de dato que deseemos, desde un vector hasta un objeto. Depende de lo que querramos obtener
}
