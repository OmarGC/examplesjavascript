const contendedorApp = document.querySelector('#app');

const objetoJS = {
    version: {
        nueva : 'ES6',
        anterior: 'ES5'
    },
    framework: ['React', 'Vue', 'Angular']
}

// Destructuring
let { anterior, nueva } = objetoJS.version;

let html = `
  <h1>Introducción / Recordatorio JavaScript</h1>
  <ul>
    <li>Nombre: ${nueva} </li>
    <li>Apellido: ${anterior} </li>
  </ul>
`;

contendedorApp.innerHTML = html;

/**
 * El Destructuring es como extraer
 * valores de un objeto.
 * Tiene que saver a donde ir
 * 
 */