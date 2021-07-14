<!DOCTYPE html>
<html lang="es">

<?php require "views/head.php"; ?>

<body>

  <?php require "views/header.php"; ?>

  <div class="mb-5">
    <main>

      <div class="wrapper__search mb-3">  
        <nav class="navbar navbar-light d-flex justify-content-center align-items-center h-100">
          <div class="container">
            <form class="input-group-lg text-light d-flex w-100 form__search-backdropFiler" id="form_search" >
              <i class="bi bi-search"></i>
              <input id="input_search" class="form-control px-5 py-3 text-light input__search" name="query" type="search" placeholder="Search" aria-label="Search">
              <button id="btn_buscar" class="btn btn-primary d-none">Buscar</button>
            </form>
          </div>
        </nav>
      </div>

      <div class="container">
      
        <div class="grid">
          <div class="grid-sizer col-12 col-md-6 col-lg-4"></div>
        </div>
        <button id="btn_cargar_mas" class="btn btn-outline-primary btn-lg" type="button">
          Cargar más
          <span id="spinner_loading" class="spinner-border spinner-border-sm visually-hidden" role="status" aria-hidden="true"></span>
        </button>
      </div>

    </main>
  </div>
    
  <?php require "views/footer.php"; ?>

  <!-- Masonry layout JS -->
  <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
  <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>


  <script src="<?= constant("URL") ?>public/js/bootstrap.min.js"></script>
  <script src="<?= constant("URL") ?>public/js/index.min.js"></script>

</body>
</html>