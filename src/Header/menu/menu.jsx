import { useEffect } from "react";
import "./menu.css";

import Movies from "../../assets/Menu/movies.png";
import Series from "../../assets/Menu/tvseries.png";
import Actors from "../../assets/Menu/actors.png";
import Crews from "../../assets/Menu/crews.png";
import Characters from "../../assets/Menu/characters.png";
import Awards from "../../assets/Menu/awards.png";
import Forum from "../../assets/Menu/forum.png";
import Bookmarks from "../../assets/Menu/Bookmarks.png";

export default function Menu({ menuStatus, toggleMenu }) {

    //--------------------------- Prevent scrolling when menu is open:
    useEffect(() => {
        document.body.style.overflow = menuStatus ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuStatus]);
    //----------------------------------------------------------------

    // Define menu sections dynamically
    const menuSections = [
        { title: "Movies", icon: Movies, items: ["Movies by Genre", "Upcoming Movies", "Popular Movies", "Top Box Office"] },
        { title: "TV Series", icon: Series, items: ["Series by Genre", "Series Release Updates", "Popular Series", "Top Rating Shows"] },
        { title: "Actors & Celebs", icon: Actors, items: ["Most Popular Celebs", "Celebrity News", "Active Shooting"] },
        { title: "Production Crew", icon: Crews, items: ["Producers & Directors", "Companies & Production", "Production Staff"] },
        { title: "Fictional Characters", icon: Characters, items: ["Characters by Genre", "Popular Characters"] },
        { title: "Awards & Events", icon: Awards, items: ["Best of 2024", "Famous Events"] }
    ];

    return (
        <div className={`full-menu ${menuStatus ? "menu-open" : ""}`}>
            
            {/*--------------------------------------- Close Button ---------*/}
            {menuStatus && (
                <button className="close-menu" onClick={toggleMenu}>✕</button>
            )}

            {/*--------------------------------------- Menu -----------------*/}
            <div className="menu-container">
                {/*------------------------- Main Section ----*/}
                {menuSections.map((section, index) => (
                    <div className="menu-column" key={index}>
                        <h3>
                            <img src={section.icon} alt={`${section.title} Icon`} className="menu-icon" /> {section.title}
                        </h3>
                        <ul>
                            {section.items.map((item, idx) => (
                                <li key={idx}>
                                    <div className="spacer"></div> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/*------------------------- Footer Section ---*/}
                <div className="menu-column footer">
                    <div className="bottom-wrapper">
                        <img src={Forum} alt="Community Forum Icon" className="footer-icon" /> Community Forum
                    </div>
                    <div className="bottom-wrapper">
                        <img src={Bookmarks} alt="Bookmarks Icon" className="footer-icon" /> Bookmarks
                    </div>
                </div>
                {/*---------------------------------------------*/}
            </div>

        </div>
    );
}
