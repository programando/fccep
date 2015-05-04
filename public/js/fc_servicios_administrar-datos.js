// Validacion De Formulario  == GRABAR ==


// Efectos Validacion
$('#nom_servicio').on('focus',function(){
  var $nombre_servicos         = $('#nom_servicio');
   if ( $nombre_servicos.val() == 'Registre el nombre' ) {
     $nombre_servicos.css('background','white') ;
     $nombre_servicos.css('color','#555') ;
     $nombre_servicos.val('');
   }
});

$('#categoria_servicio').on('focus',function(){
    var $categorias_servicios    = $('#categoria_servicio');
	   if( $categorias_servicios.val()== 'Registre Categoria'){
	   	   $categorias_servicios.css('background','white');
	   	   $categorias_servicios.css('color','#555');
	   	   $categorias_servicios.val('');
	   }
});

$('#subcategoria_servicio').on('focus',function(){
  var $subcategorias_servicios = $('#subcategoria_servicio');
	    if( $subcategorias_servicios.val()=='Registre Subcategoria'){
	    	   $subcategorias_servicios.css('background','white');
	    	   $subcategorias_servicios.css('color','#555');
	    	   $subcategorias_servicios.val('');
	    }
});

function Grabar_Servicios(Parametros)
{
  $.ajax({
          data:  Parametros,
          dataType: 'text',
          url:      '/fccep/servicios/grabar/',
          type:     'post',
           success:  function (resultado)
           {
            $('.modal-body #texto').html('Registro almacenado con éxito !.');
            $('#ventana').modal('show');
            $('#nom_servicio').val('');
            $('#categoria_servicio').val('');
            $('#subcategoria_servicio').val('');
           }
        });
}

// Evneto
$('#btn_grabar_servicios').on('click',function(){
    var $campos_validados        = true;
    var $nombre_servicos         = $('#nom_servicio');
    var $categorias_servicios    = $('#categoria_servicio');
    var $subcategorias_servicios = $('#subcategoria_servicio');

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

  if ( $campos_validados == true )
  {
      $nombre_servicos         = $nombre_servicos.val();
      $categorias_servicios    = $categorias_servicios.val();
      $subcategorias_servicios = $subcategorias_servicios.val();
      $Parametros              = {'nomactividad': $nombre_servicos, 'categoria':$categorias_servicios,'subcategoria':$subcategorias_servicios};
      Grabar_Servicios($Parametros);

  }

});
