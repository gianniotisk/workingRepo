import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Website-Pages/Home";
import Forum from "./Website-Pages/Forum";
import About from "./Website-Pages/About";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Forum" element={<Forum />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </Router>
    );
}
