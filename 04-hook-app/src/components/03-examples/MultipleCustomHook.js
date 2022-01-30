import React,{useState, useEffect} from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import'../02-useEffect/effects.css'


export const MultipleCustomHook = () => {
    
    const {counter, increase} = useCounter(1); 
    
    const {loading, data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    
    const {author, quote} = (!!data && data.length>0)&& data[0];
        
    console.log({author, quote})

    
    return (      
        <>
            <h1>Custom Hooks!!</h1>
            <hr/>
            {loading?(//-----> es un if
                <div className="alert alert-info text-center">
                    Loading... 
                </div>
            ):(//----> es un else 
                <blockquote className="blockquote text-end">
                    <p className="mb-0">{quote}  </p>
                    <footer className="text-end">{author}</footer>
                </blockquote>
            )}

            <button className="btn btn-primary" onClick={increase}>Siguiente frase</button>




        </>
    )
}
