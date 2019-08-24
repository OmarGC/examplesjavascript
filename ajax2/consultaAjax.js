

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


	function ConsultaMysql(datos){

		divResultado = document.getElementById('resultado');
		ajax=objetoAjax();
		ajax.open("POST", datos, true);
		ajax.onreadystatechange=function() {
			if (ajax.readyState==4) {
				divResultado.innerHTML = ajax.responseText
			}
		}
		ajax.send(null);
		setTimeout("ConsultaMysql('consulta.php')", 500);

	}

	//Evento para consultar datos mysql
	document.getElementById("body").onload = function (){
	  ConsultaMysql('consulta.php');

	}


	function mostrarJSON(datos) {

		var divJSON = document.getElementById('json');
		ajax=objetoAjax();
		ajax.open("POST", datos, true);
		ajax.onreadystatechange=function() {
			if (ajax.readyState === 4 && ajax.status === 200) {
				var dts = JSON.parse(ajax.responseText);
				if (divJSON.innerHTML === "") {
					for (var i in dts) {
						divJSON.innerHTML += i + ": " + dts[i] + "<br>";
					}
				}
			}
		}
		ajax.send(null);
		//setTimeout("mostrarJSON('datos.json')", 500);
	}

	//Evento para consultar datos mysql
	document.getElementById("btnJSON").onclick = function (){
	  //mostrar JSON!
		mostrarJSON('datos.json');

	}






	//Mostrar Consulta en pantalla:
	//document.getElementById("resultado").innerHTML = mostrarConsulta("consulta.php");
