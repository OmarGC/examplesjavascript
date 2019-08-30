// Metodos con arreglos!

let datos = [
    {"id": 1, "nombre": "Ana Laura",   "edad": 38, "apellido": "CS", "estado": false},
    {"id": 9, "nombre": "omar",   "edad": 24, "apellido": "GC", "estado": true},
    {"id": 6, "nombre": "Dalia",  "edad": 23, "apellido": "AR", "estado": true},
    {"id": 79, "nombre": "mia",    "edad": 4, "apellido": "GA", "estado": false},
    {"id": 20, "nombre": "arturo", "edad": 19, "apellido": "HM", "estado": true},
    {"id": 37, "nombre": "jill",   "edad": 14, "apellido": "LC", "estado": false},
    {"id": 30, "nombre": "Gloria",   "edad": 58, "apellido": "PC", "estado": true},
    {"id": 7, "nombre": "Ernesto",   "edad": 40, "apellido": "CX", "estado": null},
    {"id": 17, "nombre": "Pepe",   "edad": 35, "apellido": "RC", "estado": true},
    {"id": 3, "nombre": "Liliana",   "edad": 38, "apellido": "PZ", "estado": false},
    {"id": 33, "nombre": "Neptali",   "edad": 13, "apellido": "LP", "estado": true},
    {"id": 4, "nombre": "Jessica",   "edad": 37, "apellido": "VB", "estado": true},
    {"id": 7, "nombre": "Dalia",  "edad": 50, "apellido": "TR", "estado": false},
    {"id": 66, "nombre": "Dalia",  "edad": 2, "apellido": "RS", "estado": true},
    {"id": 46, "nombre": "Dalia",  "edad": 10, "apellido": "RR", "estado": false},
    {"id": 8, "nombre": "Fabiola",  "edad": 23, "apellido": "DD", "estado": false},
];

console.log(datos); // imprime el arreglo completo.

/** Metodo filter
 * Permite filtrar la informacion
 * del arreglo. Recorre uno a uno los elementos
 *  y los procesa para devolver un nuevo array
 */


// Filtra las dalias y retorna sus edades (Con ayuda de map).
const edadesDalias = datos.filter(persona => {
    return persona.nombre === 'Dalia'
})
.map(con23 => {
    return con23.edad;
});
console.log(edadesDalias);
//out : [23, 50, 2, 10]

// Imprime los mayores de edad en el arreglo. 
const mayores = datos.filter(persona => {
    return persona.edad > 18;
});
console.log(mayores);

// Imprime los menores de edad en el arreglo. 
const menores = datos.filter(persona => {
    return persona.edad < 18;
});
console.log(menores);

// ------------------------------------------
// Buscar por ID metodo filter no sirve!
const id = datos.filter(persona => {
    return persona.id === 1;
});
console.log(id)
// out : [{"id": 1, "nombre": "Ana Laura",   "edad": 38, "apellido": "CS", "estado": false}]
console.log(`Mi mamá tenia ${id.edad}`);
// out: Mi mamá tenia undefined  <-- Observa como imprime undefined

/**Metodo find
 * Para buscar existe el metodo find
 * es propio de js.
 */

const ma = datos.find(persona => {
    return persona.id === 1;
});
console.log(ma)
// out: {id: 1, nombre: "Ana Laura", edad: 38, apellido: "CS", estado: false}
console.log(`Mi mamá tenia ${ma.edad}`);
//out:  Mi mamá tenia 38


// Filtra las dalias y busca la de 23.
const daliaDe23 = datos.filter(persona => {
    return persona.nombre === 'Dalia'
})
.filter(con23 => {
    return con23.edad === 23;
});
console.log(daliaDe23);
// Si existiera otra dalia de 23 igual la retorna en el arreglo.
// [{"id": 6, "nombre": "Dalia",  "edad": 23, "apellido": "AR", "estado": true}]