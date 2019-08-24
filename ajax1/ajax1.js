function objetoAjax(){
		var xmlhttp = false;
		try {
			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
			   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (E) {
				xmlhttp = false;
	  		}
		}

		if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
			xmlhttp = new XMLHttpRequest();
		}
		return xmlhttp;
	}


  function loadDoc(datos) {

		ajax=objetoAjax();
		ajax.open('GET',datos, true);

		ajax.onreadystatechange=function() {
			if (ajax.readyState == 4 && ajax.status == 200) {
				var xmlDoc = ajax.responseXML;
				var dato = '';
				dato = xmlDoc.getElementsByTagName('AGENDA')[0].childNodes[0].nodeValue;
				document.getElementById("dts1").innerHTML = dato;
      }
		}
		ajax.send(null);
		setTimeout("loadDoc('datos.xml')", 500);

    }


		//Evento para consultar datos de XML
		document.getElementById("body").onload = function (){
		  //mostrarDatos de archivo xml
			loadDoc('datos.xml');
		}
