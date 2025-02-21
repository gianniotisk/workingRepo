import React, { useState } from "react";
import styles from "./Section_Comment.module.css";

import Unit_Thread from "../Section-Units/Unit_Thread.jsx";
import Unit_Add from "../Section-Units/Unit_Add.jsx";

export default function Section_Comment({ initialComments = [] }) {
    const [comments, setComments] = useState(initialComments); // ✅ Maintain comment state

    // ✅ Function to add new comments
    const addComment = (newComment) => {
        setComments((prevComments) => [newComment, ...prevComments]); // ✅ Add new comment to the top
    };

    return (
        <div className={styles.commentSection}>
            <div className={styles.container}>
                {/* Comments Thread */}
                <Unit_Thread comments={comments} />
                
                {/* Add Comment Section */}
                <Unit_Add onCommentAdd={addComment} />
            </div>
        </div>
    );
}

