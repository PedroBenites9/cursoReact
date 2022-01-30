import React, { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {

    const isMounted = useRef(true); //2* lo que hicimos es crear un is Mouted para que el estado de este hook no se llame de nuevo, sucede cuando se interrumpe un llamado en pleno proceso y luego llamamos de nuevo el proceso
                                    //cuando cancelamos algo en pleno proceso de carga, se consumen memoria y en chrome sale warning. Con este ismouted solo verifica que si se interrumpe. 
                                    //Mantiene la referencia cuando este hook se esta usando o cuando un componente este llamando dicho hook.

    const [state, setstate] = useState({ data: null, loadin: true, error: null })

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])
    useEffect(() => {

        setstate({ data: null, loading: true, error: null });

        fetch(url).then(resp => resp.json()).then(data => {

            //setTimeout(() => { //1*el setTimeOut es intencional, es un error a proposito para usar el useRef
                if (isMounted.current) {

                    setstate({
                        loading: false,
                        error: null,
                        data
                    });

                } else {
                    console.log('Se evitó un error y/o uso de memoría demás');
                }


            //}, 3000);

        })
    }, [url])

    return state;

}
