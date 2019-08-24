let nom = 'Omar';
let ape = 'Corés';

const contendedorApp = document.querySelector('#app');
let html = `
  <h1>Introducción / Recordatorio JavaScript</h1>
  <ul>
    <li>Nombre: ${nom} </li>
    <li>Apellido: ${ape} </li>
  </ul>
`;

contendedorApp.innerHTML = html;

// Funciones:
/**
 * nos permite crear codigo que podemos reutilizar
 * hay 2 tipos:
 * functions declaration -> no importa el orden de programar
 * functions expression  -> Si importa el orden. primero se tiene que declarar y despues ejecutar.
 * La diferencia es que la expression si importa el orden
 */

 // function declaration
 saludo('pe');
 function saludo(nom) {
     console.log(`Bienvenido ${nom}`)
 }

 // function expression
 // no se puede ejecutar antes de ser declarasa!!
 const client = function(cli) {
     console.log(`Mostrando clientes: ${cli}`)
 }

 client(nom)