import React from "react";
import DefaultAvatar from "../../../assets/General/Avatar.png"; // Default avatar fallback

export default function Bit_Avatar({ src, alt = "User Avatar", size = 40 }) {
    const avatarStyle = {
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        overflow: "hidden",
        backgroundColor: "#ddd", // Placeholder background
    };

    const imgStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    };

    return (
        <div style={avatarStyle}>
            <img src={src || DefaultAvatar} alt={alt} style={imgStyle} />
        </div>
    );
}
