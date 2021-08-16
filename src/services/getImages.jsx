import { ACCESS_KEY, API_URL } from './settings.jsx'

function getImages({ query, page = 1 } = {}) {
  const apiUrl = `${API_URL}/search/photos?page=${page}&per_page=15&query=${query}&client_id=${ACCESS_KEY}`

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const data = response.results
      const images = data.map((image) => {
        const { id, description, urls, color, width, height, user } = image
        return { id, description, urls, color, width, height, user }
      })

      return images
    })
}

export default getImages
