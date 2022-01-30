import React, {useEffect, useState} from 'react'

export const Message = () => {

    const [coord, setCoord] = useState({x:0, y:0})    
    const {x,y}=coord

    useEffect(() => {

        const mouseMove=(e)=>{
        

            const coors= {x:e.x, y:e.y}
            // console.log('xd');
            setCoord(coors);
        }

        window.addEventListener('mousemove', mouseMove);
  
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);


    return (
        <>
            <h3>Eres genial!</h3>   
            <p>
                x:{x} y:{y }
            </p>
        </>
    )
}
