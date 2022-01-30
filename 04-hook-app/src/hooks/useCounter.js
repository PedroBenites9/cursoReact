import {useState} from 'react'

export const useCounter = (initialState=10) => {
    const [counter, setCounter] = useState(initialState);//10
    
    const reset=()=>{
        setCounter(initialState);
    };
    const increase = () => {
        setCounter(counter+1);
    }
    const decrease = () => {
        setCounter(counter-1);
    }
    return {
        counter, increase, decrease, reset
    };
}



