<?php

require_once "controllers/errores.php";

class App {
  function __construct() {
    $url = isset($_GET["url"]) ? $_GET["url"] : null;
    $url = rtrim($url, "/");
    $url = explode("/", $url);

    if (empty($url[0])) {
      $archivoController = "controllers/main.php";
      require_once $archivoController;
      $controller = new Main();
      $controller->loadModelo("main");
      $controller->render();
      return false;
    }

    $archivoController = "controllers/" . $url[0] . ".php";

    if (file_exists($archivoController)) {
      require_once $archivoController;

      $controller = new $url[0]();
      $controller->loadModelo($url[0]);

      error_log("APP::construct => El fichero existe");

      if (isset($url[1])) {

        if (method_exists($controller, $url[1])) {
					/* validamos que existe el parametro dentro de la URL */
					if (isset($url[2])) {
						/**
             * obtenemos el numero de parametros, -2 ya que el primero [0] es el controlador y el segundo [1] es el metodo.
						 * Si $nParametros = a 0 no hay parametros, si no es que si hay parametros.
             */
						$nParametros = count($url) - 2;
							/* arreay con todos los parametros */
						$arrParametros = [];
						/* agregamos cada parametro a $arrParametros */
						for ($i = 0; $i < $nParametros; $i++) {
							array_push($arrParametros, $url[$i] + 2);
						}
							/* pasamos todos los prametros al controlador */
						$controller->{$url[1]}($$arrParametros);
            // error_log("APP::construct => El fichero existe y el controlador existe y existen parametros");
					} else {
						/* si no existe el aprametro simplemente mandamos a llamar al metodo tal cual, sin parametros */
						$controller->{$url[1]}();
            // error_log("APP::construct => El fichero existe y el controlador existe pero no existen parametros");
					}
				} else {
					/* error, no existe el metodo */
					$controller->render();
          // error_log("APP::construct => El fichero existe y el controlador existe pero No existe el metodo");

				}
        // error_log("APP::construct => El fichero existe y el controlador existe");

      } else {
        $controller->render();
        // error_log("APP::construct => El fichero existe y el controlador NO existe");
      }
    } else {
      $controller = new Errores();
      // error_log("APP::construct => El fichero NO existe");
    }
  }
}
?>
