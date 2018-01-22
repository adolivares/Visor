var objCP1 = new Object();
var objCP2 = new Object();
var listDatos = [];
var data = [];
var msg = "";
var resultado="";


	


function generarPDF(list){
	listDatos = [];
	console.log(resp + " main")


 	if(resultado==""){
		$("#idMsg").html('<div class="alert alert-warning">'+
			'No hay resultados para generar el pdf '+$(this).find("estatus").text()+
			'</div>');
	}



	if(list.length > 0){
		$('#ModalGenerandoPDF').modal('show');


		for(i in list){
			var idFolio = list[i].folio;
			var tipoList = list[i].tipoList;
			var idMB_C = list[i].idBusqueda;
			var urn ="";
			var payloadDet="";
				

			data = [list[i].fecha, list[i].idBusqueda, list[i].idCliente, list[i].nombre, list[i].apaterno, list[i].amaterno, list[i].relacion, list[i].aplicacion, list[i].resultado, list[i].tipoList,  list[i].porcentBusq, list[i].porcenCoin, list[i].folio, list[i].estatus, list[i].lista];
			  
				consultaComentarios2(idFolio,tipoList,idMB_C, data, resultado);		
				
			}
		
		
	}	
	
}




function imprimir(data, resultado) {

	var docDefinition = {
		  footer: function(currentPage, pageCount) { return { text:'Página '+currentPage.toString() + ' de ' + pageCount,fontSize: 7,alignment: 'center'}; },
		  header: function(currentPage, pageCount) {return {};},
	   content: [
		 { image: 'bee',width: 200,height: 50, style: 'header' },
		 { text: '  ', style: 'anotherStyle' },
		 { text: 'INFORMACIÓN DETALLADA DE COINCIDENCIA', bold: true, },
		 { text: '  ', style: 'anotherStyle' },
		 { style: 'superMargin',text: [{text: 'Fecha: ', style: 'anotherStyle'},{text: data[0], fontSize: 10,}]},
		 { style: 'superMargin',text: [{text: 'Id de búsqueda: ', style: 'anotherStyle'},{text: data[1], fontSize: 10,}]},
		 { style: 'superMargin',text: [{text: 'Id Cliente: ', style: 'anotherStyle'},{text: data[2], fontSize: 10,}]},
		 { style: 'superMargin',text: [{text: 'Nombre o Razón social: ', style: 'anotherStyle'},{text: data[3], fontSize: 10,}]},
		 { style: 'superMargin',text: [{text: 'Apellido Paterno: ', style: 'anotherStyle'},{text: data[4], fontSize: 10,}]},
		 { style: 'superMargin',text: [{text: 'Apellido Materno: ', style: 'anotherStyle'},{text: data[5], fontSize: 10,}]},
		 { style: 'superMargin',text: [{text: 'Relación: ', style: 'anotherStyle'},{text: data[6], fontSize: 10,}]},
		 { style: 'superMargin',text: [{text: 'Aplicación: ', style: 'anotherStyle'},{text: data[7], fontSize: 10,}]},
		 { style: 'superMargin',text: [{text: 'Resultado Calificación:  ', style: 'anotherStyle'},{text: data[8], fontSize: 10,}]},
		 { style: 'superMargin',text: [{text: 'Tipo de Lista: ', style: 'anotherStyle'},{text: data[14], fontSize: 10,}]},
		 { style: 'superMargin',text: [{text: 'Porcentaje de búsqueda: ', style: 'anotherStyle'},{text: data[10], fontSize: 10,}]},
		 { style: 'superMargin',text: [{text: 'Porcentaje de coincidencia: ', style: 'anotherStyle'},{text: data[11], fontSize: 10,}]},
		 { style: 'superMargin',text: [{text: 'Estatus : ', style: 'anotherStyle'},{text: data[13], fontSize: 10,}]},
		 { text: '  ', style: 'anotherStyle' },
		 { text: 'DETALLE DE LA COINCIDENCIA', bold: true, },
		 { text: '  ', style: 'anotherStyle' },
		 constructBody(resultado)
		,{
		  table: {
			// headers are automatically repeated if the table spans over multiple pages
			// you can declare how many rows should be treated as headers
			headerRows: 1,
			widths: [80, '*', 220, '*'],
			body: this.buildTableBody()
			/*body: [
			  [ { text: 'Fecha búsqueda', bold: true,color:'#FFFFFF' },{ text: 'Hora búsqueda', bold: true,color:'#FFFFFF' },{ text: 'Comentarios', bold: true,color:'#FFFFFF' },{ text: 'Usuario', bold: true,color:'#FFFFFF' }],
			  [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
			  [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
			]*/
		  },
			layout: {
				fillColor: function (i, node) { 
				var colo =null;
					if(i ==0){
						colo ='#4a0061'
					}else{
						colo =(i % 2 === 0) ?  '#F7DCF7' : null
					}
					return colo; 
				}
			}
		}
	    ],
		images: {
			bee: base64Img
		},
	    styles: {
		 header: {
		   fontSize: 22,
		   bold: true
		 },
		 anotherStyle: {
		   bold: true,
		   margin: [ 5, 2, 5, 10 ],
		   alignment: 'left',
		   fontSize: 13
		 },
		superMargin: {
			 margin: [ 5, 2, 5, 10 ],
		
		}
	   }
	 };
	// open the PDF in a new window
  pdfMake.createPdf(docDefinition).download('Detalle coincidencia.pdf');
  $('#ModalGenerandoPDF').modal('hide');
}
function constructBody(resultado){
	
	xmlHttpRequest = resp;
	var form ="";
	var res ="";
	var format = new Date(new Date());
	var dia = format.getDate();
	var mm = format.getMonth()+1;
	var anio = format.getFullYear();
	var usuario = "<%=user%>";
	
	console.log(dia+mm+anio);
	if(dia < 10){
		dia = '0'+ dia;
	}
	if(mm < 10){
		mm = '0' + mm;
	}
	var date = dia+'/'+mm+'/'+anio;
	
	if($(xmlHttpRequest).find('resultadoComentariosLNegra').text() != ''){
		
		$(xmlHttpRequest).find('resultadoComentariosLNegra').each(function(){
			res =	 [
					{ text: 'LISTA NEGRA', style: 'anotherStyle' },
					{ style: 'superMargin',text: [{text: 'FOLIO: ', style: 'anotherStyle'},{text: $(this).find("tb_corr").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'FECHA: ', style: 'anotherStyle'},{text: $(this).find("tb_dateadd").text(), fontSize: 10,} ]},
					{ style: 'superMargin',text: [{text: 'DÍAS: ', style: 'anotherStyle'},{text: $(this).find("tb_days").text(), fontSize: 10,} ]},
					{ style: 'superMargin',text: [{text: 'C55016: ', style: 'anotherStyle'},{text: $(this).find("C55016").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'NOMBRE: ', style: 'anotherStyle'},{text: $(this).find("nombre").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'JUSTIFICACIÓN: ', style: 'anotherStyle'},{text: $(this).find("justificacion").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'AUTORIDAD ESPECÍFICA NOMBRE: ', style: 'anotherStyle'},{text: $(this).find("autespnombre").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'AUTORIDAD NOMBRE: ', style: 'anotherStyle'},{text: $(this).find("autnombre").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'ÁREA CLAVE: ', style: 'anotherStyle'},{text: $(this).find("cnbv_areaclave").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'ÁREA CLAVE / AGG: ', style: 'anotherStyle'},{text: $(this).find("cnbvaclagg").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'ÁREA DESCRIPCIÓN: ', style: 'anotherStyle'},{text: $(this).find("cnbvadescp").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'DÍAS PLAZO: ', style: 'anotherStyle'},{text: $(this).find("cnbv_diasplazo").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'DÍAS PLAZO / AGG: ', style: 'anotherStyle'},{text: $(this).find("cnbv_diasplagg").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'FECHA PUBLICACIÓN: ', style: 'anotherStyle'},{text: $(this).find("cnbvfechpbl").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'FOLIO: ', style: 'anotherStyle'},{text: $(this).find("cnbv_folio").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'FOLIO / AGG: ', style: 'anotherStyle'},{text: $(this).find("cnbv_folioagg").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'NÚMERO EXPEDIENTE: ', style: 'anotherStyle'},{text: $(this).find("cnbvnroexp").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'NÚMERO OFICIO: ', style: 'anotherStyle'},{text: $(this).find("cnbv_nrooficio").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'OFICIO YEAR: ', style: 'anotherStyle'},{text: $(this).find("cnbv_oficioyear").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'OFICIO YEAR / AGG: ', style: 'anotherStyle'},{text: $(this).find("cnbvoficioyearagg").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'SOLICITUD SIARA: ', style: 'anotherStyle'},{text: $(this).find("cnbvsolicitudsiara").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'NOMBRE SOLICITANTE: ', style: 'anotherStyle'},{text: $(this).find("nombresolicitante").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'TIPO DE REQUERIMIENTO: ', style: 'anotherStyle'},{text: $(this).find("trequeq").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'REFERENCIA 1: ', style: 'anotherStyle'},{text: $(this).find("referencia1").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'REFERENCIA 2: ', style: 'anotherStyle'},{text: $(this).find("referencia2").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'REFERENCIA 3: ', style: 'anotherStyle'},{text: $(this).find("referencia3").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'CARACTER: ', style: 'anotherStyle'},{text: $(this).find("sespecpsc").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'COMPLEMENTARIOS: ', style: 'anotherStyle'},{text: $(this).find("sesppscomp").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'DOMICILIO: ', style: 'anotherStyle'},{text: $(this).find("sesppsdomicilio").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'MATERNO: ', style: 'anotherStyle'},{text: $(this).find("sesppsmaterno").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'NOMBRE: ', style: 'anotherStyle'},{text: $(this).find("sesppsnombre").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'PATERNO: ', style: 'anotherStyle'},{text: $(this).find("sesppspaterno").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'PERSONA ID: ', style: 'anotherStyle'},{text: $(this).find("sesppspersonid").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'PERSONA ID / AGG: ', style: 'anotherStyle'},{text: $(this).find("sesppsperidagg").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'RELACIÓN: ', style: 'anotherStyle'},{text: $(this).find("sesppsolrelacion").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'SOLICITUD ESPECÍFICA ID: ', style: 'anotherStyle'},{text: $(this).find("sespsespid").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'SOLICITUD ESPECÍFICA ID / AGG: ', style: 'anotherStyle'},{text: $(this).find("sespsespidagg").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'TIENE ASEGURAMIENTO: ', style: 'anotherStyle'},{text: $(this).find("taseguramiento").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'DÍA: ', style: 'anotherStyle'},{text: $(this).find("dia").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'MES: ', style: 'anotherStyle'},{text: $(this).find("mes").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'AÑO: ', style: 'anotherStyle'},{text: $(this).find("anio").text(), fontSize: 10,}]}
				];
		});
	}else if($(xmlHttpRequest).find('getComentariosLGrisResp').text() != ''){
		
		$(xmlHttpRequest).find('getComentariosLGrisResp').each(function(){

			res =	 [
					{ text: 'LISTA GRIS', style: 'anotherStyle' },
					{ style: 'superMargin',text: [{text: 'FOLIO: ', style: 'anotherStyle'},{text: $(this).find("tb_corr").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'FECHA: ', style: 'anotherStyle'},{text: $(this).find("tb_dateadd").text(), fontSize: 10,} ]},
					{ style: 'superMargin',text: [{text: 'DIAS: ', style: 'anotherStyle'},{text: $(this).find("tb_days").text(), fontSize: 10,} ]},
					{ style: 'superMargin',text: [{text: 'C55016: ', style: 'anotherStyle'},{text: $(this).find("C55016").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'NOMBRE: ', style: 'anotherStyle'},{text: $(this).find("nombre").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'APELLIDO PATERNO: ', style: 'anotherStyle'},{text: $(this).find("paterno").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'APELLIDO MATERNO: ', style: 'anotherStyle'},{text: $(this).find("materno").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'CARACTER: ', style: 'anotherStyle'},{text: $(this).find("caracter").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'COMPLEMENTARIOS: ', style: 'anotherStyle'},{text: $(this).find("complementarios").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'TIPO PERSONA: ', style: 'anotherStyle'},{text: $(this).find("tipopersona").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'REFERENCIA: ', style: 'anotherStyle'},{text: $(this).find("referencia").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'NUMERO EXPEDIENTE: ', style: 'anotherStyle'},{text: $(this).find("cnbv_numeroexpedient").text(), fontSize: 10,}]}
					
				];
		});
	}else if($(xmlHttpRequest).find('getComentariosLSitiResp').text() != ''){
		$(xmlHttpRequest).find('getComentariosLSitiResp').each(function(){
			res =	 [
					{ text: 'LISTA SITI', style: 'anotherStyle' },
					{ style: 'superMargin',text: [{text: 'ID PERSONA: ', style: 'anotherStyle'},{text: $(this).find("id_reg_persona").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'CARACTER: ', style: 'anotherStyle'},{text: $(this).find("caracter").text(), fontSize: 10,} ]},
					{ style: 'superMargin',text: [{text: 'PERSONA: ', style: 'anotherStyle'},{text: $(this).find("persona").text(), fontSize: 10,} ]},
					{ style: 'superMargin',text: [{text: 'PATERNO: ', style: 'anotherStyle'},{text: $(this).find("paterno").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'MATERNO: ', style: 'anotherStyle'},{text: $(this).find("materno").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'NOMBRE: ', style: 'anotherStyle'},{text: $(this).find("nombre").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'RFC: ', style: 'anotherStyle'},{text: $(this).find("rfc").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'RELACION: ', style: 'anotherStyle'},{text: $(this).find("relacion").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'DOMICILIO: ', style: 'anotherStyle'},{text: $(this).find("domicilio").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'COMPLEMENTARIOS: ', style: 'anotherStyle'},{text: $(this).find("complementarios").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'CNBV_NUM_OFICIO: ', style: 'anotherStyle'},{text: $(this).find("cnbv_num_oficio").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'CNBV_NUM_EXPEDIENTE: ', style: 'anotherStyle'},{text: $(this).find("cnbv_num_expediente").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'CNBV_SOL_SIARA: ', style: 'anotherStyle'},{text: $(this).find("cnbv_sol_siara").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'CNBV_FOLIO: ', style: 'anotherStyle'},{text: $(this).find("cnbv_folio").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'CNBV_OFICIO_YEAR: ', style: 'anotherStyle'},{text: $(this).find("cnbv_oficio_year").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'CNBV_AREA_CLAVE: ', style: 'anotherStyle'},{text: $(this).find("passports").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'CNBV_AREA_DESC: ', style: 'anotherStyle'},{text: $(this).find("cnbv_area_desc").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'CNBV_FECHA_PUB: ', style: 'anotherStyle'},{text: $(this).find("locations").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'CNBV_DIAS_PLAZO: ', style: 'anotherStyle'},{text: $(this).find("cnbv_dias_plazo").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'AUTORIDAD_NOMBRE: ', style: 'anotherStyle'},{text: $(this).find("autoridad_nombre").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'AUTORIDAD_ESP_NOMBRE: ', style: 'anotherStyle'},{text: $(this).find("further_information").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'NOMBRE_SOLICITANTE: ', style: 'anotherStyle'},{text: $(this).find("entered_date").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'FECHA DE MODIFICACIÓN: ', style: 'anotherStyle'},{text: $(this).find("updated_date").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'REFERENCIA: ', style: 'anotherStyle'},{text: $(this).find("referencia").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'REFERENCIA1: ', style: 'anotherStyle'},{text: $(this).find("referencia1").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'REFERENCIA2: ', style: 'anotherStyle'},{text: $(this).find("referencia2").text(), fontSize: 10,}]}
				];
		});	
	}
	else if($(xmlHttpRequest).find('getComentariosLWCResp').text() != ''){
	
		$(xmlHttpRequest).find('getComentariosLWCResp').each(function(){
		res =	 [
					{ text: 'LISTA WORLD CHECK', style: 'anotherStyle' },
					{ style: 'superMargin',text: [{text: 'FOLIO: ', style: 'anotherStyle'},{text: $(this).find("uid").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'NOMBRE: ', style: 'anotherStyle'},{text: $(this).find("first_name").text(), fontSize: 10,} ]},
					{ style: 'superMargin',text: [{text: 'APELLIDO: ', style: 'anotherStyle'},{text: $(this).find("last_name").text(), fontSize: 10,} ]},
					{ style: 'superMargin',text: [{text: 'ALISASES: ', style: 'anotherStyle'},{text: $(this).find("aliases").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'ALTERNATIVO: ', style: 'anotherStyle'},{text: $(this).find("alternative_spelling").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'CATEGORÍA: ', style: 'anotherStyle'},{text: $(this).find("category").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'TÍTULO: ', style: 'anotherStyle'},{text: $(this).find("title").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'SUB CATEGORÍA: ', style: 'anotherStyle'},{text: $(this).find("sub_category").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'POSICIÓN: ', style: 'anotherStyle'},{text: $(this).find("position").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'EDAD: ', style: 'anotherStyle'},{text: $(this).find("age").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'FECHA DE NACIMIENTO: ', style: 'anotherStyle'},{text: $(this).find("date_of_birth").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'LUGAR DE NACIMIENTO: ', style: 'anotherStyle'},{text: $(this).find("place_of_birth").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'PASAPORTES: ', style: 'anotherStyle'},{text: $(this).find("passports").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'SEGURO SOCIAL: ', style: 'anotherStyle'},{text: $(this).find("social_security").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'UBICACIONES: ', style: 'anotherStyle'},{text: $(this).find("locations").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'PAISES: ', style: 'anotherStyle'},{text: $(this).find("countries").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'TIPO DE PERSONA: ', style: 'anotherStyle'},{text: $(this).find("type_of_person").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'INFO ADICIONAL: ', style: 'anotherStyle'},{text: $(this).find("further_information").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'FECHA DE CREACIÓN: ', style: 'anotherStyle'},{text: $(this).find("entered_date").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'FECHA DE MODIFICACIÓN: ', style: 'anotherStyle'},{text: $(this).find("updated_date").text(), fontSize: 10,}]},
					{ style: 'superMargin',text: [{text: 'KEYWORDS: ', style: 'anotherStyle'},{text: $(this).find("keywords").text(), fontSize: 10,}]}
				];
		});	
	}else{
		res = "No se encontraron resultados";
	}	
	return res;
}	
function buildTableBody() {
    var body = [];
	 var nombre ="";
	 var fecha = "";
	 var hora = "";
	 var comentario = "";
	 var usuario_alta = "";
	 var category = "";
	var columns =[ { text: 'Fecha búsqueda', bold: true,color:'#FFFFFF' },{ text: 'Hora búsqueda', bold: true,color:'#FFFFFF' },{ text: 'Comentarios', bold: true,color:'#FFFFFF' },{ text: 'Usuario', bold: true,color:'#FFFFFF' }];
    body.push(columns);
		if($(xmlHttpRequestComent.responseText).find('resultadoGetComents').text() != ''){
			
			$(xmlHttpRequestComent.responseText).find('resultadoGetComents').each(function(){
				 nombre = $(this).find("nombre").text();
				 comentario = $(this).find("observaciones").text();
				 usuario_alta = $(this).find("usuario_alta").text();
				var dataRow = [ $(this).find("fecha_alta").text().substring(0,10), $(this).find("fecha_alta").text().substring(11,19),  nombre +' ' + comentario, usuario_alta];
					body.push(dataRow);
			});
			
		}else{
			var dataRow = [ ' ', '', 'No hay datos para mostrar', ' ' ];
			body.push(dataRow);
		}
    return body;
}



function shuffleSentence(words) {
	if ( typeof words === 'string')
		return words;
	words = words || faker.lorem.words(8);
	var str = faker.helpers.shuffle(words).join(' ').trim();
	return str.charAt(0).toUpperCase() + str.slice(1);
}


function toDataURL(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}
toDataURL('images/logo.jpg', function(dataUrl) {
  base64Img=  dataUrl;
});


function consultaComentarios2(id, tipo, idConsulta, data, resultado){
		var payload;
		var urn;
		 $('#listComentarios tbody tr').remove();
		 $('#H4 span').remove("");
		

		payload  = '<dat:qGetObservaciones xmlns:dat="http://ws.wso2.org/dataservice" xmlns:dsb="dsBpmnVisor">';
		payload += '<dat:id_lista>'+tipo+'</dat:id_lista>';
		payload += '<dat:id_consulta>'+idConsulta+'</dat:id_consulta>';
		payload += '<dat:tb_corr>'+id+'</dat:tb_corr>';
		payload += '</dat:qGetObservaciones>';
		urn = 'urn:qGetObservaciones';
		
	   $.ajax({
				url: '/commons/postSOAP',
				type: 'post',
				headers: {'Destino':'BpmnVisor', 'SOAPAction':urn},
				dataType: 'xml',
				complete: comentariosResponse,
				error: function (xhr, status, error) {},
				data: payload
		});    
	}

	var xmlHttpRequestComent;
	function comentariosResponse(xmlHttpRequest, status){
		
		xmlHttpRequestComent='';
		xmlHttpRequestComent = xmlHttpRequest;
		imprimir(data, resultado);
	}
 


