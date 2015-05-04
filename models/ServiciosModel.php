<?php
		class ServiciosModel extends Model
		{
				public $Cantidad_Registros;

				public function __construct()
				{
					parent::__construct();
				}

				public function Grabar($Datos = array())
				{
					extract($Datos);
					$Servicios = $this->Db->Ejecutar_Sp("actividades_crear_modificar($idactividad ,'$nomactividad' , '$categoria' , '$subcategoria')");
					return 	$Servicios;
				}





  }
?>
