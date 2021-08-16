/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

// Servicios
import getPopularImages from 'services/getIPopularImage'

const INITIAL_PAGE = 1

function usePopularImages() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)

  useEffect(function () {
    setLoading(true)
    getPopularImages().then((images) => {
      setImages(images)
      setLoading(false)
    })
  }, [])

  useEffect(
    function () {
      if (page !== INITIAL_PAGE)
        getPopularImages({ page }).then((nextPage) => {
          setImages((prevPage) => prevPage.concat(nextPage))
        })
    },
    [page]
  )

  return { images, loading, setPage }
}

export default usePopularImages
