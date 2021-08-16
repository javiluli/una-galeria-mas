import React from 'react'

// Estilos CSS
import { CardUserStyles } from './CardUser.style'

function CardUser({ color, user }) {
  return (
    <CardUserStyles className="position-absolute top-0 start-0 align-items-center w-100 h-100  ps-3 pb-2">
      <div className="row position-absolute bottom-0 start-0 align-items-center w-100 ms-1 mb-2 ">
        <div className="col-3">
          <img
            src={user.profile_image.large}
            className="rounded-circle p-2"
            style={{ border: `5px solid ${color}` }}
            alt={user.name}
          ></img>
        </div>
        <div className="col">
          <span className="fs-5">{user.name}</span>
        </div>
      </div>
    </CardUserStyles>
  )
}

export default CardUser
