import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Body_CrewDetails.module.css";

import Section_CrewInfo from "./CrewInfo/CrewInfo";
import Section_CrewBio from "./CrewBio/CrewBio";
import Section_CrewFilmography from "./CrewFilmography/CrewFilmography";

export default function Body_CrewDetails() {
  const { name } = useParams();
  const [crewMember, setCrewMember] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (name) {
      // Fetch crew data
      fetch(`https://city-assignment.firebaseio.com/people.json`)
        .then((res) => res.json())
        .then((data) => {
          const foundCrew = Object.values(data).find(
            (member) => member.name === name
          );

          if (foundCrew) {
            setCrewMember({
              bio: foundCrew.bio,
              imageUrl: foundCrew.imageUrl,
              name: foundCrew.name,
              role: foundCrew.role,
            });

            // Fetch movies related to this crew member
            fetch(`https://city-assignment.firebaseio.com/movies.json`)
              .then((res) => res.json())
              .then((moviesData) => {
                const filteredMovies = Object.entries(moviesData)
                  .map(([id, movie]) => ({
                    id,
                    ...movie,
                  }))
                  .filter(
                    (movie) =>
                      movie.cast?.includes(foundCrew.name) ||
                      movie.director === foundCrew.name
                  );

                setMovies(filteredMovies);
              });
          }
        });
    }
  }, [name]);

  if (!crewMember) {
    return <p>Loading...</p>;
  }

  return (
    <main className={styles.WholeBody}>
      <Section_CrewInfo name={crewMember.name} role={crewMember.role} imageUrl={crewMember.imageUrl} />
      <Section_CrewBio bio={crewMember.bio} />
      <Section_CrewFilmography movies={movies} />
    </main>
  );
}

Body_CrewDetails.propTypes = {
  name: PropTypes.string,
};
