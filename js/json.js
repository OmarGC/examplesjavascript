var objeto = {

  "id" : "001",
  "nom" : "omar",
  "edad" : 21,
  "estatura" : 165.2

};

//document.write("nombre: " + json.nom + "<br>estatura: " + json.estatura);

//document.write("<br>");

//mostrat todo el json
var datosJson = "";

datosJson += "Matricula: " + objeto.id + "<br>";
datosJson += "Nombre: " + objeto.nom + "<br>";
datosJson += "Edad: " + objeto.edad + "<br>";
datosJson += "Estatura: " + objeto.estatura + "<br>";

var json = document.getElementById("json");
json.innerHTML = datosJson;

document.write(typeof json);

document.write("<br><br>");
//convertir JSON a String
var stringJSON = JSON.stringify(json);
document.write(typeof stringJSON);
//document.write(stringJSON);
//convertir de String a JSON:
document.write("<br>");
var objetoJSON = JSON.parse(stringJSON);
document.write(typeof objetoJSON);
