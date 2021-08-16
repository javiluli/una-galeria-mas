/* eslint-disable no-console */
import { ACCESS_KEY, API_URL } from './settings.jsx'

export function getImage({ id }) {
  const apiURL = `${API_URL}/photos/${id}?client_id=${ACCESS_KEY}`
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const data = response
      return data
    })
}

export function getUrlImage({ id }) {
  const apiURL = `${API_URL}/photos/${id}?client_id=${ACCESS_KEY}`
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const data = response
      return data.urls.full
    })
}
