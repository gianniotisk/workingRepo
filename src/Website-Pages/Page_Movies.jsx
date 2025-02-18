import { useState } from "react";

import "./Page_Movies.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";

export default function App() {
  return (
    <div className="Web-frame">
      <Header />
      <Movies />
      <Footer />
    </div>
  );
}
