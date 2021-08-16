import { useEffect, useState } from 'react'

// Servicios
import getTopics from 'services/getTopics'

function useTopics() {
  const [topics, setTopics] = useState([])

  useEffect(function () {
    getTopics().then((topics) => setTopics(topics))
  }, [])

  return { topics }
}

export default useTopics
