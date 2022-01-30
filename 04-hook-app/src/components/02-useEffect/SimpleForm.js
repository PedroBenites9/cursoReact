import React,{useEffect, useState} from 'react'


import './effects.css'
import { Message } from './Message';


export const SimpleForm = () => {

    const [formState, setFormState] = useState(
            {
            name:'',
            email:''
        }
    )

    const {name, email} = formState;


    const handleInputChange = ({target})=>{
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }




    useEffect(()=>{
        // console.log('Hey!!')



    },[]);
    useEffect(()=>{
        // console.log('formState cambió')



    },[formState]);
    useEffect(()=>{
        // console.log('email cambió')



    },[email]);

    return (
        <>
                   
            <h1>UseEffect</h1>
            <hr />

            <div className="form-group">
                <input type="text" 
                name='name' 
                className='form-control' 
                placeholder='tu nombre' 
                value={name} 
                onChange={handleInputChange}/>
            </div>
            <div className="form-group">
                <input type="text" 
                name='email' 
                className='form-control' 
                placeholder='email@xxxxx.com' 
                value={email} 
                onChange={handleInputChange}/>
            </div>

            {(name==='123') && <Message />}
        </>
    )
}
