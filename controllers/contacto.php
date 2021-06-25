<?php

class Contacto extends Controller {
  function __construct() {
    parent::__construct();
    $this->view->perfil = "";
  }

  function render() {
    $perfil = $this->model->getPerfil();
    $this->view->perfil = $perfil;
    $this->view->render("contacto/index");
  }
}

?>