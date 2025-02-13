import React from "react";
import "./Section_News.css";

import Unit_Head from "../Section-Units/Unit_Head.jsx";
import PostCardA from "../Section-Units/Unit_CardB.jsx";
import NewsPosts from "./NewsContent.js"

export default function Section_News(){
    return (
        <section id="news-container">

            {/*------------------------------ Section Head ---------------*/}
            <Unit_Head
                title="Latest News"
                moreLink="#"
            />
            {/*------------------------------ Section Content ------------*/}
            <div className="news-posts">
                {NewsPosts.map((post, index) => (
                    <PostCardA key={index} {...post} />
                ))}
            </div>

        </section>
    );
};