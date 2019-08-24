var texto = "Omar Gutierrez Cortes";


var nuevoTexto = texto.length;
var sub = texto.substring(6);
var subs = texto.substr(0, 6);
//nos indica en que posicion esta la G en la cadena
var pos = texto.indexOf("O");
var posD = texto.lastIndexOf("O");

var res = texto.replace("Omar", "nuevo");
var mayus = texto.toUpperCase();
var minus = texto.toLowerCase();


document.write(minus);
