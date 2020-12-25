import React, { useState } from "react";
import USAMap from "react-usa-map";
import { getOutcome, getPartyColor } from "../util/util";

import "./../assets/Map.scss";
import StateModal from "./StateModal";

function Map() {
  const [year, setYear] = useState("2016");
  const [showModal, setShowModal] = useState(false);
  const [stateInfo, setStateInfo] = useState("");

  const yearOptions = [
    { year: "1976", label: "1976 elections" },
    { year: "1980", label: "1980 elections" },
    { year: "1984", label: "1984 elections" },
    { year: "1988", label: "1988 elections" },
    { year: "1992", label: "1992 elections" },
    { year: "1996", label: "1996 elections" },
    { year: "2000", label: "2000 elections" },
    { year: "2008", label: "2008 elections" },
    { year: "2012", label: "2012 elections" },
    { year: "2016", label: "2016 elections" },
  ];

  /* mandatory */
  const mapHandler = (event) => {
    console.log(event.target);
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
    let outcome = getOutcome(year);
    let stateConfig = {};

    outcome.outcome.forEach((state) => {
      let winner = getStateWinner(state.outcome);

      stateConfig[state.state] = {
        fill: getPartyColor(winner.party),
        clickHandler: () => {
          setStateInfo(state.outcome);
          setShowModal(true);
        },
      };
    });

    return stateConfig;
  };

  return (
    <>
      <div className="map-section">
        <div className="map">
          <USAMap
            height={"60vh"}
            customize={statesCustomConfig()}
            onClick={mapHandler}
          />
        </div>
        <div className="settings" onChange={(e) => setYear(e.target.value)}>
          <div className="election_year">
            <label>Election Year: </label>
            <select name="year" defaultValue={year}>
              {yearOptions.map((option) => {
                return (
                  <option value={option.year} selected={year === option.year}>
                    {option.label}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <StateModal
          showModal={showModal}
          setShowModal={setShowModal}
          stateInfo={stateInfo}
        />
      </div>
    </>
  );
}

export default Map;
