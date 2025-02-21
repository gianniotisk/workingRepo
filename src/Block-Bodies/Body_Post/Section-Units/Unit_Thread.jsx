import React from "react";
import styles from "./Unit_Thread.module.css";

import Bit_Avatar from "../Section-Bits/Bit_Avatar.jsx";

export default function Unit_Thread({ comments = [] }) {  // ✅ Ensures comments is always an array
    return (
        <div className={styles.thread}>
            {/* Comments Title */}
            <h3 className={styles.title}>Comments ({comments.length})</h3>
            
            {/* Comments List */}
            <div className={styles.commentsList}>
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <div key={index} className={styles.comment}>
                            {/* User Avatar */}
                            <Bit_Avatar user={comment.user} />

                            {/* Comment Content */}
                            <div className={styles.commentBody}>
                                <span className={styles.userName}>{comment.user}</span>
                                <p className={styles.text}>{comment.text}</p>
                                <span className={styles.commentDate}>{comment.date}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className={styles.noComments}>
                        No comments yet. Be the first to share your thoughts!
                    </p>
                )}
            </div>
        </div>
    );
}

