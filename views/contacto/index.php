<!DOCTYPE html>
<html lang="es">

<?php require "views/head.php"; ?>

<body>
  <?php require "views/header.php"; ?>

  <div class="main">
    <h1>Seccion de contacto</h1>

    <?php 
    
      include_once "models/perfil.php";
      $perfiljson = $this->perfil; 

      ?>

    <?= $perfiljson["perfil"]["nickname"]; ?>  <br>
    <?= $perfiljson["perfil"]["name"]; ?>  <br>
    <?= $perfiljson["perfil"]["surnames"]; ?> <br>
    <?= $perfiljson["perfil"]["perfil-github"]; ?> <br>
    <?= $perfiljson["perfil"]["perfil-codepen"]; ?> <br>
  </div>
  <?php require "views/footer.php"; ?>
</body>

</html>