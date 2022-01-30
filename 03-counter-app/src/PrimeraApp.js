import React from 'react';
import PropTypes from 'prop-types'


const PrimeraApp = ({saludo, subtitulo}) => {
    
        
    return (
        //Aca debemos importar Fragment
        // <Fragment>
        //     <h1>app dolape</h1>
        //     <p>tu ermanaa xdxd</p>
        // </Fragment>


        //otro tipo de fragment sin importar
        <>                  
        <h1>{saludo}</h1>
        <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes={
    saludo: PropTypes.string.isRequired //Obliga a otras personas a mandar los propiedades necesarias
};

PrimeraApp.defaultProps={
    subtitulo: 'Soy un subtitulo xdxd'
}

export default PrimeraApp;




