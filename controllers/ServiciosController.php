<?php

class ServiciosController extends Controller
{
    public function __construct()
    {
        parent::__construct();


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



}



?>

