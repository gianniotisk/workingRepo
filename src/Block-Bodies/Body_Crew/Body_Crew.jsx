import React, { useState, useEffect, useMemo } from "react";
import styles from "./Body_Crew.module.css";
import Section_Sort from "./Section_Sort/Sort";
import Section_Filter from "./Section_Filter/Filter";
import Section_CrewDisplay from "./Section_CrewDisplay/CrewDisplay";
import Section_Pagination from "./Section_Pagination/Pagination";

export default function Body_Crew() {
    const [crew, setCrew] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [filterBy, setFilterBy] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const crewPerPage = 5;

    useEffect(() => {
        fetch("https://city-assignment.firebaseio.com/people.json")
            .then(response => response.json())
            .then(data => setCrew(Object.values(data)));
    }, []);

    const filteredCrew = useMemo(() => {
        let updatedCrew = [...crew];

        if (filterBy !== "all") {
            updatedCrew = updatedCrew.filter(member => member.role === filterBy);
        }

        if (sortBy === "alphabetically") {
            updatedCrew.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "reverse-alphabetically") {
            updatedCrew.sort((a, b) => b.name.localeCompare(a.name));
        }

        return updatedCrew;
    }, [crew, filterBy, sortBy]);

    const displayedCrew = useMemo(() => {
        const startIndex = (currentPage - 1) * crewPerPage;
        return filteredCrew.slice(startIndex, startIndex + crewPerPage);
    }, [filteredCrew, currentPage]);

    return (
        <main className={styles.WholeBody}>
            <header className={styles.title}>
                Explore Our Actors and Directors Database
            </header>
            <Section_Sort setSortBy={setSortBy} />
            <Section_Filter setFilterBy={setFilterBy} />
            <Section_CrewDisplay displayedCrew={displayedCrew} />
            <Section_Pagination 
                totalPages={Math.ceil(filteredCrew.length / crewPerPage)} 
                currentPage={currentPage} 
                goToPage={setCurrentPage} 
            />
        </main>
    );
}
