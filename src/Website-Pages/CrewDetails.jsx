import { useState } from 'react'

import './Pages.css'

import Header from "../Header/Header"
import Footer from '../Footer/Footer'
import Body from "../Block-Bodies/Body_CrewDetails/Body_CrewDetails"

export default function CrewDetails() {
  return (

    <div className="Web-frame">
      <Header />
      <Body />
      <Footer />
    </div>

  );
}
