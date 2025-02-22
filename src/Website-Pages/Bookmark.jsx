import { useState } from "react";

import "./Pages.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Body from "../Block-Bodies/Body_Bookmarks/Body_Bookmarks";

export default function Bookmark() {
  return (
    <div className="Web-frame">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
