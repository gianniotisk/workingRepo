import React from "react";
import styles from "./Body_Post.module.css";

import Section_Head from "./Sections/Section_Head.jsx";
import Section_Content from "./Sections/Section_Content.jsx";
import Section_Comment from "./Sections/Section_Comment.jsx";

export default function Body_Post({ post }) {  
    if (!post) return <h1>Post not found</h1>; 

    return (
        <main className={styles.postPage}>
            {/*------------------------------ Post Header ------------------------------*/}
            <Section_Head 
                title={post.title} 
                image={post.image} 
                meta={post.meta} 
                tags={post.tags} 
                id={post.id}
                movieTitle={post.movieTitle}
            />
            
            {/*------------------------------ Post Content ------------------------------*/}
            <Section_Content content={post.content} relatedPosts={[]} />  

            {/*------------------------------ Comment Section ------------------------------*/}
            <Section_Comment commentsData={[]} />

        </main>
    );
}

