import React from "react";
import Bookadd from "../../assets/Body/Section-Bits/Bookadd.png"

export default function Bit_Bookmark() {
  const styles = {
    position: "absolute",
    top: "5px",
    right: "3px",
    width: "30px",
    height: "auto",
  }

  return (
    <img
      style={styles}
      src={Bookadd}
      alt="Bookmark"
    />
  );
}
