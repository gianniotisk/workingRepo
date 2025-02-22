import React from "react";
import Bookadd from "../../../assets/Body/Section-Bits/Bookadd.png"

export default function Bit_Bookmark() {
  const styles = {
    position: "relative",
    top: "0px",
    right: "3px",
    width: "40px",
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
