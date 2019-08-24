<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>eventos</title>
  </head>
  <body>
    <!--
      document.forms[0] = muestra un arreglo con los fumularios
      document.forms[0].elements[0] = accede a elementos del formulario

      Con atributo name:
      document.form.btn1

      Obtener el valor
      document.form.input.value
    -->
    <form name="form" method="post">

      <button id="boton" type="button" name="btn1">boton</button>
      <button id="btn2" type="button" name="btn2">boton2</button>
      <input id="input" type="text" name="input1" placeholder="Nombre:">
      <br>
      <input id="radio" type="radio" name="radio" > Hombre
      <input id="radio2" type="radio" name="radio2"> Mujer
      <br>
      <input id="chk" type="checkbox" name="chk" value=""> Terminos y condiciones
      <br>
      <!-- submit = cuando se precione el boton se envia el formulario -->
      <input id="submit" type="submit" name="enviar" value="Enviar">
    </form>


    <script src="js/eventos.js" charset="utf-8"></script>
  </body>
</html>
