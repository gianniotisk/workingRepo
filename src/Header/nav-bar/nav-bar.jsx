import { useState, useEffect, useRef } from "react";

import "./nav-bar.css";
import { Link } from "react-router";

import BURGER from "../../assets/Header/burger.png";
import BOOKS from "../../assets/Header/books.png";

export default function Nav_Bar({ toggleMenu }) {
  return (
    <nav className="nav-bar">
      <div className="container">
        {/*--------------------------- Burger Button ------------------*/}
        <div className="icon-wrapper">
          <img
            className="burger-icon"
            src={BURGER}
            alt="Menu"
            onClick={toggleMenu}
          />
        </div>

        {/*--------------------------- Navigation Items ---------------*/}
        <ul className="nav-items">
          <li>
            <a href="#">Movies & Series</a>
          </li>
          <li className="dot">•</li>
          <li>
            <a href="#">Cast & Crew</a>
          </li>
          <li className="dot">•</li>
          <li>
            <a href="#">Featured</a>
          </li>
          <li className="dot">•</li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li className="dot">•</li>
          <li>
            <a href="#">News</a>
          </li>
          <li className="dot">•</li>
          <li>
            <a href="#">Forum</a>
          </li>
        </ul>

        {/*--------------------------- Bookmarks Button ---------------*/}
        <Link
          to={{
            pathname: "/Bookmarks",
          }}
        >
          <div className="icon-wrapper">
            <img
              className="bookmark-icon"
              src={BOOKS}
              alt="Bookmark"
              onClick={null}
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}
