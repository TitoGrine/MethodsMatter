import React from "react";
import "./../../assets/scss/OutcomeBanner.scss";

function OutcomeBanner({ winner, year }) {
  const { coalition, name, electoral_votes } = winner;

  const getOutcomeText = () => {
    return coalition ? (
      <h2 className="winner_banner">
        The {year} election would require a coalition or runoff.
      </h2>
    ) : (
      <h2 className="winner_banner">
        The {year} election would be won by{" "}
        <strong className="winner_name">{name}</strong> with{" "}
        <strong className="winner_votes">
          {electoral_votes} electoral votes
        </strong>
        .
      </h2>
    );
  };

  return getOutcomeText();
}

export default OutcomeBanner;
