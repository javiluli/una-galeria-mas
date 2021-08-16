import React, { useCallback, useRef, useEffect } from 'react'
import debounce from 'just-debounce-it'

// Componentes
import MasonryListOfImage from 'components/ListOfImages'
import Spinner from 'components/Spinner'

// Hooks
import useImages from 'hooks/useImages'
import useNearScreen from 'hooks/useNearScreen'

function SearchImages({ params }) {
  const { query } = params
  const { images, loading, setPage } = useImages({ query })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    distancia: '1500px',
    externalRef: loading ? null : externalRef,
    once: false,
  })

  // permite crear una callback que llama a la funcion para la siguiente pagina
  const debouceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    []
  )

  useEffect(
    function () {
      if (isNearScreen) debouceHandleNextPage()
    },
    [debouceHandleNextPage, isNearScreen]
  )

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="list-of-images">
          <MasonryListOfImage images={images} />
          <div id="visor" ref={externalRef}></div>
        </div>
      )}
    </>
  )
}

export default SearchImages
