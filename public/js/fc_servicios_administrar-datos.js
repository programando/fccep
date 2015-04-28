// Validacion De Formulario  == GRABAR ==
var $nombre_servicos         = $('#nom_servicio');
var $categorias_servicios    = $('#categoria_servicio');
var $subcategorias_servicios = $('#subcategoria_servicio');

// Efectos Validacion
$nombre_servicos .on('focus',function(){
   if ( $nombre_servicos.val() == 'Registre el nombre' ) {
     $nombre_servicos.css('background','white') ;
     $nombre_servicos.css('color','#555') ;
     $nombre_servicos.val('');
   }
});

$categorias_servicios.on('focus',function(){
	   if( $categorias_servicios.val()== 'Registre Categoria'){
	   	   $categorias_servicios.css('background','white');
	   	   $categorias_servicios.css('color','#555');
	   	   $categorias_servicios.val('');
	   }
});

$subcategorias_servicios.on('focus',function(){
	    if( $subcategorias_servicios.val()=='Registre Subcategoria'){
	    	   $subcategorias_servicios.css('background','white');
	    	   $subcategorias_servicios.css('color','#555');
	    	   $subcategorias_servicios.val('');
	    }
});

// Evneto
$('#btn_grabar_servicios').on('click',function(){

   if ( $nombre_servicos.val()=='' ) {
        $nombre_servicos.css('background','#FF3333') ;
        $nombre_servicos.css('color','white') ;
        $nombre_servicos.val('Registre el nombre');
        $campos_validados= false;
   }

   if($categorias_servicios.val()==''){
   	  $categorias_servicios.css('background','#FF3333');
   	  $categorias_servicios.css('color','white');
      $categorias_servicios.val('Registre Categoria');
      $campos_validados= false;
   }

   if($subcategorias_servicios.val()==''){
   	  $subcategorias_servicios.css('background','#FF3333');
   	  $subcategorias_servicios.css('color','white');
   	  $subcategorias_servicios.val('Registre Subcategoria');
   	  $campos_validados= false;
   }
});
