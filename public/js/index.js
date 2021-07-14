const grid = document.querySelector('.grid')
const btnCargarMas = document.getElementById('btn_cargar_mas')
const btnBuscar = document.getElementById('btn_buscar')
const inputSearch = document.getElementById('input_search')

// external js: masonry.pkgd.js
// eslint-disable-next-line no-undef
let msnry = new Masonry(grid, {})

// Parametros para usar la API de unsplash
// Access Key para usar la API (privada)
const CLIENT_ID = ''
const PHOTOS_PER_PAGE = 10
let page = 0
let query

/**
// obtiene las imagenes de una pagina enumerada a partir de la API de 'unsplash'
 * 
 * @param {*} page pagina indice donde se encuentran las imagenes
 * @param {*} item indice imagen de ka pagina 
 * @returns imagen indice
 */
function getNewImage(page, item) {
  const requestUrl = `https://api.unsplash.com/search/photos?page=${page}&per_page=${PHOTOS_PER_PAGE}&query=${query}&client_id=${CLIENT_ID}`

  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.results.length); // devuelve 0 si no encuentra coincidencias

      return data.results[item].urls.small // devuvlve la url de la imagen
    })
}

// inserta la imgane como innerHTML en el contenedor con la grid de masonry
async function setNewImage() {
  page++
  // create new item elements
  const elems = []
  const fragment = document.createDocumentFragment()

  for (let i = 0; i < PHOTOS_PER_PAGE; i++) {
    const image = await getNewImage(page, i)
    const img = new Image()
    img.src = await image
    const element = getItemElement()

    element.innerHTML += `
      <div class="grid-item-content">
        <img loading="lazy" src="${image}" height=${this.height} />
      </div>
     `

    fragment.appendChild(element)
    elems.push(element)
  }

  // append elements to container
  grid.appendChild(fragment)
  // add and lay out newly appended elements
  msnry.appended(elems)
}

// create <div class="grid-item"></div>
function getItemElement() {
  const element = document.createElement('div')
  element.className = 'grid-item col-12 col-md-6 col-lg-4 px-2'
  return element
}

// Cargar masonry layout
function cargarMasonry() {
  // eslint-disable-next-line no-undef
  imagesLoaded(grid, () => {
    // eslint-disable-next-line no-undef
    msnry = new Masonry(grid, {
      // options
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
    })
  })
}

// Inicia con una priemra llamada de imagenes con un valor por defecto
;(async function () {
  await setNewImage((query = 'sea'))
})()

/**
 * Boton para cargas mas imagenes
 */
btnCargarMas.addEventListener('click', async () => {
  // Animacion del boton (spinner)
  btnCargarMas.innerHTML = `
  Cargando...
  <span id="spinner_loading" class="spinner-border spinner-border-sm visually-visible" role="status" aria-hidden="true"></span>
  `

  // Obtenvion de las imagenes
  await setNewImage()

  // Cargar el masonry layout
  cargarMasonry()

  // Fin de la animacion del boton (spinner)
  btnCargarMas.innerHTML = `
  Cargar más
  <span id="spinner_loading" class="spinner-border spinner-border-sm visually-hidden" role="status" aria-hidden="true"></span>
  `
})

/**
 * Boton de busqueda de otras fotos segun su categoria
 */
btnBuscar.addEventListener('click', async (e) => {
  e.preventDefault()
  page = 0

  // borra todos los hijos de un nodo padre
  const cell = document.querySelector('.grid')
  if (cell.hasChildNodes()) {
    // -1 ya que el primer elemento no se debe borrar para el masonry layout
    while (cell.childNodes.length - 1 > 1) {
      cell.removeChild(cell.lastChild)
    }
  }

  query = inputSearch.value
  await setNewImage()
  cargarMasonry()
})

// ===============================================

// Crea un efecto de blur en el input cuando se le hace focus o no
const formSearch = document.getElementById('form_search')
const inptSearch = document.getElementById('input_search')
inptSearch.addEventListener(
  'focus',
  () => (formSearch.style.backdropFilter = ' blur(5px)')
)
inptSearch.addEventListener(
  'blur',
  () => (formSearch.style.backdropFilter = 'blur(0)')
)
