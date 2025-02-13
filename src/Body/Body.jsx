import { useState } from 'react'
import './Body.css';

import Section_typeB from './Sections/Section_typeB';

import TrendPosts from "./PostsData/TrendingContent.js"
import NewsPosts from "./PostsData/NewsContent.js"


export default function Body() {
    return (
        <main className='Whole-body'>
            <Section_typeB
                title="Trending in Forum" 
                moreLink="#" 
                postsData={TrendPosts} 
                sectionId="trend-container"
            />
            <Section_typeB
                title="Latest News" 
                moreLink="#" 
                postsData={NewsPosts} 
                sectionId="news-container"
            />
        </main>
    );
}