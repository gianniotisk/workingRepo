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
      <header className={styles.title}>Results for : {searchQuery}</header>
      <div className={styles.searchResults}>
        {searchResults.length === 0 ? (
          <p>No search results found!</p>
        ) : (
          <ul>
            {searchResults.map((item) => (
              <li key={item.id}>
                {item.category === "movies" ? (
                  <Link
                    to={`/movieDetails/${item.id}`}
                    className={styles.resultItem}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className={styles.image}
                    />
                    <span className={styles.itemSpecs}>
                      <span className={styles.titleResult}>{item.title}</span>
                      <div className={styles.yearScoreResult}>
                        Year : {item.releaseYear} | Score: {item.score}
                      </div>
                    </span>
                  </Link>
                ) : (
                  <Link
                    to={`/crewDetails/${item.name}`}
                    className={styles.resultItem}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className={styles.image}
                    />
                    <span className={styles.itemSpecs}>
                      <span className={styles.titleResult}>{item.name}</span>
                      <div className={styles.yearScoreResult}>{item.role}</div>
                    </span>
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
