import { ACCESS_KEY, API_URL } from './settings.jsx'

function getTopics() {
  const apiUrl = `${API_URL}/topics?client_id=${ACCESS_KEY}`
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const data = response
      const topics = data.map((topic) => {
        const { id, slug, title } = topic
        return { id, slug, title }
      })
      return topics
    })
}

export default getTopics
