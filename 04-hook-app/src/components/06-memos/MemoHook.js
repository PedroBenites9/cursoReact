import React, {useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'

import '../02-useEffect/effects.css'



export const MemoHook = () => {
    const { counter, increase } = useCounter(1);
    const [show, setshow] = useState(true);

    const memori = useMemo(() => procesoPesado(counter), [counter]);
    
    return (
        <>
            <h1>MemoHook</h1>
            <h3>counter: <small>{counter}</small></h3>
            <hr />

            <p>{memori}</p>

            <button className="btn btn-primary" onClick={increase}>+1</button>
            <button className="btn btn-outline-primary ml-3" onClick={() => {
                setshow(!show);
            }}>Show/Hide {JSON.stringify(show)}</button>
        </>
    );
};
