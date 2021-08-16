import { ACCESS_KEY, API_URL } from './settings.jsx'

function getImages({ page = 1 } = {}) {
  const apiUrl = `${API_URL}/photos?page=${page}&per_page=20&order_by=popular&client_id=${ACCESS_KEY}`

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const data = response
      const images = data.map((image) => {
        const { id, description, urls, color, width, height, user } = image
        return { id, description, urls, color, width, height, user }
      })

      return images
    })
}

export default getImages
