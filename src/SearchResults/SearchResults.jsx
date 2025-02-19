import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

import styles from "./SearchResults.module.css";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") || "";
  const category = searchParams.get("category") || "all";
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchResults() {
      let results = [];

      if (category === "movies" || category === "all") {
        const moviesResponse = await fetch(
          "https://city-assignment.firebaseio.com/movies.json"
        );
        const moviesData = await moviesResponse.json();

        for (const key in moviesData) {
          if (
            moviesData[key].title
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          ) {
            results.push({ ...moviesData[key], id: key, category: "movies" });
          }
        }
      }

      if (category === "cast" || category === "all") {
        const peopleResponse = await fetch(
          "https://city-assignment.firebaseio.com/people.json"
        );
        const peopleData = await peopleResponse.json();

        for (const key in peopleData) {
          if (
            peopleData[key].name
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          ) {
            results.push({ ...peopleData[key], id: key, category: "cast" });
          }
        }
      }

      setSearchResults(results);
    }

    fetchResults();
  }, [searchQuery, category]);

  return (
    <div className={styles.WholeBody}>
      <div className={styles.searchResults}>
        <header>Results for : {searchQuery}</header>

        {searchResults.length === 0 ? (
          <p>No search results found!</p>
        ) : (
          <ul>
            {searchResults.map((item) => (
              <li key={item.id}>
                {item.category === "movies" ? (
                  <Link to={`/movieDetails/${item.id}`}>
                    <img src={item.imageUrl} alt={item.title} />
                    {item.title} ({item.releaseYear})
                  </Link>
                ) : (
                  <Link to={`/crew-details/${item.name}`}>
                    <img src={item.imageUrl} alt={item.name} />
                    {item.name} - {item.role}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
