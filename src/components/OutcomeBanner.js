import React from "react";
import { getPartyColor } from "../util/util";
import "./../assets/OutcomeBanner.scss";

function OutcomeBanner({ winner, year }) {
  const { coalition, name, party, electoral_votes } = winner;

  const getStyle = () => {
    return {
      color: `${getPartyColor(party)}`,
    };
  };

  const getOutcomeText = () => {
    return coalition ? (
      <h2 className="winner_banner">
        The {year} election would require a coalition.
      </h2>
    ) : (
      <h2 className="winner_banner">
        The {year} election would be won by{" "}
        <strong className="winner_name" style={getStyle()}>
          {name}
        </strong>{" "}
        with{" "}
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
