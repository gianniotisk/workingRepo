import React, { useState } from "react";
import styles from "./Unit_Add.module.css";

export default function Unit_Add({ onCommentAdd }) {
    const [commentText, setCommentText] = useState(""); // ✅ State for input
    const [error, setError] = useState(""); // ✅ State for error handling

    // ✅ Handle input change
    const handleChange = (e) => {
        setCommentText(e.target.value);
        setError(""); // Clear error when typing
    };

    // ✅ Handle submitting the comment
    const handleSubmit = (e) => {
        e.preventDefault();

        if (commentText.trim() === "") {
            setError("Comment cannot be empty."); // ✅ Prevent empty submissions
            return;
        }

        // ✅ Create new comment object
        const newComment = {
            user: "Guest User", // Replace with logged-in user later
            text: commentText,
            date: new Date().toLocaleDateString(),
        };

        onCommentAdd(newComment); // ✅ Send new comment to parent component
        setCommentText(""); // ✅ Clear input after submission
    };

    return (
        <div className={styles.addComment}>
            <h3 className={styles.title}>Add a Comment</h3>

            {/* Comment Input Form */}
            <form onSubmit={handleSubmit} className={styles.commentForm}>
                <textarea
                    className={styles.textarea}
                    placeholder="Write your comment..."
                    value={commentText}
                    onChange={handleChange}
                ></textarea>

                {error && <p className={styles.error}>{error}</p>} {/* ✅ Error message */}

                <button type="submit" className={styles.submitBtn}>Post Comment</button>
            </form>
        </div>
    );
}
