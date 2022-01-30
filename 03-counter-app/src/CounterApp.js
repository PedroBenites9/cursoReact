//escribir  "rafcp" importa el react y el PropTypes

import React, {useState} from 'react'
import PropTypes from 'prop-types'


const CounterApp = ({value=0})=>{

    const consol = (e)=>{
        console.log(e);
    }

    const [counter, setCounter] = useState(value); //retorna un arreglo
    
    const incrementadorHandle=()=>{
        //counter++;  ---> no sirve por que aqui estamos modificando un const
        // setCounter(counter + 1);
        setCounter((c)=>c+1) // alternativa si es que no tenemos un const 'counter'. Basta con usar funcion y luego sumarlo
    }

    const desincrementadorHandle=()=>{
        setCounter(counter - 1);
    }
    const reseteoHandle = ()=>{
        setCounter(value)
    }

    return(
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2> 
            <button onClick={incrementadorHandle}>+1</button>
            <button onClick={reseteoHandle}>Reset</button>
            <button onClick={desincrementadorHandle}>-1</button>
        </>

    )
}

CounterApp.propTypes={
    value: PropTypes.number
}

export default CounterApp;