function suma(n1, n2){
  //pasamos los paramatros a variables locales
  var num1 = parseFloat(document.getElementById('numero1').value);
  var num2 = parseFloat(document.getElementById('numero2').value);


  return num1 + num2;

}

//Funcion AutoInvocada:
//Para que el codigo que este afuera no pueda acceder adentro
//pero el codigo que esta adentro si puede acceder a afuera
//(function(){

//}())


function maxi( v1, v2 ){
  if (v1 > v2) {
    return v1;
  }

  return v2;

}
