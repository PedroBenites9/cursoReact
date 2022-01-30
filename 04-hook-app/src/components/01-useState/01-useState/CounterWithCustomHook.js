import React from 'react';
import {useCounter} from '../../hooks/useCounter'

import './counter.css';

export const CounterWithCustomHook = () => {
    
    const {state, increase, decrease, reset}=useCounter();
    
    return (
        <>
            <h1>Counter with hook: {state}</h1>
            <hr />
            <button onClick={()=>increase(3)} className="btn btn-primary">+1</button>
            <button onClick={reset} className="btn btn-primary">Reset</button>
            <button onClick={()=>decrease(3)} className="btn btn-primary">-1</button>

        </>
    )
}

