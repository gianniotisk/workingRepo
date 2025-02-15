import { useState } from 'react'

import './Page_Home.css'

import Header from "../Header/Header"
import Footer from '../Footer/Footer'
import Body_Home from "../Block-Bodies/Body_Home/Body"

export default function App() {

  return (

    <div className="Web-frame">
      <Header />
      <Body_Home />
      <Footer />
    </div>

  )
}