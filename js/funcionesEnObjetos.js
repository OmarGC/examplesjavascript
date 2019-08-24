const contendedorApp = document.querySelector('#app');
const persona = {
    nombre: 'Omargc',
    trabajo: 'Desarrollador FullStack',
    edad: 22,
    hijos: true,
    saludar: function() {
      return `${this.nombre} el ${this.trabajo} dice hola!`
    }
}


let html = `
  <h1>Introducción / Recordatorio JavaScript</h1>
  <ul>
    <li>Nombre: ${persona.nombre} </li>
    <li>Apellido: ${persona.trabajo} </li>
  </ul>
  <p>${persona.saludar()}</p>
`;
contendedorApp.innerHTML = html;
