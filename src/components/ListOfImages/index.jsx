import React from 'react'

// Componentes
import ListOfImages from 'components/ListOfImages/ListOfImages'

// Estilos CSS
import { MasonryStyles } from './ListOfImages.style'

function MasonryListOfImage({ images }) {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    500: 1,
  }

  const generateComponentImages = ListOfImages({ images })

  return (
    <MasonryStyles
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {generateComponentImages}
    </MasonryStyles>
  )
}

export default MasonryListOfImage
