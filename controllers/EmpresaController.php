<?php

class EmpresaController extends Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->Municipios = $this->Load_Model('Municipios');
        $this->Servicios  = $this->Load_Model('Servicios');
        $this->Empresas   = $this->Load_Model('Empresa');

    }

     public function Index()
        {

        }


   public function administracion_datos()
    {
    /**
     * ABRIL 15 DE 2015
     *  PERMITE LA ADMINISTRACIÓN DE DATOS DE LAS EMPRESAS
     */
        $this->View->Listado_Municipios = $this->Municipios->Listado_General();
        $this->View->Servicios          = $this->Servicios->Listado_General();
        $this->View->SetCss(array('fc_empresa_registrar'));
        $this->View->SetJs(array('fc_empresa_registrar'));
        $this->View->Mostrar_Vista('empresa_crear');
    }


   public function listado_modificar_eliminar()
    {

        $this->View->SetCss(array('fc_empresa_listado'));
        $this->View->SetJs(array('fc_empresa_listado'));
        $this->View->Mostrar_Vista('listado');

    }

    public function Grabar()
    {
        /** ABRIL 17
         *          PERMITE EL ALMACENAMIENTO/ACTUALIZACION DE DATOS DE LAS EMPRESA
         */
         $idempresa       = Session::Get('idempresa');
         $idactividad    = General_Functions::Validar_Entrada('idactividad','NUM');
         $idmcipio        = General_Functions::Validar_Entrada('idmcipio','NUM');
         $identificacion  = General_Functions::Validar_Entrada('identificacion','NUM');
         $razon_social    = General_Functions::Validar_Entrada('razon_social','TEXT');
         $email           = General_Functions::Validar_Entrada('email','TEXT');
         $email_Ok        = General_Functions::Validar_Entrada('email','EMAIL');
         $direccion       = General_Functions::Validar_Entrada('direccion','TEXT');
         $contacto        = General_Functions::Validar_Entrada('contacto','TEXT');
         $nro_telefono    = General_Functions::Validar_Entrada('nro_telefono','TEXT');
         $password        = md5(General_Functions::Validar_Entrada('password','TEXT'));
         $texto_respuesta = '';
         if ( $email_Ok == FALSE )
         {
                $texto_respuesta ='EmailNoOk';
         }else
         {
             $datos =compact('idempresa','idactividad','idmcipio','identificacion','razon_social','email','direccion','contacto',
                             'nro_telefono','password');
             $this->Empresas->Grabar($datos);
             $texto_respuesta ='Ok.';
        }
         echo $texto_respuesta;


    }

}



?>

