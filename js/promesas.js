const aplicarDescuento = new Promise((res, rej) => {
    setTimeout( () => {
        let descuento = false;

        if(descuento) {
            res("Descuento aplicado!")
        } else {
            rej("Error, No se aplico el descuento!")
        }
    }, 3000 );
});

// console.log(aplicarDescuento); <-- me dara: {<pending>}
// Si en la promesa ves:{<pending>}
// porque falta el metodo then

aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(e => {
    console.log(e)
});

// Promosas con AJAX
const descargarUsusarios = cantidad => new Promise((resolve, reject) => {
    //  Pasar cantidad a la API
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`
    // llamar a ajax
    const xhr = new XMLHttpRequest();
    // Abrir conexion
    xhr.open('GET', api, true);
    // on load
    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve ( JSON.parse(xhr.responseText).results )
        } else {
            reject(Error(xhr.statusText));
        }
    }

    // enviar
    xhr.send();
});

descargarUsusarios(10).then(
    miembros => imprimirHTML(miembros),
    error => console.error(
        new Error('Hubo un error' + error)
    )
);

function imprimirHTML(usuarios) {
    let html = '';
    usuarios.map(usuario => {
        html += `
            <li>
              Nombre: ${usuario.name.first} ${usuario.name.last}
              Pais: ${usuario.nat}
              imagen:
                <img src="${usuario.picture.medium}">
            </li>
        `;
    })

    const contenedorApp = document.querySelector('#root');
    contenedorApp.innerHTML = html;
}