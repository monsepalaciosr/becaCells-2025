const url = 'https://jsonplaceholder.typicode.com/posts';

function obtienePosts () {
    fetch(url)
        .then(resultado => { 
            return resultado.json();
        })
        .then (datos => {
            // datos.forEach(({id, title, body}) => {
            //     console.log(`${id}`);
            //     console.log(`${title}`)
            //     console.log(`${body}`)
            // })
            iniciaPeticion(datos);
        })
}

function iniciaPeticion(datos) {
    const pidePeticion = document.querySelector('#button');
    pidePeticion.addEventListener('click', function(){
        const dosPosts = datos.slice(0, 2);
            const contenedor = document.querySelector('.container');
            
            dosPosts.forEach(({ title, body }) => {
                
                const postDiv = document.createElement('div');
                postDiv.classList.add('post'); 
                postDiv.innerHTML = `
                    <h3>${title}</h3>
                    <p>${body}</p>
                `;
    
                
                contenedor.appendChild(postDiv);
            });
    })
}

obtienePosts();