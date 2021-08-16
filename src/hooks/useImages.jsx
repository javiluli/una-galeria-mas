/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

// Servicios
import getImages from 'services/getImages'

const INITIAL_PAGE = 1

function useImages({ query }) {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)

  useEffect(
    function () {
      setLoading(true)
      getImages({ query }).then((images) => {
        setImages(images)
        setLoading(false)
      })
    },
    [query]
  )

  useEffect(
    function () {
      if (page !== INITIAL_PAGE)
        getImages({ query, page }).then((nextPage) => {
          setImages((prevPage) => prevPage.concat(nextPage))
        })
    },
    [page]
  )

  return { images, loading, setPage }
}

export default useImages
