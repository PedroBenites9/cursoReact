import React, {useState} from 'react';
import {useCounter} from '../../hooks/useCounter'
import {Small} from './Small'

import '../02-useEffect/effects.css'


export const Memorize = () => {
    const {counter, increase}=useCounter(10);
    const [show, setshow] = useState(true);

    

    return (
        <>
            <h1>counter: <Small value={counter}></Small></h1>
            <hr />
            <button className="btn btn-primary" onClick={increase}>+1</button>
            <button className="btn btn-outline-primary ml-3" onClick={()=>{
                setshow(!show);
            }}>Estado {JSON.stringify(show)}</button>
        </>
    );
};
