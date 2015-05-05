<?php
		class EmpresaModel extends Model
		{
				public $Cantidad_Registros;

				public function __construct()
				{
					parent::__construct();
				}

				public function Grabar($Datos = array())
				{
					extract($Datos);
					$Empresas = $this->Db->Ejecutar_Sp("empresas_crear_modificar ($idempresa ,$idactividad,$idmcipio, '$identificacion',
																																							'$razon_social', '$email', '$direccion', '$contacto', '$nro_telefono', '$password'  )");
					return 	$Empresas;
				}


				public function Listado_General($Datos = array())
				{
					extract($Datos);
					$Servicios = $this->Db->Ejecutar_Sp("empresas_listado_general()");
					return 	$Servicios;
				}






  }
?>
