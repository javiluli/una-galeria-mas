<?php

class Errores extends Controller {
  function __construct() {
    parent::__construct();
    $this->view->mensaje = "Error 404";
    $this->view->render("error/index");
  }

  // function render() {
  //   $this->view->render("error/index");
  // }
}

?>
