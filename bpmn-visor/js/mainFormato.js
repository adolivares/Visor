var objCP1 = new Object();
var objCP2 = new Object();

function generarPDF(){
	if(resultado==""){
		$("#idMsg").html('<div class="alert alert-warning">'+
			'No hay resultados para generar el pdf '+$(this).find("estatus").text()+
			'</div>');
	}
	$('#ModalGenerandoPDF').modal('show');
	//consultaListas(nFFolioCliente, TLCliente,'listasResponImp')
	var id = $("#txtFolio").val();
	var tipo = $("#txtTipo").val();
	comentarios(id, tipo);
	
//	imprimir();
	//imprimir2();
}
function imprimir2(){
	
}

function listasResponImp(xmlHttpRequest){
	console.log("listas response");
	var form ="";
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
	//console.log($(xmlHttpRequest.responseText).text());
	
	if($(xmlHttpRequest.responseText).find('resultadoComentariosLNegra').text() != ''){
		
		$(xmlHttpRequest.responseText).find('resultadoComentariosLNegra').each(function(){
			var datos = 
			form += "<div><h4></h4></div>";
			form += "<div><h4>LISTA NEGRA</h4>";
			form += "	<hr>";
			form += "</div>";
			form += "<div id=\"detalleList\" style=\"float:left;  margin-left:3%\">";
			form += "	<table id=\"tblDetalle\" style=\"margin-right:auto; width:100%\" class=\"table-content\">";
			form += "   	<tr><td style='display:none'><input type=\"text\" id=\"txtTipo\" value =\"1\"></td><td style='display:none'></td></tr>";
			form += "   	<tr>";
			form += "			<td width=\"35%\">FOLIO:</td>";
			form += "        	<td width=\"95%\"><input  type=\"text\" id=\"txtFolio\" value = \"" + $(this).find("tb_corr").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "      	</tr>";
			form += "	   	<tr>";
			form += "			<td width=\"35%\">FECHA:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("tb_dateadd").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "      	</tr>";
			form += "	   	<tr>";
			form += "			<td width=\"35%\">DIAS:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("tb_days").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "      	</tr>";
			form += "	    <tr>";
			form += "			<td width=\"35%\">C55016:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("C55016").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "	    <tr>";
			form += "			<td width=\"35%\">NOMBRE:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("nombre").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "	    <tr>";
			form += "			<td width=\"35%\">JUSTIFICACION:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("justificacion").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "	    <tr>";
			form += "	 		<td width=\"35%\">AUTORIDAD ESPECÍFICA NOMBRE:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("autespnombre").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "	    <tr>";
			form += "			<td width=\"35%\">AUTORIDAD NOMBRE:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("autnombre").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       <tr>";
			form += "			<td width=\"35%\">ÁREA CLAVE:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("cnbv_areaclave").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       <tr>";
			form += "			<td width=\"35%\">ÁREA CLAVE / AGG:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("cnbvaclagg").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       <tr>";
			form += "			<td width=\"35%\">AREA DESCRIPCIÓN:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("cnbvadescp").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       <tr>";
			form += "			<td width=\"35%\">DÍAS PLAZO:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("cnbv_diasplazo").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">DÍAS PLAZO / AGG:</td>";
			form += "           <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("cnbv_diasplagg").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">FECHA PUBLICACIÓN:</td>";
			form += "           <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("cnbvfechpbl").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">FOLIO:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("cnbv_folio").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">FOLIO / AGG:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("cnbv_folioagg").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">NÚMERO EXPEDIENTE:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("cnbvnroexp").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">NÚMERO OFICIO:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("cnbv_nrooficio").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">OFICIO YEAR:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("cnbv_oficioyear").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "	    	<td width=\"35%\">OFICIO YEAR / AGG:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("cnbvoficioyearagg").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">SOLICITUD SIARA:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("cnbvsolicitudsiara").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">NOMBRE SOLICITANTE:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("nombresolicitante").text()+ "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">TIPO DE REQUERIMIENTO:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("trequeq").text()+ "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">REFERENCIA 1:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("referencia1").text()+ "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">REFERENCIA 2:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("referencia2").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">REFERENCIA 3:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("referencia3").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">CARACTER:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("sespecpsc").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">COMPLEMENTARIOS:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("sesppscomp").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">DOMICILIO:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("sesppsdomicilio").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">MATERNO:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("sesppsmaterno").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "  	    </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">NOMBRE:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("sesppsnombre").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "   	</tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">PATERNO:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("sesppspaterno").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">PERSONA ID:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("sesppspersonid").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">PERSONA ID / AGG:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("sesppsperidagg").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">RELACIÓN:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("sesppsolrelacion").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">SOLICITUD ESPECÍFICA ID:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("sespsespid").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">SOLICITUD ESPECÍFICA ID / AGG:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("sespsespidagg").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">TIENE ASEGURAMIENTO:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("taseguramiento").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">DÍA:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("dia").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">MES:</td>";
			form += "	 	    <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("mes").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "       </tr>";
			form += "			<td width=\"35%\">AÑO:</td>";
			form += "	        <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("anio").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "       </tr>";
			form += "	    <tr>";
			form += "			<td width=\"35%\">OBSERVACIONES (máximo 1000 caracteres):</td>";
			form += "	        <td width=\"95%\"><textarea id=\"txtObservaciones\" name=\"txtObservaciones\" rows=\"4\" maxlength=\"1000\" style=\"width:80%\" required=\"required\"></textarea></td>";
			form += "       </tr>";	
			form += "	    <tr>";
			form += "			<td colspan=\"2\" style=\"font-size:13px;\">Fecha de la consulta: " + date + "</td>";
			form += "       </tr>";
			form += "	    <tr>";
			form += "				<td colspan=\"2\" style=\"font-size:13px;\">Consulta realizada por: "+usuario+"</td>";
			form += "       </tr>";
			form += "	</table>";
			form += "	<br/>";
			form += "	<br/>";
			form += "</div>";	
			$("#form").append(form);
			$('#ModalCargando').modal('hide');
			
		});
	}else if($(xmlHttpRequest.responseText).find('getComentariosLGrisResp').text() != ''){
		resultado = xmlHttpRequest.responseText;
		$(xmlHttpRequest.responseText).find('getComentariosLGrisResp').each(function(){

			form += "<div><h4></h4></div>";
			form += "<div><h4>LISTA GRIS</h4>";
			form += "	<hr>";
			form += "</div>";
			form += "<div id=\"detalleList\" style=\"float:left; margin-left:3%\">";
			form += "	<table style=\"margin-right:auto; width:100%\" class=\"table-content\">";
			form += "   	    <tr><td style='display:none'><input type=\"text\" id=\"txtTipo\" value =\"2\"></td><td style='display:none'></td></tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">FOLIO:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" id=\"txtFolio\" value = \"" + $(this).find("tb_corr").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">FECHA:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("tb_dateadd").text()  + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">DIAS:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("tb_days").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">C55016:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("C55016").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">NOMBRE:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("nombre").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">APELLIDO PATERNO:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("paterno").text()  + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "			<tr>";
			form += "				<td width=\"22%\">APELLIDO MATERNO:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("materno").text()  + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "			<tr>";
			form += "				<td width=\"22%\">CARACTER:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("caracter").text()  + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "			<tr>";
			form += "				<td width=\"22%\">COMPLEMENTARIOS:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("complementarios").text()  + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "			<tr>";
			form += "				<td width=\"22%\">TIPO PERSONA:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("tipopersona").text()  + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "			<tr>";
			form += "				<td width=\"22%\">REFERENCIA:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("referencia").text()  + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "			<tr>";
			form += "				<td width=\"22%\">NUMERO EXPEDIENTE:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("cnbv_numeroexpedient").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">OBSERVACIONES (máximo 1000 caracteres):</td>";
			form += "	            <td width=\"78%\"><textarea id=\"txtObservaciones\" name=\"txtObservaciones\" rows=\"4\" maxlength=\"1000\" style=\"width:80%\" required=\"required\"></textarea></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td colspan=\"2\" style=\"font-size:13px;\">Fecha de la consulta: " + date + "</td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td colspan=\"2\" style=\"font-size:13px;\">Consulta realizada por: "+usuario+"</td>";
			form += "           </tr>";
			form += "	</table>";
			form += "	<br/>";
			form += "	<br/>";
			form += "	<br/>";
			form += "</div>";
			$("#form").append(form);
			$('#ModalCargando').modal('hide');
		});
	}else if($(xmlHttpRequest.responseText).find('getComentariosLSitiResp').text() != ''){
		resultado = xmlHttpRequest.responseText;
		$(xmlHttpRequest.responseText).find('getComentariosLSitiResp').each(function(){
			form += "	<div><h4></h4></div>";
			form += "	<div><h4>LISTA SITI</h4>";
			form += "	<hr>";
			form += "	</div>";
			form += "	<div id=\"detalleList\" style=\"float:left;  margin-left:3%\">";
			form += "		<table style=\"margin-right:auto; width:100%\" class=\"table-content\">";
			form += "   	<tr><td style='display:none'><input type=\"text\" id=\"txtTipo\" value =\"3\"></td><td style='display:none'></td></tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">ID PERSONA:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" id=\"txtFolio\" value = \"" + $(this).find("id_reg_persona").text()+ "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">CARACTER:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("caracter").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">PERSONA:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("persona").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">PATERNO:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("paterno").text()+ "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">MATERNO:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("materno").text()+ "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">NOMBRE:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("nombre").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">RFC:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("rfc").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">RELACION:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("relacion").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">DOMICILIO:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("domicilio").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">COMPLEMENTARIOS:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("complementarios").text()+ "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">CNBV_NUM_OFICIO:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("cnbv_num_oficio").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">CNBV_NUM_EXPEDIENTE:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("cnbv_num_expediente").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">CNBV_SOL_SIARA:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("cnbv_sol_siara").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">CNBV_FOLIO:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("cnbv_folio").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">CNBV_OFICIO_YEAR:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("cnbv_oficio_year").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">CNBV_AREA_CLAVE:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("cnbv_area_clave").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">CNBV_AREA_DESC:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("cnbv_area_desc").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">CNBV_FECHA_PUB:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("cnbv_fecha_pub").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">CNBV_DIAS_PLAZO:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("cnbv_dias_plazo").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">AUTORIDAD_NOMBRE:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("autoridad_nombre").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">AUTORIDAD_ESP_NOMBRE:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("autoridad_esp_nombre").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">NOMBRE_SOLICITANTE:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("nombre_solicitante").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">REFERENCIA:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("referencia").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">REFERENCIA1:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("referencia1").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">REFERENCIA2:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("referencia2").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">OBSERVACIONES (máximo 1000 caracteres):</td>";
			form += "	            <td width=\"78%\"><textarea id=\"txtObservaciones\" name=\"txtObservaciones\" rows=\"4\" maxlength=\"1000\" style=\"width:80%\" required=\"required\"></textarea></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td colspan=\"2\" style=\"font-size:13px;\">Fecha de la consulta: " + date + "</td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td colspan=\"2\" style=\"font-size:13px;\">Consulta realizada por: "+usuario+"</td>";
			form += "           </tr>";
			form += "        </tbody>";
			form += "    </table>";
			form += "	<br/>";
			form += "	<br/>";
			form += "	<br/>";
			form += "</div>";
			$("#form").append(form);
			$('#ModalCargando').modal('hide');
		});	
	}
	else if($(xmlHttpRequest.responseText).find('getComentariosLWCResp').text() != ''){
		resultado = xmlHttpRequest.responseText;
		$(xmlHttpRequest.responseText).find('getComentariosLWCResp').each(function(){
			form += "	<div><h4></h4></div>";
			form += "	<div><h4>LISTA WORLD CHECK</h4>";
			form += "	<hr>";
			form += "	</div>";
			form += "	<div id=\"detalleList\" style=\"float:left;  margin-left:3%\">";
			form += "		<table style=\"margin-right:auto; width:100%\" class=\"table-content\">";
			form += "   	    <tr><td style='display:none'><input type=\"text\" id=\"txtTipo\" value =\"4\"></td><td style='display:none'></td></tr>";
			form += "   	    <tr><td style='display:none'><input type=\"text\" id=\"txtUser\" value =\""+usuario+"\"></td><td style='display:none'></td></tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">FOLIO:</td>";
			form += "	            <td width=\"95%\"><input id=\"txtFolio\" name=\"idFolio\" type=\"text\" value = \"" + $(this).find("uid").text()+ "\"disabled=\"true\" style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">NOMBRE:</td>";
			form += "	            <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("first_name").text()+ "\"disabled=\"true\" style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">APELLIDO:</td>";
			form += "	            <td width=\"95%\"><input type=\"text\" value = \"" + $(this).find("last_name").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">ALISASES:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("aliases").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">ALTERNATIVO:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("alternative_spelling").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">CATEGORIA:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" +$(this).find("category").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">TITULO:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("title").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">SUB CATEGORIA:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" +$(this).find("sub_category").text()+ "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">POSICION:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("position").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">EDAD:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("age").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">FECHA DE NACIMIENTO:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("date_of_birth").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">LUGAR DE NACIMIENTO:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("place_of_birth").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">PASAPORTES:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("passports").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">SEGURO SOCIAL:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("social_security").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">UBICACIONES:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("locations").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">PAISES:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("countries").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">TIPO DE PERSONA:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("type_of_person").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">INFO ADICIONAL:</td>";
			form += "	            <td width=\"78%\"><textarea disabled='true' rows=\"4\" maxlength=\"1000\" style=\"width:80%\" >" + $(this).find("further_information").text() + "</textarea></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">FECHA DE CREACION:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("entered_date").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">FECHA DE MODIFICACION:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("updated_date").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">KEYWORDS:</td>";
			form += "	            <td width=\"78%\"><input type=\"text\" value = \"" + $(this).find("keywords").text() + "\"disabled=\"true\"style=\"width:80%\"></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td width=\"22%\">OBSERVACIONES (máximo 1000 caracteres):</td>";
			form += "	            <td width=\"78%\"><textarea id=\"txtObservaciones\" name=\"txtObservaciones\" rows=\"4\" maxlength=\"1000\" style=\"width:80%\" required=\"required\"></textarea></td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td colspan=\"2\" style=\"font-size:13px;\">Fecha de la consulta: " + date + "</td>";
			form += "           </tr>";
			form += "	        <tr>";
			form += "				<td colspan=\"2\" style=\"font-size:13px;\">Consulta realizada por: "+usuario+"</td>";
			form += "           </tr>";
			form += "        </tbody>";
			form += "    </table>";
			form += "	<br/>";
			form += "	<br/>";	
			form += "	<br/>";
			form += "</div>";
			
			$("#form").append(form);
			$('#ModalCargando').modal('hide');
		});	
	}else{
		form = "	<h4>No se encontraron resultados</h4>";
		$("#form").append(form);
	}	
}

function imprimir() {
	var tipolista="Negra";
	var docDefinition = {
		  footer: function(currentPage, pageCount) { return { text:'Página '+currentPage.toString() + ' de ' + pageCount,fontSize: 7,}; },
		  header: function(currentPage, pageCount) {return {};},
	   content: [
		 { image: 'bee',width: 200,height: 50, style: 'header' },
		 'INFORMACIÓN DETALLADA DE COINCIDENCIA',
		 { text: '  ', style: 'anotherStyle' },
		 { style: 'superMargin',text: [{text: 'Fecha: ', style: 'anotherStyle'},nXML[0]]},
		 { style: 'superMargin',text: [{text: 'Id de búsqueda: ', style: 'anotherStyle'},nXML[1]]},
		 { style: 'superMargin',text: [{text: 'Id Cliente: ', style: 'anotherStyle'},nXML[2]]},
		 { style: 'superMargin',text: [{text: 'Nombre o Razón social: ', style: 'anotherStyle'},nXML[3]]},
		 { style: 'superMargin',text: [{text: 'Apellido Paterno: ', style: 'anotherStyle'},nXML[4]]},
		 { style: 'superMargin',text: [{text: 'Apellido Materno: ', style: 'anotherStyle'},nXML[5]]},
		 { style: 'superMargin',text: [{text: 'Relación: ', style: 'anotherStyle'},nXML[6]]},
		 { style: 'superMargin',text: [{text: 'Aplicación: ', style: 'anotherStyle'},nXML[7]]},
		 { style: 'superMargin',text: [{text: 'Resultado Calificación: ', style: 'anotherStyle'},nXML[8]]},
		 { style: 'superMargin',text: [{text: 'Tipo de Lista: ', style: 'anotherStyle'},nXML[9]]},
		 { style: 'superMargin',text: [{text: 'Porcentaje de búsqueda: ', style: 'anotherStyle'},nXML[10]]},
		 { style: 'superMargin',text: [{text: 'Porcentaje de coincidencia: ', style: 'anotherStyle'},nXML[11]]},
		 { text: '  ', style: 'anotherStyle' },
		 'DETALLE DE LA COINCIDENCIA',
		 constructBody()
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
		   alignment: 'left'
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
function constructBody(){
	
	xmlHttpRequest = resultado;
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
	//console.log($(xmlHttpRequest.responseText).text());
	
	if($(xmlHttpRequest.responseText).find('resultadoComentariosLNegra').text() != ''){
		
		$(xmlHttpRequest.responseText).find('resultadoComentariosLNegra').each(function(){
			res =	 [
					{ text: 'LISTA NEGRA', style: 'anotherStyle' },
					{ style: 'superMargin',text: [{text: 'FOLIO: ', style: 'anotherStyle'},$(this).find("tb_corr").text()]},
					{ style: 'superMargin',text: [{text: 'FECHA: ', style: 'anotherStyle'},$(this).find("tb_dateadd").text() ]},
					{ style: 'superMargin',text: [{text: 'DIAS: ', style: 'anotherStyle'},$(this).find("tb_days").text() ]},
					{ style: 'superMargin',text: [{text: 'C55016: ', style: 'anotherStyle'},$(this).find("C55016").text()]},
					{ style: 'superMargin',text: [{text: 'NOMBRE: ', style: 'anotherStyle'},$(this).find("nombre").text()]},
					{ style: 'superMargin',text: [{text: 'JUSTIFICACION: ', style: 'anotherStyle'},$(this).find("justificacion").text()]},
					{ style: 'superMargin',text: [{text: 'AUTORIDAD ESPECÍFICA NOMBRE: ', style: 'anotherStyle'},$(this).find("autespnombre").text()]},
					{ style: 'superMargin',text: [{text: 'AUTORIDAD NOMBRE: ', style: 'anotherStyle'},$(this).find("autnombre").text()]},
					{ style: 'superMargin',text: [{text: 'ÁREA CLAVE: ', style: 'anotherStyle'},$(this).find("cnbv_areaclave").text()]},
					{ style: 'superMargin',text: [{text: 'ÁREA CLAVE / AGG: ', style: 'anotherStyle'},$(this).find("cnbvaclagg").text()]},
					{ style: 'superMargin',text: [{text: 'AREA DESCRIPCIÓN: ', style: 'anotherStyle'},$(this).find("cnbvadescp").text()]},
					{ style: 'superMargin',text: [{text: 'DÍAS PLAZO: ', style: 'anotherStyle'},$(this).find("cnbv_diasplazo").text()]},
					{ style: 'superMargin',text: [{text: 'DÍAS PLAZO / AGG: ', style: 'anotherStyle'},$(this).find("cnbv_diasplagg").text()]},
					{ style: 'superMargin',text: [{text: 'FECHA PUBLICACIÓN: ', style: 'anotherStyle'},$(this).find("cnbvfechpbl").text()]},
					{ style: 'superMargin',text: [{text: 'FOLIO: ', style: 'anotherStyle'},$(this).find("cnbv_folio").text()]},
					{ style: 'superMargin',text: [{text: 'FOLIO / AGG: ', style: 'anotherStyle'},$(this).find("cnbv_folioagg").text()]},
					{ style: 'superMargin',text: [{text: 'NÚMERO EXPEDIENTE: ', style: 'anotherStyle'},$(this).find("cnbvnroexp").text()]},
					{ style: 'superMargin',text: [{text: 'NÚMERO OFICIO: ', style: 'anotherStyle'},$(this).find("cnbv_nrooficio").text()]},
					{ style: 'superMargin',text: [{text: 'OFICIO YEAR: ', style: 'anotherStyle'},$(this).find("cnbv_oficioyear").text()]},
					{ style: 'superMargin',text: [{text: 'OFICIO YEAR / AGG: ', style: 'anotherStyle'},$(this).find("cnbvoficioyearagg").text()]},
					{ style: 'superMargin',text: [{text: 'SOLICITUD SIARA: ', style: 'anotherStyle'},$(this).find("cnbvsolicitudsiara").text()]},
					{ style: 'superMargin',text: [{text: 'NOMBRE SOLICITANTE: ', style: 'anotherStyle'},$(this).find("nombresolicitante").text()]},
					{ style: 'superMargin',text: [{text: 'TIPO DE REQUERIMIENTO: ', style: 'anotherStyle'},$(this).find("trequeq").text()]},
					{ style: 'superMargin',text: [{text: 'REFERENCIA 1: ', style: 'anotherStyle'},$(this).find("referencia1").text()]},
					{ style: 'superMargin',text: [{text: 'REFERENCIA 2: ', style: 'anotherStyle'},$(this).find("referencia2").text()]},
					{ style: 'superMargin',text: [{text: 'REFERENCIA 3: ', style: 'anotherStyle'},$(this).find("referencia3").text()]},
					{ style: 'superMargin',text: [{text: 'CARACTER: ', style: 'anotherStyle'},$(this).find("sespecpsc").text()]},
					{ style: 'superMargin',text: [{text: 'COMPLEMENTARIOS: ', style: 'anotherStyle'},$(this).find("sesppscomp").text()]},
					{ style: 'superMargin',text: [{text: 'DOMICILIO: ', style: 'anotherStyle'},$(this).find("sesppsdomicilio").text()]},
					{ style: 'superMargin',text: [{text: 'MATERNO: ', style: 'anotherStyle'},$(this).find("sesppsmaterno").text()]},
					{ style: 'superMargin',text: [{text: 'NOMBRE: ', style: 'anotherStyle'},$(this).find("sesppsnombre").text()]},
					{ style: 'superMargin',text: [{text: 'PATERNO: ', style: 'anotherStyle'},$(this).find("sesppspaterno").text()]},
					{ style: 'superMargin',text: [{text: 'PERSONA ID: ', style: 'anotherStyle'},$(this).find("sesppspersonid").text()]},
					{ style: 'superMargin',text: [{text: 'PERSONA ID / AGG: ', style: 'anotherStyle'},$(this).find("sesppsperidagg").text()]},
					{ style: 'superMargin',text: [{text: 'RELACIÓN: ', style: 'anotherStyle'},$(this).find("sesppsolrelacion").text()]},
					{ style: 'superMargin',text: [{text: 'SOLICITUD ESPECÍFICA ID: ', style: 'anotherStyle'},$(this).find("sespsespid").text()]},
					{ style: 'superMargin',text: [{text: 'SOLICITUD ESPECÍFICA ID / AGG: ', style: 'anotherStyle'},$(this).find("sespsespidagg").text()]},
					{ style: 'superMargin',text: [{text: 'TIENE ASEGURAMIENTO: ', style: 'anotherStyle'},$(this).find("taseguramiento").text()]},
					{ style: 'superMargin',text: [{text: 'DÍA: ', style: 'anotherStyle'},$(this).find("dia").text()]},
					{ style: 'superMargin',text: [{text: 'MES: ', style: 'anotherStyle'},$(this).find("mes").text()]},
					{ style: 'superMargin',text: [{text: 'AÑO: ', style: 'anotherStyle'},$(this).find("anio").text()]},
				];
		});
	}else if($(xmlHttpRequest.responseText).find('getComentariosLGrisResp').text() != ''){
		resultado = xmlHttpRequest.responseText;
		$(xmlHttpRequest.responseText).find('getComentariosLGrisResp').each(function(){

			res =	 [
					{ text: 'LISTA GRIS', style: 'anotherStyle' },
					{ style: 'superMargin',text: [{text: 'FOLIO: ', style: 'anotherStyle'},$(this).find("tb_corr").text()]},
					{ style: 'superMargin',text: [{text: 'FECHA: ', style: 'anotherStyle'},$(this).find("tb_dateadd").text() ]},
					{ style: 'superMargin',text: [{text: 'DIAS: ', style: 'anotherStyle'},$(this).find("tb_days").text() ]},
					{ style: 'superMargin',text: [{text: 'C55016: ', style: 'anotherStyle'},$(this).find("C55016").text()]},
					{ style: 'superMargin',text: [{text: 'NOMBRE: ', style: 'anotherStyle'},$(this).find("nombre").text()]},
					{ style: 'superMargin',text: [{text: 'APELLIDO PATERNO: ', style: 'anotherStyle'},$(this).find("paterno").text()]},
					{ style: 'superMargin',text: [{text: 'APELLIDO MATERNO: ', style: 'anotherStyle'},$(this).find("materno").text()]},
					{ style: 'superMargin',text: [{text: 'CARACTER: ', style: 'anotherStyle'},$(this).find("caracter").text()]},
					{ style: 'superMargin',text: [{text: 'COMPLEMENTARIOS: ', style: 'anotherStyle'},$(this).find("complementarios").text()]},
					{ style: 'superMargin',text: [{text: 'TIPO PERSONA: ', style: 'anotherStyle'},$(this).find("tipopersona").text()]},
					{ style: 'superMargin',text: [{text: 'REFERENCIA: ', style: 'anotherStyle'},$(this).find("referencia").text()]},
					{ style: 'superMargin',text: [{text: 'NUMERO EXPEDIENTE: ', style: 'anotherStyle'},$(this).find("cnbv_numeroexpedient").text()]},
					
				];
		});
	}else if($(xmlHttpRequest.responseText).find('getComentariosLSitiResp').text() != ''){
		resultado = xmlHttpRequest.responseText;
		$(xmlHttpRequest.responseText).find('getComentariosLSitiResp').each(function(){
			res =	 [
					{ text: 'LISTA SITI', style: 'anotherStyle' },
					{ style: 'superMargin',text: [{text: 'ID PERSONA: ', style: 'anotherStyle'},$(this).find("id_reg_persona").text()]},
					{ style: 'superMargin',text: [{text: 'CARACTER: ', style: 'anotherStyle'},$(this).find("caracter").text() ]},
					{ style: 'superMargin',text: [{text: 'PERSONA: ', style: 'anotherStyle'},$(this).find("persona").text() ]},
					{ style: 'superMargin',text: [{text: 'PATERNO: ', style: 'anotherStyle'},$(this).find("paterno").text()]},
					{ style: 'superMargin',text: [{text: 'MATERNO: ', style: 'anotherStyle'},$(this).find("materno").text()]},
					{ style: 'superMargin',text: [{text: 'NOMBRE: ', style: 'anotherStyle'},$(this).find("nombre").text()]},
					{ style: 'superMargin',text: [{text: 'RFC: ', style: 'anotherStyle'},$(this).find("rfc").text()]},
					{ style: 'superMargin',text: [{text: 'RELACION: ', style: 'anotherStyle'},$(this).find("relacion").text()]},
					{ style: 'superMargin',text: [{text: 'DOMICILIO: ', style: 'anotherStyle'},$(this).find("domicilio").text()]},
					{ style: 'superMargin',text: [{text: 'COMPLEMENTARIOS: ', style: 'anotherStyle'},$(this).find("complementarios").text()]},
					{ style: 'superMargin',text: [{text: 'CNBV_NUM_OFICIO: ', style: 'anotherStyle'},$(this).find("cnbv_num_oficio").text()]},
					{ style: 'superMargin',text: [{text: 'CNBV_NUM_EXPEDIENTE: ', style: 'anotherStyle'},$(this).find("cnbv_num_expediente").text()]},
					{ style: 'superMargin',text: [{text: 'CNBV_SOL_SIARA: ', style: 'anotherStyle'},$(this).find("cnbv_sol_siara").text()]},
					{ style: 'superMargin',text: [{text: 'CNBV_FOLIO: ', style: 'anotherStyle'},$(this).find("cnbv_folio").text()]},
					{ style: 'superMargin',text: [{text: 'CNBV_OFICIO_YEAR: ', style: 'anotherStyle'},$(this).find("cnbv_oficio_year").text()]},
					{ style: 'superMargin',text: [{text: 'CNBV_AREA_CLAVE: ', style: 'anotherStyle'},$(this).find("passports").text()]},
					{ style: 'superMargin',text: [{text: 'CNBV_AREA_DESC: ', style: 'anotherStyle'},$(this).find("cnbv_area_desc").text()]},
					{ style: 'superMargin',text: [{text: 'CNBV_FECHA_PUB: ', style: 'anotherStyle'},$(this).find("locations").text()]},
					{ style: 'superMargin',text: [{text: 'CNBV_DIAS_PLAZO: ', style: 'anotherStyle'},$(this).find("cnbv_dias_plazo").text()]},
					{ style: 'superMargin',text: [{text: 'AUTORIDAD_NOMBRE: ', style: 'anotherStyle'},$(this).find("autoridad_nombre").text()]},
					{ style: 'superMargin',text: [{text: 'AUTORIDAD_ESP_NOMBRE: ', style: 'anotherStyle'},$(this).find("further_information").text()]},
					{ style: 'superMargin',text: [{text: 'NOMBRE_SOLICITANTE: ', style: 'anotherStyle'},$(this).find("entered_date").text()]},
					{ style: 'superMargin',text: [{text: 'FECHA DE MODIFICACION: ', style: 'anotherStyle'},$(this).find("updated_date").text()]},
					{ style: 'superMargin',text: [{text: 'REFERENCIA: ', style: 'anotherStyle'},$(this).find("referencia").text()]}
					{ style: 'superMargin',text: [{text: 'REFERENCIA1: ', style: 'anotherStyle'},$(this).find("referencia1").text()]}
					{ style: 'superMargin',text: [{text: 'REFERENCIA2: ', style: 'anotherStyle'},$(this).find("referencia2").text()]}
				];
		});	
	}
	else if($(xmlHttpRequest).find('getComentariosLWCResp').text() != ''){
	
		$(xmlHttpRequest).find('getComentariosLWCResp').each(function(){
		res =	 [
					{ text: 'LISTA WORLD CHECK', style: 'anotherStyle' },
					{ style: 'superMargin',text: [{text: 'FOLIO: ', style: 'anotherStyle'},$(this).find("uid").text()]},
					{ style: 'superMargin',text: [{text: 'NOMBRE: ', style: 'anotherStyle'},$(this).find("first_name").text() ]},
					{ style: 'superMargin',text: [{text: 'APELLIDO: ', style: 'anotherStyle'},$(this).find("last_name").text() ]},
					{ style: 'superMargin',text: [{text: 'ALISASES: ', style: 'anotherStyle'},$(this).find("aliases").text()]},
					{ style: 'superMargin',text: [{text: 'ALTERNATIVO: ', style: 'anotherStyle'},$(this).find("alternative_spelling").text()]},
					{ style: 'superMargin',text: [{text: 'CATEGORIA: ', style: 'anotherStyle'},$(this).find("category").text()]},
					{ style: 'superMargin',text: [{text: 'TITULO: ', style: 'anotherStyle'},$(this).find("title").text()]},
					{ style: 'superMargin',text: [{text: 'SUB CATEGORIA: ', style: 'anotherStyle'},$(this).find("sub_category").text()]},
					{ style: 'superMargin',text: [{text: 'POSICION: ', style: 'anotherStyle'},$(this).find("position").text()]},
					{ style: 'superMargin',text: [{text: 'EDAD: ', style: 'anotherStyle'},$(this).find("age").text()]},
					{ style: 'superMargin',text: [{text: 'FECHA DE NACIMIENTO: ', style: 'anotherStyle'},$(this).find("date_of_birth").text()]},
					{ style: 'superMargin',text: [{text: 'LUGAR DE NACIMIENTO: ', style: 'anotherStyle'},$(this).find("place_of_birth").text()]},
					{ style: 'superMargin',text: [{text: 'PASAPORTES: ', style: 'anotherStyle'},$(this).find("passports").text()]},
					{ style: 'superMargin',text: [{text: 'SEGURO SOCIAL: ', style: 'anotherStyle'},$(this).find("social_security").text()]},
					{ style: 'superMargin',text: [{text: 'UBICACIONES: ', style: 'anotherStyle'},$(this).find("locations").text()]},
					{ style: 'superMargin',text: [{text: 'PAISES: ', style: 'anotherStyle'},$(this).find("countries").text()]},
					{ style: 'superMargin',text: [{text: 'TIPO DE PERSONA: ', style: 'anotherStyle'},$(this).find("type_of_person").text()]},
					{ style: 'superMargin',text: [{text: 'INFO ADICIONAL: ', style: 'anotherStyle'},$(this).find("further_information").text()]},
					{ style: 'superMargin',text: [{text: 'FECHA DE CREACION: ', style: 'anotherStyle'},$(this).find("entered_date").text()]},
					{ style: 'superMargin',text: [{text: 'FECHA DE MODIFICACION: ', style: 'anotherStyle'},$(this).find("updated_date").text()]},
					{ style: 'superMargin',text: [{text: 'KEYWORDS: ', style: 'anotherStyle'},$(this).find("keywords").text()]}
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
	 var category = "";
	var columns =[ { text: 'Fecha búsqueda', bold: true,color:'#FFFFFF' },{ text: 'Hora búsqueda', bold: true,color:'#FFFFFF' },{ text: 'Comentarios', bold: true,color:'#FFFFFF' },{ text: 'Usuario', bold: true,color:'#FFFFFF' }];
    body.push(columns);
	if( $(xmlHttpRequestComent.responseText).find('resultadoComentariosLNegra').text() != ''){
			
			$(xmlHttpRequestComent.responseText).find('resultadoComentariosLNegra').each(function(){
				 nombre = $(this).find("nombre").text();
				 comentario = $(this).find("observations").text();
				var dataRow = [ $(this).find("observations_date").text().substring(0,10), $(this).find("hora").text(),  nombre +' ' + comentario, ' ' ];
					body.push(dataRow);
			});
			
		}else if($(xmlHttpRequestComent.responseText).find('resultadoComentariosLGris').text() != ''){
				$(xmlHttpRequestComent.responseText).find('resultadoComentariosLGris').each(function(){
					 nombre = $(this).find("nombre").text();
					 comentario = $(this).find("observations").text();	
					var dataRow = [ $(this).find("observations_date").text().substring(0,10), $(this).find("hora").text(),  nombre +' ' + comentario, ' ' ];
						body.push(dataRow);
				});
		}else if($(xmlHttpRequestComent.responseText).find('resultadoComentariosLSiti').text() != ''){
				$(xmlHttpRequestComent.responseText).find('resultadoComentariosLSiti').each(function(){
					 nombre = $(this).find("nombre").text();
					 comentario = $(this).find("observations").text();
					var dataRow = [ $(this).find("observations_date").text().substring(0,10), $(this).find("hora").text(),  nombre +' ' + comentario, ' ' ];
						body.push(dataRow);
				});
			
		}else if($(xmlHttpRequestComent.responseText).find('resultadoComentariosLWC').text() != ''){
				$(xmlHttpRequestComent.responseText).find('resultadoComentariosLWC').each(function(){
					nombre = $(this).find("nombre").text();
					comentario = $(this).find("observations").text();
					category = $(this).find("category").text();
					var dataRow = [ $(this).find("observations_date").text().substring(0,10), $(this).find("hora").text(),  nombre +' '+ category+' ' + comentario, ' ' ];
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

function comentarios(id, tipo){
		var payload;
		var urn;
		 $('#listComentarios tbody tr').remove();
		 $('#H4 p').remove("");
		
		switch (tipo) {
			case "1":
				payload  = '<dat:getComentariosLNegra xmlns:dat="http://ws.wso2.org/dataservice" xmlns:dsb="dsBpmnVisorComentarios">';
				payload += '<dat:tbCorrN>'+id+'</dat:tbCorrN>';
				payload += '</dat:getComentariosLNegra>';
				urn = 'urn:getComentariosLNegra';
				break;
			case "2":
				payload  = '<dat:getComentariosLGris xmlns:dat="http://ws.wso2.org/dataservice" xmlns:dsb="dsBpmnVisorComentarios">';
				payload += '<dat:tbCorrG>'+id+'</dat:tbCorrG>';
				payload += '</dat:getComentariosLGris>';
				urn = 'urn:getComentariosLGris';
				break;
			case "3":
				payload  = '<dat:getComentariosLSITI xmlns:dat="http://ws.wso2.org/dataservice" xmlns:dsb="dsBpmnVisorComentarios">';
				payload += '<dat:idreg>'+id+'</dat:idreg>';
				payload += '</dat:getComentariosLSITI>';
				urn = 'urn:getComentariosLSITI';
				break;
			case "4":
				payload  = '<dat:getComentariosLWC xmlns:dat="http://ws.wso2.org/dataservice" xmlns:dsb="dsBpmnVisorComentarios">';
				payload += '<dat:uid>'+id+'</dat:uid>';
				payload += '</dat:getComentariosLWC>';
				urn = 'urn:getComentariosLWC';
			
		}		
		
	   $.ajax({
				url: '/commons/postSOAP',
				type: 'post',
				headers: {'Destino':'BpmnVisorComentarios', 'SOAPAction':urn},
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
		imprimir();
	}
 


