function cambio() {
  document.getElementById("titulo").innerHTML = "Cambiado desde JS!!";
}
document.getElementById("btn1").onclick = function (){
  cambio();
}
