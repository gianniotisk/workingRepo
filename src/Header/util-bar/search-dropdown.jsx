import { useState, useEffect, useRef } from "react";
import "./search-dropdown.css";

import DropDown from "../../assets/General/drop-down.png";
import DropUp from "../../assets/General/drop-up.png";
import All from "../../assets/Menu/magnifier-2.png";
import Movie from "../../assets/Menu/movie.png";
import Serie from "../../assets/Menu/tvserie.png";
import Actor from "../../assets/Menu/actor.png";
import Character from "../../assets/Menu/character.png";

export default function Search_dropdown({ setSelectedCategory }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All");
  const buttonRef = useRef(null);

  const options = [
    { label: "All", value: "all", icon: All },
    { label: "Movies", value: "movies", icon: Movie },
    { label: "Series", value: "series", icon: Serie },
    { label: "Actors", value: "cast", icon: Actor },
    { label: "Characters", value: "characters", icon: Character },
  ];

  //------------------------------------ Open dropdown + Toggle dropdown option:
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelected(option.label); //....... Update selected option
    setSelectedCategory(option.value); // Updates the selection for the search
    setIsOpen(false); //....... Close dropdown
  };

  //-------------------------------------- Close dropdown when clicking outside:
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  //-----------------------------------------------------------------------------

  return (
    <button
      className="dropdown-toggle"
      ref={buttonRef}
      onClick={toggleDropdown}
    >
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
