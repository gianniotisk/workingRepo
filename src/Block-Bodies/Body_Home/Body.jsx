import { useState } from 'react'
import './Body.css';

import Section from './Sections/Section.jsx';
import Featured from './Sections/Section_Featured.jsx';
import Section_Latest from './Sections/Section_Latest.jsx';


import TrendPosts from "./PostsData/TrendingContent.js"
import NewsPosts from "./PostsData/NewsContent.js"
import PopularPosts from "./PostsData/PopularContent.js"
import LatestPosts from './PostsData/LatestContent.js';

export default function Body() {
    return (
        <main className='Whole-body'>

            <Featured/>

            <Section
                title="Trending in Forum" 
                moreLink="#" 
                postsData={TrendPosts} 
                sectionId="trend-container"
                type="B"
            />

            <Section
                title="Latest News" 
                moreLink="#" 
                postsData={NewsPosts} 
                sectionId="news-container"
                type="B"
            />

            <Section
                title="Popular Movies and Shows" 
                moreLink="#" 
                postsData={PopularPosts} 
                sectionId="popular-container"
                type="C"
            />

            <Section_Latest
                title="Popular Movies and Shows" 
                moreLink="#" 
                postsData={LatestPosts} 
                sectionId="popular-container"
                type="E"
            />

        </main>
    );
}