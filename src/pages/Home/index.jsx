import React from 'react'
import 'App.css'

// Hooks
import usePopularImages from 'hooks/usePopularImages'
import useTopics from 'hooks/useTopics'

// Components
import MasonryListOfImage from 'components/ListOfImages'
import ListOfTopics from 'components/ListOfTopics'

function Home() {
  const { images } = usePopularImages()
  const { topics } = useTopics()

  return (
    <>
      <nav className="w-100 ">
        <ul className="list-topic d-flex flex-wrap py-3 list-unstyled">
          <ListOfTopics topics={topics} />
        </ul>
      </nav>

      <MasonryListOfImage images={images} />
    </>
  )
}

export default Home
