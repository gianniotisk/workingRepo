import { useState, useEffect, useRef } from "react";

import "./search-dropdown.css";

import DropDown from "../../assets/General/drop-down.png";
import DropUp from "../../assets/General/drop-up.png";
import All from "../../assets/Menu/magnifier-2.png";
import Movie from "../../assets/Menu/movie.png";
import Serie from "../../assets/Menu/tvserie.png";
import Actor from "../../assets/Menu/actor.png";
import Character from "../../assets/Menu/character.png";

export default function Search_dropdown() {
    
    const [isOpen, setIsOpen] = useState(false);     // Dropdown visibility
    const [selected, setSelected] = useState("All"); // Selected option
    const buttonRef = useRef(null); // Reference for the dropdown button

    const options = [
        { label: "All", icon: All },
        { label: "Movies", icon: Movie },
        { label: "Series", icon: Serie },
        { label: "Actors", icon: Actor },
        { label: "Characters", icon: Character },
    ];

    //------------------------------------ Open dropdown + Toggle dropdown option:
    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (option) => {
        setSelected(option.label);     //....... Update selected option
        setIsOpen(false);              //....... Close dropdown
    };

    //-------------------------------------- Close dropdown when clicking outside:
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target)) {
                setIsOpen(false); // Close dropdown
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside); 
    }, []);
    //-----------------------------------------------------------------------------

    return (
        <button className="dropdown-toggle" ref={buttonRef} onClick={toggleDropdown}>
            
            {/*------------ Dropdown Area-Button box ----------------*/}
            {selected}
            <img
                className="dropdown-arrow"
                src={isOpen ? DropUp : DropDown}
                alt="Dropdown Arrow"
            />

            {/*------------ Dropdown Options-Menu box ---------------*/}
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option, index) => (
                        <li
                            className="dropdown-item"
                            key={index}
                            onClick={() => handleSelect(option)}
                        >
                            <img src={option.icon} alt="" className="dropdown-icon" />
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
            {/*--------------------------------------------------*/}

        </button>
    );
}