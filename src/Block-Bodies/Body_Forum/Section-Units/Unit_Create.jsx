import React from "react";
import styles from "./Unit_Create.module.css"; // ✅ Separate CSS file

export default function CreatePost() {
    return (
        <button className={styles.createPostBtn}>
            Create a Post
        </button>
    );
}
