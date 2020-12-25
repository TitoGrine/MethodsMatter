import React from "react";
import USAMap from "react-usa-map";
import { getOutcome, getPartyColor } from "../util/util";

function Map() {
  /* mandatory */
  const mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  const getStateWinner = (state_outcome) => {
    let winner = {};
    let max_votes = -1;

    state_outcome.forEach((candidate) => {
      if (max_votes < candidate.electoral_votes) {
        max_votes = candidate.electoral_votes;
        winner = {
          candidate: candidate.candidate,
          party: candidate.party,
        };
      }
    });

    return winner;
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  const statesCustomConfig = () => {
    let outcome = getOutcome(2008);
    let stateConfig = {};

    outcome.outcome.forEach((state) => {
      let winner = getStateWinner(state.outcome);

      console.log(winner);

      stateConfig[state.state] = {
        fill: getPartyColor(winner.party),
      };
    });

    return stateConfig;
  };

  return (
    <div className="map">
      <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
    </div>
  );
}

export default Map;
