import React from "react";
import styles from "./Body_Forum.module.css";

import Section_Featured from "./Sections/Section_Featured"; 
import Section_Post from "./Sections/Section_Posts";

import PostData from "../../AllPostsData/PostData";

export default function Body_Forum() {
  return (
    <main className={styles.WholeBody}>

      <Section_Featured />

      <Section_Post 
        title="Latest Posts" 
        moreLink="#" 
        postsData={PostData} 
        sectionId="popular-container"
      />
      
    </main>
  );
}
