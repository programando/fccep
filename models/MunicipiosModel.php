<?php
		class MunicipiosModel extends Model
		{
				public $Cantidad_Registros;

				public function __construct()
				{
					parent::__construct();
				}

				public function Consultar($iddpto)
				{
					$Municipios = $this->Db->Ejecutar_Sp("municipios_consultar_por_departamento($iddpto)");
					return $Municipios;
				}

				public function Listado_General()
				{
					$Municipios = $this->Db->Ejecutar_Sp("municipios_listado_general");
					return $Municipios;
				}


  }
?>
