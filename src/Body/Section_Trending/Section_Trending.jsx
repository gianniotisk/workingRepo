import React from "react";
import "./Section_Trending.css";

import Unit_Head from "../Section-Units/Unit_Head.jsx";
import PostCardA from "../Section-Units/Unit_CardB.jsx";
import TrendingPosts from "./TrendingContent.js"

export default function Section_Trending(){
    return (
        <section id="trending-container">

            {/*------------------------------ Section Head ---------------*/}
            <Unit_Head
                title="Trending In Forum"
                moreLink="#"
            />
            {/*------------------------------ Section Content ------------*/}
            <div className="trending-posts">
                {TrendingPosts.map((post, index) => (
                    <PostCardA key={index} {...post} />
                ))}
            </div>

        </section>
    );
};