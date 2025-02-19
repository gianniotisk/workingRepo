import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./search-bar.css";

import Search_dropdown from "./search-dropdown";
import MAGNIFIER from "../../assets/Header/magnifier.png";

export default function Search_Bar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(
        `/searchResults?query=${encodeURIComponent(
          searchQuery
        )}&category=${selectedCategory.toLowerCase()}`
      );
    }
  };

  return (
    <div className="search-bar">
      <Search_dropdown setSelectedCategory={setSelectedCategory} />
      <div className="search-divider"></div>
      <input
        className="search-input"
        type="text"
        placeholder="Search Finch ..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Search on Enter key
      />
      <img
        className="search-icon"
        src={MAGNIFIER}
        alt="magnifier"
        onClick={handleSearch}
      />
    </div>
  );
}
