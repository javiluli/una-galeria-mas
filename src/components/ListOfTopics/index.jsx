import React from 'react'

// Componentes
import Topic from 'components/Topic'

function ListOfTopics({ topics }) {
  return (
    <>
      {topics.map(({ id, slug, title }) => (
        <Topic key={id} id={id} slug={slug} title={title} />
      ))}
    </>
  )
}

export default ListOfTopics
