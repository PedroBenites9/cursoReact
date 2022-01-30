const apiKey = 'WENs183I9UQ42kb4572BOytLB6YQcLJj';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


peticion.then(resp=> resp.json()).then(({data})=>{
    const {url} = data.images.original;
    
    const img = document.createElement('img');
    img.src=url; 

    document.body.append(img); //Colocamos un gif al body
})
.catch(console.warm);
