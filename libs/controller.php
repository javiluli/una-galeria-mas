<?php

class Controller {

  function __construct() {
    $this->view = new View();
    $this->view->title = strtolower(get_class($this));
  }

  function loadModelo($model) {
    $url = "models/" . $model . "model.php";

    if (file_exists($url)) {
      require $url;
      $modelName = $model . "Model";
      $this->model = new $modelName();
    }
  }
}

?>
