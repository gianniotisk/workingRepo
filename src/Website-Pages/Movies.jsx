import { useState } from "react";

import "./Pages.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Body from "../Block-Bodies/Body_Movies/Movies";

export default function Movies() {
  return (
    <div className="Web-frame">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
