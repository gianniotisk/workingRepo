import React from "react";

export default function Bit_Label({ label }) {
  const styles = {
    position: "absolute",
    top: "8px",
    left: "8px",
    backgroundColor: "#ffffffcc",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "12px",
    fontWeight: "bold",
  }

  return label ? <span style={styles}>{label}</span> : null;
}
