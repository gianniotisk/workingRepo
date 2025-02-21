import React from "react";
import styles from "./Body_Post.module.css";

import Section_Head from "./Sections/Section_Head.jsx";
import Section_Content from "./Sections/Section_Content.jsx";
import Section_Comment from "./Sections/Section_Comment.jsx";

import PostData from "../../AllPostsData/PostData.js";

export default function Body_Post({ postIndex = 0 }) {
    const post = PostData[postIndex] || PostData[0];

    return (
        <main className={styles.postPage}>
            {/*------------------------------ Post Header ------------------------------*/}
            <Section_Head 
                title={post.title} 
                image={post.image} 
                meta={post.meta} 
                tags={post.tags} 
            />

            {/*------------------------------ Post Content ------------------------------*/}
            <Section_Content content={post.content} relatedPosts={PostData.slice(0, 3)} />

            {/*------------------------------ Comment Section ------------------------------*/}
            <Section_Comment commentsData={[]} />

        </main>
    );
}
