var nombre = "Mia",
    edad = 14;

    if ( edad >= 18 ) {
      document.write("ok cumple TIENES MAS DE 18");
    }else if (nombre == "Dalia") {
      document.write("Esposa del Admin " + nombre);
    }else if (nombre == "Mia") {
      document.write("Hermosa !: " + nombre);
    }else {
      document.write("No!");
    }

    document.write("<br><br>");

    if (nombre == "Omar" && edad == 18) {
      document.write("Bienvenido Administrador");
    }else {
      document.write("No eres el admin");
    }

    document.write("<br><br>");

    if (nombre == "Mia" || nombre == "Dalia" || nombre == "Ana") {
      document.write("Familia");
    }
