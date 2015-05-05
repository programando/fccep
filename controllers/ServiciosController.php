<?php

class ServiciosController extends Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->Servicios          = $this->Load_Model('Servicios');


    }

    public function Index()
    {

    }

    public function  administrar_datos()
    {
        $this->View->SetCss(array('fc_servicios_administrar-datos'));
        $this->View->SetJs(array('fc_servicios_administrar-datos'));
        $this->View->Mostrar_Vista('administrar-datos');
    }


    public function  listado_modificar_eliminar()
    {
        $this->View->SetCss(array('fc_servicios_listado'));
        $this->View->SetJs(array('fc_servicios_administrar-datos'));
        $this->View->Mostrar_Vista('listado');
      }

    public function grabar()
    {
        /** ABRIL 20 DE 2015
         *  PERMITE EL ALMACENAMINTO DE SERIVIOS Y/O ACTIVIDADES
         */
      $idactividad     = Session::Get('idactividad');
      $nomactividad    = General_Functions::Validar_Entrada('nomactividad','TEXT');
      $categoria       = General_Functions::Validar_Entrada('categoria','TEXT');
      $subcategoria    = General_Functions::Validar_Entrada('subcategoria','TEXT');
      $texto_respuesta = '' ;
      if ( strlen( $nomactividad)== 0)
      {
         $texto_respuesta ='NoOK';
      }else
      {
        $datos = compact('idactividad','nomactividad','categoria','subcategoria');
        $this->Servicios->Grabar($datos);
        $texto_respuesta ='OK';
      }
      echo $texto_respuesta;
    }


}



?>

