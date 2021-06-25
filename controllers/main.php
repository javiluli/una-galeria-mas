<?php

class Main extends Controller {

  public $title;

  function __construct() {
    parent::__construct();
    $this->view->perfil = "";
  }

  function render() {
    $this->view->render("main/index");
  }


  function saludar() {
    echo "Hola mundo";
  }

}

?>