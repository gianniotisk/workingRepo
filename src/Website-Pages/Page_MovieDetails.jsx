import { useState } from "react";

import "./Page_MovieDetails.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MovieDetails from "../MovieDetails/MovieDetails";

export default function App() {
  return (
    <div className="Web-frame">
      <Header />
      <MovieDetails />
      <Footer />
    </div>
  );
}
