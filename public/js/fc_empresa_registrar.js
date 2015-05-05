// Validacion De Formulario  == GRABAR ==

// Efecto De Validacion
$('#identificacion').on('focus',function(){
  var $nit           = $('#identificacion');
   if ( $nit.val() == 'Registre el nombre' ) {
     $nit.css('background','white') ;
     $nit.css('color','black') ;
     $nit.val('');
   }
});

$('#razon_social').on('focus',function(){
  var $razon_social  = $('#razon_social');
   if ( $razon_social.val() == 'Ingrese Razón Social' ) {
     $razon_social.css('background','white') ;
     $razon_social.css('color','black') ;
     $razon_social.val('');
   }
});

$('#direccion').on('focus',function(){
  var $direccion     = $('#direccion');
   if ( $direccion.val() == 'Ingrese Dirección' ) {
     $direccion.css('background','white') ;
     $direccion.css('color','black') ;
     $direccion.val('');
   }
});

$('#nro_telefono').on('focus',function(){
  var $telefono      = $('#nro_telefono');
   if ( $telefono.val() == 'Ingrese Teléfono' ) {
     $telefono.css('background','white') ;
     $telefono.css('color','black') ;
     $telefono.val('');
   }
});

$('#idmcipio').on('focus',function(){
    var $ciudad        = $('#idmcipio');
   if ( $ciudad.val() == 'Ingrese Ciudad' ) {
     $ciudad.css('background','white') ;
     $ciudad.css('color','black') ;
     $ciudad.val('');
   }
});

$('#idactividad').on('focus',function(){
  var $act_economica = $('#idactividad');
   if ( $act_economica.val() == 'Ingrese Actividad Económica' ) {
     $act_economica.css('background','white') ;
     $act_economica.css('color','black') ;
     $act_economica.val('');
   }
});

$('#contacto').on('focus',function(){
  var $contacto      = $('#contacto');
   if ( $contacto.val() == 'Ingrese Contacto' ) {
     $contacto.css('background','white') ;
     $contacto.css('color','black') ;
     $contacto.val('');
   }
});

$('#email').on('focus',function(){
  var $email         = $('#email');
   if ( $email.val() == 'Ingrese Email' ) {
     $email.css('background','white') ;
     $email.css('color','black') ;
     $email.val('');
   }
})

$('#password').on('focus',function(){
   var $password      = $('#password');
   if ( $password.val() == 'Ingrese Password' ) {
     $password.css('background','white') ;
     $password.css('color','black') ;
     $password.val('');
   }
})

var Mensaje = function(parametros)
{
   $('.modal-body #texto').html(parametros);
   $('#ventana').modal('show');
}

function Grabar_Empresa(Parametros)
{
  $.ajax({
          data:  Parametros,
          dataType: 'text',
          url:      '/fccep/empresa/grabar/',
          type:     'post',
           success:  function (resultado)
           {
            resultado =  resultado.replace("\n", "");
            resultado = resultado.replace(/\s+/g, '');
            if ( resultado == 'EmailNoOk')
            {
              Mensaje('El correo electrónico tiene un formato no válido. El registro no pudo ser grabado.')
            }else{
               Mensaje('Registro almacenado con éxito !.')
              $('#identificacion').val('');
              $('#razon_social').val('');
              $('#direccion').val('');
              $('#nro_telefono').val('');
              $('#contacto').val('');
              $('#email').val('');
              $('#password').val('');
            }
           }
        });
}


// Evento
$('#btn_grabar').on('click',function(){
  var $nit           = $('#identificacion');
  var $razon_social  = $('#razon_social');
  var $direccion     = $('#direccion');
  var $telefono      = $('#nro_telefono');
  var $ciudad        = $('#idmcipio');
  var $act_economica = $('#idactividad');
  var $contacto      = $('#contacto');
  var $email         = $('#email');
  var $password      = $('#password');
  var $Parametros    ='';
   $campos_validados = true ;

   if ( $nit.val()=='' ) {
        $nit.css('background','#FF3333') ;
        $nit.css('color','white') ;
        $nit.val('Registre el nombre');
        $campos_validados= false;
   }

   if ( $razon_social.val()=='' ) {
        $razon_social.css('background','#FF3333') ;
        $razon_social.css('color','white') ;
        $razon_social.val('Ingrese Razón Social');
        $campos_validados= false;
   }

   if ( $direccion.val()=='' ) {
        $direccion.css('background','#FF3333') ;
        $direccion.css('color','white') ;
        $direccion.val('Ingrese Dirección');
        $campos_validados= false;
   }

   if ( $telefono.val()=='' ) {
        $telefono.css('background','#FF3333') ;
        $telefono.css('color','white') ;
        $telefono.val('Ingrese Teléfono');
        $campos_validados= false;
   }

   if ( $ciudad.val()=='' ) {
        $ciudad.css('background','#FF3333') ;
        $ciudad.css('color','white') ;
        $ciudad.val('Ingrese Ciudad');
        $campos_validados= false;
   }

   if ( $act_economica.val()=='' ) {
        $act_economica.css('background','#FF3333') ;
        $act_economica.css('color','white') ;
        $act_economica.val('Ingrese Actividad Económica');
        $campos_validados= false;
   }

   if ( $contacto.val()=='' ) {
        $contacto.css('background','#FF3333') ;
        $contacto.css('color','white') ;
        $contacto.val('Ingrese Contacto');
        $campos_validados= false;
   }

   if ( $email.val()=='' ) {
        $email.css('background','#FF3333') ;
        $email.css('color','white') ;
        $email.val('Ingrese Email');
        $campos_validados= false;
   }

   if ( $password.val()=='' ) {
        $password.css('background','#FF3333') ;
        $password.css('color','white') ;
        $password.val('Ingrese Password');
        $campos_validados= false;
   }

 if ($campos_validados == true )
 {
    var $nit           = $nit.val();
    var $razon_social  = $razon_social.val();
    var $direccion     = $direccion.val();
    var $telefono      = $telefono .val();
    var $ciudad        = $ciudad.val();
    var $act_economica = $act_economica.val();
    var $contacto      = $contacto.val();
    var $email         = $email.val();
    var $password      = $password.val();
    $Parametros = {'idactividad':$act_economica,'idmcipio':$ciudad ,'identificacion':$nit,'razon_social':$razon_social,
                   'email':$email,'direccion':$direccion, 'contacto':$contacto, 'nro_telefono':$telefono, 'password':$password  };
   Grabar_Empresa($Parametros);
 }



});
