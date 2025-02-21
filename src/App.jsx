import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Website-Pages/Home"; // Home Page Component
import About from "./Website-Pages/About"; // About Page Component
import Bookmarks from "./Website-Pages/Page_Bookmark"; //Bookmarks Page Component
import Forum from "./Website-Pages/Forum";
import Post from "./Website-Pages/Post";
import Login from "./Login/Login"; //Login Page Component
import Movies from "./Website-Pages/Page_Movies"; //All Movies Page Component
import MovieDetails from "./Website-Pages/Page_MovieDetails"; //Individual Movie Page Component
import SearchResults from "./Website-Pages/Page_SearchResults"; //Search Results Page Component
import Crew from "./Website-Pages/Crew"; //Crew Page Component
import CrewDetails from "./Website-Pages/CrewDetails"; //Individual Crew Page Component



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/Forum" element={<Forum />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
        <Route path="/searchResults" element={<SearchResults />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/crewDetails/:name" element={<CrewDetails />} />
      </Routes>
    </Router>
  );

}
