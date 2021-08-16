import { useEffect, useState } from 'react'

// Servicios
import { getImage, getUrlImage } from 'services/getImage'

function useImage({ id }) {
  const [image, setImage] = useState([])
  const [dataImageURL, setDataImageURL] = useState('')

  useEffect(
    function () {
      getImage({ id }).then((image) => setImage(image))
      getUrlImage({ id }).then((dataImageURL) => setDataImageURL(dataImageURL))
    },
    [id]
  )

  return { image, dataImageURL }
}

export default useImage
