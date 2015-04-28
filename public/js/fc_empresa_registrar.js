// Validacion De Formulario  == GRABAR ==
var $nit           = $('#identificacion');
var $razon_social  = $('#razon_social');
var $direccion     = $('#direccion');
var $telefono      = $('#nro_telefono');
var $ciudad        = $('#idmcipio');
var $act_economica = $('#idactividad');
var $contacto      = $('#contacto');
var $email         = $('#email');
var $password      = $('#password');

// Efecto De Validacion
$nit.on('focus',function(){
   if ( $nit.val() == 'Registre el nombre' ) {
     $nit.css('background','white') ;
     $nit.css('color','black') ;
     $nit.val('');
   }
});

$razon_social.on('focus',function(){
   if ( $razon_social.val() == 'Ingrese Razón Social' ) {
     $razon_social.css('background','white') ;
     $razon_social.css('color','black') ;
     $razon_social.val('');
   }
});

$direccion.on('focus',function(){
   if ( $direccion.val() == 'Ingrese Dirección' ) {
     $direccion.css('background','white') ;
     $direccion.css('color','black') ;
     $direccion.val('');
   }
});

$telefono.on('focus',function(){
   if ( $telefono.val() == 'Ingrese Teléfono' ) {
     $telefono.css('background','white') ;
     $telefono.css('color','black') ;
     $telefono.val('');
   }
});

$ciudad.on('focus',function(){
   if ( $ciudad.val() == 'Ingrese Ciudad' ) {
     $ciudad.css('background','white') ;
     $ciudad.css('color','black') ;
     $ciudad.val('');
   }
});

$act_economica.on('focus',function(){
   if ( $act_economica.val() == 'Ingrese Actividad Económica' ) {
     $act_economica.css('background','white') ;
     $act_economica.css('color','black') ;
     $act_economica.val('');
   }
});

$contacto.on('focus',function(){
   if ( $contacto.val() == 'Ingrese Contacto' ) {
     $contacto.css('background','white') ;
     $contacto.css('color','black') ;
     $contacto.val('');
   }
});

$email.on('focus',function(){
   if ( $email.val() == 'Ingrese Email' ) {
     $email.css('background','white') ;
     $email.css('color','black') ;
     $email.val('');
   }
})

$password.on('focus',function(){
   if ( $password.val() == 'Ingrese Password' ) {
     $password.css('background','white') ;
     $password.css('color','black') ;
     $password.val('');
   }
})

// Evento
$('#btn_grabar').on('click',function(){

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






});
