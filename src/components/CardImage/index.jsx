import React from 'react'
import { Link } from 'wouter'
import CardUser from 'components/CardUser'

function Image({ id, url, color, width, height, user }) {
  return (
    <div
      className="position-relative rounded overflow-hidden"
      width={width}
      height={height}
    >
      <Link to={`/photo/${id}`} className="d-flex text-light">
        <img loading="lazy" src={url} width={width}></img>
        <CardUser color={color} user={user} />
      </Link>
    </div>
  )
}

export default Image
