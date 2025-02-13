import { useState } from 'react'

import './App.css'

import Header from "./Header/Header"
import Footer from './Footer/Footer'
import Body from './Body/Body'

export default function App() {

  return (

    <div className="Web-frame">
      <Header />
      <Body />
      <Footer />
    </div>

  )
}