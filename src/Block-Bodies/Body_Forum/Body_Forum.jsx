import React from "react";
import styles from "./Body_Forum.module.css";

import Section_Featured from "./Sections/Section_Featured"; 
import Section_Post from "./Sections/Section_Posts";

import LatestPosts from "../Body_Home/PostsData/LatestContent";

export default function Body_Forum() {
  return (
    <main className={styles.WholeBody}>

        <Section_Featured />

        <Section_Post 
          title="Latest Posts" 
          moreLink="#" 
          postsData={LatestPosts} 
          sectionId="popular-container"
        />
      
    </main>
  );
}
