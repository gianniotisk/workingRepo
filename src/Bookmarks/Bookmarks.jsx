import { useState } from "react";
import "./Bookmarks.css";

import Posts from "./Posts/Posts";

export default function Bookmarks() {
  return (
    <div className="Whole-body">
      <section>
        <Posts />
      </section>
    </div>
  );
}
