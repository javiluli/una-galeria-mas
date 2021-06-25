<?php

class ContactoModel extends Model {
  function __construct() {
    parent::__construct();
  }

  function getPerfil() {
    $data = file_get_contents('config/perfil.json');
    $json = json_decode($data, true);
    return $json;
  }
}
?>
