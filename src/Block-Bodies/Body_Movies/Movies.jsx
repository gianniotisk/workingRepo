import React, { useState, useEffect } from "react";
import styles from "./Movies.module.css";
import { Link } from "react-router-dom";

import STAR from "../../assets/Body/star-f.png";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(10);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    fetch("https://city-assignment.firebaseio.com/movies.json")
      .then((res) => res.json())
      .then((data) => {
        const moviesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
          userScore: data[key].score,
          year: data[key].releaseYear,
        }));
        setMovies(moviesArray);
        setFilteredMovies(moviesArray);
      });

    fetch("https://city-assignment.firebaseio.com/genres.json")
      .then((res) => res.json())
      .then((data) => setGenres(data));
  }, []);

  useEffect(() => {
    applyFilters();
  }, [selectedGenres, sortBy]);

  // Dynamically update moviesPerPage based on screen size
  useEffect(() => {
    const updateMoviesPerPage = () => {
      let columns = 5;
      let rows = 2;

      if (window.innerWidth < 1300) columns = 4;
      if (window.innerWidth < 1024) columns = 3, rows = 3;
      if (window.innerWidth < 768) columns = 2, rows = 4;
      if (window.innerWidth < 480) columns = 1, rows = 5;

      setMoviesPerPage(columns * rows);
    };

    updateMoviesPerPage();
    window.addEventListener("resize", updateMoviesPerPage);

    return () => {
      window.removeEventListener("resize", updateMoviesPerPage);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const onGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenres((prev) =>
      event.target.checked ? [...prev, genre] : prev.filter((g) => g !== genre)
    );
  };

  const applyFilters = () => {
    let filtered = [...movies];

    if (selectedGenres.length > 0) {
      filtered = filtered.filter((movie) =>
        selectedGenres.some((genre) =>
          genres[genre]?.some((entry) => entry.movieId === movie.id)
        )
      );
    }

    if (sortBy === "Alphabetically") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "Reverse Alphabetically") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === "Highest Rated") {
      filtered.sort((a, b) => b.userScore - a.userScore);
    } else if (sortBy === "Smallest Rated") {
      filtered.sort((a, b) => a.userScore - b.userScore);
    } else if (sortBy === "Year") {
      filtered.sort((a, b) => b.year - a.year);
    }

    setFilteredMovies(filtered);
    setCurrentPage(1);
  };

  const displayedMovies = filteredMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  return (
    <div className={styles.container}>
      <header className={styles.title}>Explore Our Movies</header>

      {/*----------------------------- Sorting & Filtering Section -----------------------------*/}
      <section className={styles.sortFilteringButtons}>
        <select
          id="sortBy"
          name="Sorting"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option disabled selected>
            Sort
          </option>
          <option value="Alphabetically">Alphabetically</option>
          <option value="Reverse Alphabetically">Reverse Alphabetically</option>
          <option value="Highest Rated">Highest Rated</option>
          <option value="Smallest Rated">Smallest Rated</option>
          <option value="Year">Year</option>
        </select>

        <div className={styles.dropdown}>
          <button className={styles.dropdownButton} onClick={toggleDropdown}>
            Select Genres
          </button>
          {dropdownOpen && (
            <div className={`${styles.dropdownContent} ${styles.show}`}>
              {Object.keys(genres).map((genre) => (
                <label key={genre}>
                  <input
                    type="checkbox"
                    value={genre}
                    onChange={onGenreChange}
                  />
                  {genre}
                </label>
              ))}
            </div>
          )}
        </div>
      </section>

      {/*----------------------------- Movies Display Section -----------------------------*/}
      <section className={styles.moviesDisplay}>
        {displayedMovies.map((movie) => (
          <div className={styles.movieCard} key={movie.id}>
            <Link to={`/movieDetails/${movie.id}`}>
              <img
                src={movie.imageUrl}
                alt={`${movie.title} poster`}
                className={styles.moviesPoster}
              />
            </Link>
            <p className={styles.movieSpecs}>
                <span className={styles.movieTitle}>{movie.title}</span>
                
                <div className={styles.movieInfo}>
                    <span>Year: {movie.year}</span>
                    <div className={styles.ratingContainer}>
                        <img src={STAR} className={styles.ratingImage} alt="Rating Star" />
                        <span>{movie.userScore}</span>
                    </div>
                </div>
            </p>
          </div>
        ))}
      </section>

      {/*----------------------------- Pagination Section -----------------------------*/}
      <aside className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? styles.active : ""}
          >
            {page}
          </button>
        ))}
      </aside>
    </div>
  );
};

export default Movies;
