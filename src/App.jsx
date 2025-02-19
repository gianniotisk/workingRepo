import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Website-Pages/Page_Home"; // Home Page Component
import About from "./Website-Pages/About"; // About Page Component
import Bookmarks from "./Website-Pages/Page_Bookmark"; //Bookmarks Page Component
import Login from "./Login/Login"; //Login Page Component
import Movies from "./Website-Pages/Page_Movies"; //All Movies Page Component
import MovieDetails from "./Website-Pages/Page_MovieDetails"; //Individual Movie Page Component
import SearchResults from "./Website-Pages/Page_SearchResults"; //Search Results Page Component

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
        <Route path="/searchResults" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}
