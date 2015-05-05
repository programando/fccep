<?php

class EmpresaController extends Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->Municipios = $this->Load_Model('Municipios');
        $this->Servicios  = $this->Load_Model('Servicios');

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

    public function Grabar()
    {
        /** ABRIL 17
         *          PERMITE EL ALMACENAMIENTO/ACTUALIZACION DE DATOS DE LAS EMPRESA
         */

/*IN _idempresa SMALLINT ,
IN _idactividad SMALLINT ,
IN _idmcipio SMALLINT ,
IN _identificacion VARCHAR (16),
IN _razon_social VARCHAR (100),
IN _email VARCHAR (100),
IN _direccion VARCHAR (100),
IN _contacto VARCHAR (30),
IN _nro_telefono VARCHAR (30),
IN _password VARCHAR (128)
*/


    }

}



?>

