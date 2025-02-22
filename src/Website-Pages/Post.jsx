import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostData from "../AllPostsData/PostData";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Body from "../Block-Bodies/Body_Post/Body_Post";

export default function Post() {
  const { id } = useParams();  
  const post = PostData.find((p) => String(p.id) === String(id)); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="Web-frame">
      <Header />
      <Body post={post} />
      <Footer />
    </div>
  ); 
}
