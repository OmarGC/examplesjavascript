// crear variables: no comienzan con numeros ni continen caracteres extraños.

// antes
var nombre = "juan";

// ES6 +
// la variable const siempre
// tiene que tener un valor de inicio.
// y no cambia.
const nom = 'Omargc';

console.log(nom)
function evalue1(music) {
    if(music === 'Rock') {
        console.log('la variable es Rock');
    } else {
        console.log('no es rock')
    }
}

/*  --- Scope
  Es saber en que parte del programa
  el valor de una variable esta
  disponible o no disponible.
*/
var music = 'Rock';

if(music) {
    var music = 'gronge';
    console.log('dentro del if: ', music);
}
console.log('fuera del if: ' , music);
// con var el valor se rescribe

console.log('--------')

// Scope con let

let music2 = 'Rock';
if(music2) {
    let music2 = 'gronge';
    console.log('dentro del if: ', music2);
}
console.log('fuera del if: ' , music2);