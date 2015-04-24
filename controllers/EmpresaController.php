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


        public function empresa()
    {
        $this->View->SetCss(array('fc_empresa_registrar'));
        $this->View->SetJs(array('fc_empresa_registrar'));
        $this->View->Mostrar_Vista('empresa_crear');
    }

}



?>
