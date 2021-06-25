<?php

error_reporting(E_ALL); // Error/Exception engine, always use E_ALL
ini_set("ignore_repeated_errors", true); // always use TRUE
ini_set("display_errors", false); // Error/Exception display, use FALSE only in production environment or real server. Use TRUE in development environment
ini_set("log_errors", true); // Error/Exception file logging engine.
ini_set("error_log", "./php-error.log"); // Ruta del fichero donde almacenar errores

require_once "libs/controller.php";
require_once "libs/view.php";
require_once "libs/model.php";
require_once "libs/app.php";

require_once "config/config.php";

$app = new App();

?>