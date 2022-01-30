import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'


export const Layout = () => {

    const { counter, increase } = useCounter(1);
    const [boxSize,setboxSize] = useState({}); //Guardamos las dimensiones del layout en un useState

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    // const { author, quote } = (!!data && data.length >= 0) && data[0];
    const {quote} = !!data && data[0];

    const pRef = useRef();

    useLayoutEffect(() => {
        // console.log(pRef.current.getBoundingClientReact()); //acá mostraria las dimensiones por consola
        setboxSize(pRef.current.getBoundingClientRect()); //acá mostraria las dimensiones en la pagina, pero tenemos que llamar el metodo JSON para imprimirla a la pantalla
    }, [quote]);

    return (
        <>
            <h1>Layout effect</h1>
            <hr />

            <blockquote className="blockquote text-end">
                <p ref={pRef} className="mb-0">{quote}  </p>
                {/* <footer className="text-end">{author}</footer> */}
            </blockquote>
            <pre>{JSON.stringify(boxSize,null,3) }</pre>

            <button className="btn btn-primary" onClick={increase}>Siguiente frase</button>




        </>
    )
}
