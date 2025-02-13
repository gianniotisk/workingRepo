import { useState, useEffect, useRef } from "react";

import "./search-bar.css";

import Search_dropdown from "./search-dropdown";

import MAGNIFIER from "../../assets/Header/magnifier.png";

export default function Search_Bar() {

    return (
        <div className="search-bar">
            <Search_dropdown />
            <div className="search-divider"></div>
            <input
                className="search-input"
                type="text"
                placeholder="Search Finch ..."
            />
            <img className="search-icon" src={MAGNIFIER} alt="magnifier" />
        </div>
    );
}
