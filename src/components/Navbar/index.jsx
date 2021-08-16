import React, { useState } from 'react'
import { useLocation } from 'wouter'

// Estilos CSS
import {
  MainNavbarStyles,
  FormStyles,
  InputStyles,
  IconSearchStyles,
} from './Navbar.style'

function Navbar() {
  const [keywork, setKeywork] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [push, pushLocation] = useLocation()

  // navegar a otra ruta
  const handleSubmit = (e) => {
    e.preventDefault()
    pushLocation(`/search/${keywork}`)
  }

  // Obtener el valor del input cada vez que su valor cambia
  const handleChange = (e) => {
    setKeywork(e.target.value)
  }
  return (
    <MainNavbarStyles className="mb-3">
      <nav className="navbar navbar-light d-flex justify-content-center align-items-center h-100">
        <div className="container">
          <FormStyles
            onSubmit={handleSubmit}
            className="input-group-lg text-light d-flex w-100"
            id="form_search"
          >
            <IconSearchStyles></IconSearchStyles>

            <InputStyles
              onChange={handleChange}
              className="form-control px-5 py-3 text-light"
              name="inpt-search"
              type="search"
              value={keywork}
              placeholder="Search"
              aria-label="Search"
            />

            <button id="btn_buscar" className="btn btn-primary d-none">
              Buscar
            </button>
          </FormStyles>
        </div>
      </nav>
    </MainNavbarStyles>
  )
}

export default Navbar
