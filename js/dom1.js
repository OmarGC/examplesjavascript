//traer a todos los elementos que tenga etiqueta "li" en un arreglo
//var elementosP = document.getElementsByTagName("li");

//Acceder a un elemento con el id
//var elmentoId = document.getElementById("subtitulo");

//Accede a un elemento desde etiqueta
//parentNode = nos trae cual es el elemento padre
//var elementoId2 = document.getElementsByTagName("li")[0].parentNode;


//Crea elementos
var elemento = document.createElement("h2");
//crea un nodo
var contenido = document.createTextNode("Este es el nuevo subtitulo con JS");
//Añadir el nodo de texto al elemento
elemento.appendChild(contenido);
//Agregar atributos al elemento
elemento.setAttribute("align", "center");
//Agregar el elmento al documento
var sub = document.getElementById("subtitulo").appendChild(elemento);

//***************
//Agrega elemento dentro de otro elemento html
var li = document.createElement("li");
var contenido2 = document.createTextNode("nuevo texto con JS!");
li.appendChild(contenido2);

var padre = document.getElementsByTagName("li")[0].parentNode;
padre.appendChild(li);
//***************
//modificar
var elem = document.getElementById("elem");
//elem.textContent = "nuevo texto JS <i>JavaScript</i>"
elem.innerHTML = "nuevo texto JS <i>JavaScript</i>"

//Eliminar un elemento
padre.removeChild(elem);
