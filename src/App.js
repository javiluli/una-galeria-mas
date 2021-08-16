import React from 'react'
import './App.css'
import { Route } from 'wouter'
import styled from 'styled-components'

// Componentes
import Header from 'components/Header'
import Navbar from 'components/Navbar'

// Componentes/pages
import Home from 'pages/Home/index'
import SearchImages from 'pages/SearchImages/index'
import Detail from 'pages/Detail/index'

const AppStyles = styled.div`
  width: 100%;
  display: grid;
  background-color: hsl(0, 0%, 100%);

  img {
    width: 100%;
    disply: block;
  }
`

function App() {
  return (
    <AppStyles>
      <Header />

      <Navbar />

      <section className="container">
        <Route component={Home} path="/" />

        <Route component={SearchImages} path="/search/:query" />

        <Route component={Detail} path="/photo/:id" />
      </section>
    </AppStyles>
  )
}

export default App
