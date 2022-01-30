import React, { useState } from 'react'
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook'

import '../02-useEffect/effects.css'

export const RealExampleRef = () => {

    const [show, setshow] = useState(false);



    return (
        <>
            <h1>Real Example Ref</h1>
            <hr />

            {show && <MultipleCustomHook />}

            <button onClick={() => { setshow(!show) }} className="btn btn-primary mt-6"> Show/Hide</button>


        </>
    )
}
