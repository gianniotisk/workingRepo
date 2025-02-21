import React from "react";
import PropTypes from "prop-types";

export default function CrewInfo({ name, role, imageUrl }) {
  return (
    <section className="crewDetails">
      <img src={imageUrl} alt={`${name} photo`} className="crewPoster" />
      <section className="crewInfo">
        <header>{name}</header>
        <p><em>Role:</em> {role}</p>
      </section>
      <hr />
    </section>
  );
}

CrewInfo.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
