import { useState } from "react";

import "./Pages.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Body from "../Block-Bodies/Body_Home/Body_Home"

export default function App() {

  return (
    <div className="Web-frame">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
