import React from 'react'

// Componentes
import Image from 'components/CardImage'

function ListOfImages({ images }) {
  return images.map(({ id, description, urls, color, width, height, user }) => (
    <Image
      key={id}
      id={id}
      description={description}
      url={urls.regular}
      color={color}
      width={width}
      height={height}
      user={user}
    />
  ))
}

export default ListOfImages
