import { useState } from "react";
import styles from "./Body_Bookmarks.module.css";

import Posts from "./Posts/PostBookmarks";
import Movies from "./Movies/MovieBookmarks";

export default function Bookmarks() {
  return (
    <div className={styles.WholeBody}>
      <header className={styles.bookMarkTitle}>Your Bookmarks</header>
      <section className={styles.postAndMoviesDisplay}>
        <Posts />
        <Movies />
      </section>
    </div>
  );
}
