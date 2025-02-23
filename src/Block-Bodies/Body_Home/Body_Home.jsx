import { useState } from 'react';
import './Body.css';

import Section_Featured from './Sections/Section_Featured.jsx';
import Section from './Sections/Section.jsx';
import Section_Latest from './Sections/Section_Latest.jsx';

import PostData from "../../AllPostsData/PostData.js"; 
import PopularPosts from "./PostsData/PopularContent.js"

//------------ Get 5 top trending post [ most commented ]--------------//
const trendingPosts = [...PostData]
    .sort((a, b) => (b.meta?.comments || 0) - (a.meta?.comments || 0))
    .slice(0, 5);

//------------ Get 5 latest news posts --------------------------------//
const newsPosts = [...PostData]
    .filter(post => post.label === "News")
    .sort((a, b) => new Date(b.meta?.date) - new Date(a.meta?.date))
    .slice(0, 5);

//---------------------------------------------------------------------//

export default function Body_Home() {
    return (
        <main className='Whole-body'>

            <Section_Featured />

            {/*------------ Trending in Forum ------------*/}
            <Section
                title="Trending in Forum" 
                moreLink="#" 
                postsData={trendingPosts} 
                sectionId="trend-container"
                type="B"
            />

            {/*------------ Latest News ------------------*/}
            <Section
                title="Latest News" 
                moreLink="#" 
                postsData={newsPosts} 
                sectionId="news-container"
                type="B"
            />

            {/*------------ Popular Movies ---------------*/}
            <Section
                title="Popular Movies and Shows" 
                moreLink="#" 
                postsData={PopularPosts} 
                sectionId="popular-container"
                type="C"
            />

            {/*------------ Latest Posts -----------------*/}
            <Section_Latest
                title="Latest Posts" 
                moreLink="#" 
                postsData={PostData} 
                sectionId="latest-container"
                type="E"
            />

        </main>
    );
}
