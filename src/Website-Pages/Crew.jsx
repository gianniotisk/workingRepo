import { useState } from 'react'

import './Pages.css'

import Header from "../Header/Header"
import Footer from '../Footer/Footer'
import Body from "../Block-Bodies/Body_Crew/Body_Crew"

export default function Forum() {
  return (

    <div className="Web-frame">
      <Header />
      <Body />
      <Footer />
    </div>

  );
}
