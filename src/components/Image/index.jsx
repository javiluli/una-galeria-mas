import React from 'react'

function Image({ url, alt }) {
  return <img src={url} alt={alt} className="w-100" />
}

export default Image
