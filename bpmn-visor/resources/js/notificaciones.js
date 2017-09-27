
	function mensajePrimario(texto)
	{
		jQuery.gritter.add({
			title: 'SISTEMA',
            text: texto,
            class_name: 'growl-primary gritter-center',
            image: 'resources/plantilla/images/screen.png', sticky: false, time: ''
         });
	}
	
	function mensajeProcesado(texto)
	{
		jQuery.gritter.add({
			title: 'PROCESO',
            text: texto,
            class_name: 'growl-success gritter-center',
            image: 'resources/plantilla/images/screen.png', sticky: false, time: ''
         });
	}
  
	function mensajePrecaucion(texto)
	{
		jQuery.gritter.add({
			title: 'ADVERTENCIA',
            text: texto,
            class_name: 'growl-warning gritter-center',
            image: 'resources/plantilla/images/screen.png', sticky: false, time: ''
         });
	}
  
	function mensajeError(texto)
	{
		jQuery.gritter.add({
			title: 'ERROR',
            text: texto,
            class_name: 'growl-error gritter-center',
            image: 'resources/plantilla/images/screen.png', sticky: false, time: ''
         });
	}
  
	function mensajeInformacion(texto)
	{
		jQuery.gritter.add({
			title: 'INFORMACION',
            text: texto,
            class_name: 'growl-danger gritter-center',
            image: 'resources/plantilla/images/screen.png', sticky: false, time: ''
         });
	}