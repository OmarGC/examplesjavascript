let datos = [
    {"id": 123, "nombre": "omar", "apellido": "GC", "estado": true},
    {"id": 456, "nombre": "dalia", "apellido": "AR", "estado": false},
    {"id": 789, "nombre": "mia", "apellido": "GA", "estado": false},
    {"id": 200, "nombre": "arturo", "apellido": "HC", "estado": true},
    {"id": 307, "nombre": "jill", "apellido": "LC", "estado": false}
];

/** map: 
 *  Recorre uno a uno los elementos
 *  y los procesa para devolver un nuevo array
 */

// var nombres = datos.map( (element) => element.nombre );
// out: omar, dalia, mia

// var ids = datos.map((e) => {
//     if(e.estado) return e.id +1
//     else return e.id
// })
// out: 124,456,789

// si quiero solo el nombre:
let nombres = datos.map(function(nombre) {
  return nombre.nombre;
})
// out: omar,dalia,mia

let nombresConEstado = datos.map(function(nombres) {
    let r = {nombre: nombres.nombre , estado: nombres.estado};
    console.log(r) 
    return JSON.stringify(r);
  })
// out: {"nombre":"omar","estado":true},{"nombre":"dalia","estado":false},{"nombre":"mia","estado":false} esto es una cadena


/** Object keys
 * Sirve para traernos los keys de un objeto.
 * imprime el atributo del objeto
 */
 console.log(Object.keys(datos[0]))
 // out: (4) ["id", "nombre", "apellido", "estado"]

document.getElementById('root').innerHTML = nombresConEstado;


// Este metodo solo sirve en arrays!