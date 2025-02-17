import { useState } from "react";

import "./Page_Bookmark.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Bookmarks from "../Bookmarks/Bookmarks";

export default function App() {
  return (
    <div className="">
      <Header />
      <Bookmarks />
      <Footer />
    </div>
  );
}
