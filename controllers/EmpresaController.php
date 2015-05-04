<?php

class EmpresaController extends Controller
{
    public function __construct()
    {
        parent::__construct();

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

}



?>

