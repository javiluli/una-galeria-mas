import React from 'react'

// Estilos CSS
import { ItemListLinkTopicStyles } from './Topic.style'

function Topic({ id, slug, title }) {
  return (
    <li className="my-2 mx-2">
      <ItemListLinkTopicStyles
        to={`/search/${slug}`}
        className="item-link-topic py-1 px-3 border border-3 text-decoration-none"
      >
        {title}
      </ItemListLinkTopicStyles>
    </li>
  )
}

export default Topic
