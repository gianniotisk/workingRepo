import { useState } from "react";

import "./Page_SearchResults.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchResults from "../SearchResults/SearchResults";

export default function App() {
  return (
    <div className="Web-frame">
      <Header />
      <SearchResults />
      <Footer />
    </div>
  );
}
