
	function contienePalabrasError(texto) {
		var resp = false;
		var palabras = ["NOAPLICA", "DESCONOCIDO", "DESCONOCIDA", "SINDATO",
                        "NOTIENE","NUMERODECUENTA", "Y/O", "CONOCIDO", "CONOCIDA"];
		texto = texto.replace(/\s/g,"").toUpperCase();
		texto = reemplazaAcentos(texto);
		for(var i = 0; i<palabras.length; i++){
			if(texto.search(palabras[i])!=-1){
				resp = true;
				break;
			}
		}
		return resp;
	}

	function reemplazaAcentos(texto) {
		if(texto != null) {
			texto = texto.replace(/Á/g, "A");
			texto = texto.replace(/É/g, "E");
			texto = texto.replace(/Í/g, "I");
			texto = texto.replace(/Ó/g, "O");
			texto = texto.replace(/Ú/g, "U");
			texto = texto.replace(/Ñ/g, "N");
		}
		return texto;
	}

   	function valida_rfc(rfc, tipoPersona,esOpcional){
   		var patron="";

   		if(tipoPersona == 1) {
   			if(esOpcional){
   	   			patron = new RegExp("^((([A-ZÑ&]{4}))((([02468][048]|[13579][26])0229)|([0-9]{2})(((0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-8]))|((0[13-9]|1[012])(29|30))|((0[13578]|1[02])31)))([A-Z0-9]{3})?)?$");
   			}else{
   	   			patron = new RegExp("^((([A-ZÑ&]{4}))((([02468][048]|[13579][26])0229)|([0-9]{2})(((0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-8]))|((0[13-9]|1[012])(29|30))|((0[13578]|1[02])31)))([A-Z0-9]{3})?)$");
   			}
   		} else if(tipoPersona == 2) {
   			if(esOpcional){
   	   			patron = new RegExp("^((([A-ZÑ&]{3}))((([02468][048]|[13579][26])0229)|([0-9]{2})(((0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-8]))|((0[13-9]|1[012])(29|30))|((0[13578]|1[02])31)))([A-Z0-9]{3})?)?$");
   			}else{
   	   			patron = new RegExp("^((([A-ZÑ&]{3}))((([02468][048]|[13579][26])0229)|([0-9]{2})(((0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-8]))|((0[13-9]|1[012])(29|30))|((0[13578]|1[02])31)))([A-Z0-9]{3})?)$");
   			}

   	   	}

		if(rfc.search(patron)==0) {	
            return true;
        }
        return false;
    }
	
   	function esNumerico(numero){
  		patron = new RegExp("^([0-9]*)$");

		if(numero.search(patron)==0) {	
            return true;
        }
        return false;
    }
   	
   	function validaRegExp(regExp, valor){
  		patron = new RegExp(regExp);

		if(valor.search(patron)==0) {	
            return true;
        }
        return false;
    }

   	function datepickerEspaniol() {
   		$.datepicker.regional['es'] = {
   		closeText: 'Cerrar',
   		prevText: ' nextText: Sig>',
   		currentText: 'Hoy',
   		monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
   		'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
   		monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
   		'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
   		dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
   		dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié;', 'Juv', 'Vie', 'Sáb'],
   		dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
   		weekHeader: 'Sm',
   		dateFormat: 'dd/mm/yy',
   		firstDay: 1,
   		isRTL: false,
   		showMonthAfterYear: false,
   		yearSuffix: ''
   		};
   		$.datepicker.setDefaults($.datepicker.regional['es']);
	}
   	
    function getDiferenciasDias(f1,f2) {
        var fecha1 = f1.getTime();
        var fecha2 = f2.getTime();
        var dif = fecha1 - fecha2;
        var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
        return dias;
    }