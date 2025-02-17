import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Bookadd from "../../../assets/Body/Section-Bits/Bookadd.png";
import Bookadded from "../../../assets/Body/Section-Bits/Bookadded.png"; // TO CHANGE

export default function Bit_Bookmark({ post }) {
  const [bookadded, setBookadded] = useState(false);

  useEffect(() => {
    try {
      const savedBookmarks =
        JSON.parse(localStorage.getItem("bookmarkedPosts")) || [];
      setBookadded(savedBookmarks.some((item) => item.title === post?.title));
    } catch (error) {
      console.error("Error storage:", error);
      localStorage.removeItem("bookmarkedPosts");
    }
  }, [post]);

  const handleBookmark = () => {
    let savedBookmarks =
      JSON.parse(localStorage.getItem("bookmarkedPosts")) || [];

    if (bookadded) {
      // remove bookmark
      savedBookmarks = savedBookmarks.filter(
        (item) => item.title !== post.title
      );
    } else {
      // bo duplicate bookmarks
      if (!savedBookmarks.some((item) => item.title === post.title)) {
        savedBookmarks.push(post);
      }
    }

    localStorage.setItem("bookmarkedPosts", JSON.stringify(savedBookmarks));
    setBookadded(!bookadded);
  };

  const styles = {
    position: "absolute",
    top: "5px",
    right: "3px",
    width: "30px",
    height: "auto",
    cursor: "pointer",
  };

  return (
    <img
      style={styles}
      src={bookadded ? Bookadded : Bookadd}
      alt="Bookmark"
      onClick={handleBookmark}
    />
  );
}

Bit_Bookmark.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string,
    meta: PropTypes.any,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
