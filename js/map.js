let datos = [
    {"id": 123, "nombre": "omar", "apellido": "GC", "estado": true},
    {"id": 456, "nombre": "dalia", "apellido": "AR", "estado": false},
    {"id": 789, "nombre": "mia", "apellido": "GA", "estado": false}
];

// map: recorre uno a uno los elementos, y procesarlos para devolver un nuevo array

var nombres = datos.map( (e) => e.nombre );

var ids = datos.map((e) => {
    if(e.estado) return e.id +1
    else return e.id
})


document.getElementById('root').innerHTML = nombres;


// Este metodo solo sirve en arrays!