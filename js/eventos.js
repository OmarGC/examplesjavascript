//modelo de eventos estandar

//Funcion AutoInvocada
(function(){

  var btn = document.getElementById('boton');

  btn.addEventListener("click", function(){
    console.log('Funciono! el evento');
  } );

  //----------------------------------

  var saludo = function(){
    alert('Funciono el evento 2');
  };

  var btn2 = document.getElementById('btn2');

  btn2.addEventListener("click", saludo);

  //---------------------------------

  var ch = function(){
    console.log('focus!');
  };

  var input = document.getElementById('input');
  input.addEventListener("change", ch);

}())
