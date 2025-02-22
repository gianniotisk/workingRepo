import { useState } from 'react'

import './Pages.css'

import Header from "../Header/Header"
import Footer from '../Footer/Footer'
import Body from "../Block-Bodies/Body_AboutUs/Body_AboutUs"

export default function AboutUs() {
  return (

    <div className="Web-frame">
      <Header />
      <Body />
      <Footer />
    </div>

  );
}
