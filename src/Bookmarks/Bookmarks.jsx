import { useState } from "react";
import "./Bookmarks.css";

import Posts from "./Posts/Posts";
import Movies from "./Movies/Movies";

export default function Bookmarks() {
  return (
    <div className="Whole-body">
      <header className="bookMarkTitle">Your Bookmarks</header>
      <section>
        <Posts />
        <Movies />
      </section>
    </div>
  );
}
