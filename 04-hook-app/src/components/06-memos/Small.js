// import React,{ memo} from 'react';

// export const Small = memo(({value}) => {
//         console.log('me volvi a llamar :(');           //Metodo #1: importar memo 

//         return (
//             <small>
//                 {value}
//             </small>
//         );
    
//     }
// );
import React from 'react';

export const Small = React.memo(({value}) => {
        console.log('me volvi a llamar :(');               //Metodo #2: llamarlo desde React   (ambos cumple con lo mismo)

        return (
            <small>
                {value}
            </small>
        );
    
    }
);