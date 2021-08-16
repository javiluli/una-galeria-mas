import React, { Suspense } from 'react'
import { FaRegEye, FaRegThumbsUp, FaArrowDown } from 'react-icons/fa'

// Componentes
import Spinner from 'components/Spinner'

// Hooks
import useImage from 'hooks/useImage'

const Image = React.lazy(() => import('components/Image'))

function Detail({ params }) {
  const { id } = params
  const { image, dataImageURL } = useImage({ id })

  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <Suspense fallback={<Spinner />}>
            <Image url={dataImageURL} alt={'Imagen'} />
          </Suspense>
        </div>
        <div className="col">
          <h2>{image.description}</h2>
          <p>
            <i>{image.alt_description}</i>
          </p>
          <div className="row">
            <div className="col-2">
              <p>
                <FaRegThumbsUp /> Likes
              </p>
              <p>{image.likes}</p>
            </div>
            <div className="col-2">
              <p>
                <FaRegEye /> Views
              </p>
              <p>{image.views}</p>
            </div>
            <div className="col-3">
              <p>
                <FaArrowDown /> Downloads
              </p>
              <p>{image.downloads}</p>
            </div>
          </div>

          <p>
            Dimansiones: {image.width} x {image.height}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Detail
