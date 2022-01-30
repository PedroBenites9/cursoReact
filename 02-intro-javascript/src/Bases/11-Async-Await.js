// const getImagen=async()=>{  //esto es una promsa pero plasmado de otra forma
//     return 'https://paginapunga.com';
// }



// getImagen().then(console.log);


const getImagen = async()=>{

    const apiKey = 'WENs183I9UQ42kb4572BOytLB6YQcLJj';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    
    // const leImg=data.data.images.original.url; //este tmb sirve
    const {url} = data.images.original; //usando desestructuracion

    const img = document.createElement('img');
    img.src=url;
    document.body.append(img);
    
}

getImagen();