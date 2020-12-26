import React, { useEffect, useState } from "react";
import USAMap from "react-usa-map";
import { getOutcome, getPartyColor } from "../util/util";

import "./../assets/Map.scss";
import CandidateTable from "./CandidateTable";
import InformationButton from "./InformationButton";
import OutcomeBanner from "./OutcomeBanner";
import StateModal from "./StateModal";

function Map() {
  const [year, setYear] = useState("2016");
  const [method, setMethod] = useState("winnerTakesAll");
  const [quota, setQuota] = useState("hareQuota");
  const [outcome, setOutcome] = useState([]);
  const [winner, setWinner] = useState(null);
  const [candidates, setCandidates] = useState(null);
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
    { year: "2004", label: "2004 elections" },
    { year: "2008", label: "2008 elections" },
    { year: "2012", label: "2012 elections" },
    { year: "2016", label: "2016 elections" },
  ];

  const methodsOptions = [
    { method: "winnerTakesAll", label: "Winner-Take-All method" },
    { method: "dHondtMethod", label: "D'Hondt method" },
    { method: "websterSainteMethod", label: "Webster/Sainte-Laguë method" },
    { method: "largestRemainderMethod", label: "Largest Remainder method" },
  ];

  const quotaOptions = [
    { type: "hareQuota", label: "Hare quota" },
    { type: "droopQuota", label: "Droop Quota" },
  ];

  /* mandatory */
  const mapHandler = (event) => {
    console.log(event.target);
    alert(event.target.dataset.name);
  };

  const getElectionWinner = (candidates) => {
    console.log(candidates);
    if (
      candidates.length > 0 &&
      parseInt(candidates[0].electoral_votes) >= 270
    ) {
      let names = candidates[0].candidate.split(", ");
      setWinner({
        name: `${names[1]} ${names[0]}`,
        party: candidates[0].party,
        electoral_votes: candidates[0].electoral_votes,
        coalition: false,
      });
    } else {
      setWinner({
        coalition: true,
      });
    }
  };

  const getStateWinner = (state_outcome) => {
    state_outcome.sort((a, b) => {
      let a_ev = a.electoral_votes;
      let b_ev = b.electoral_votes;

      return b_ev === a_ev ? b.votes - a.votes : b_ev - a_ev;
    });

    return {
      candidate: state_outcome[0].candidate,
      party: state_outcome[0].party,
    };
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  const statesCustomConfig = () => {
    let stateConfig = {};

    outcome.forEach((state) => {
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

  useEffect(() => {
    let data = getOutcome(year, method, quota);

    getElectionWinner(data.candidates);
    setOutcome(data.outcome);
    setCandidates(data.candidates);
  }, [year, method, quota]);

  return (
    <>
      <div className="map-section">
        <div className="map">
          <USAMap
            height={"50vh"}
            customize={statesCustomConfig()}
            onClick={mapHandler}
          />
        </div>
        <section className="sidebar">
          <div className="settings">
            <div
              className="election_year"
              onChange={(e) => setYear(e.target.value)}
            >
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
            <div
              className="allocation_method"
              onChange={(e) => setMethod(e.target.value)}
            >
              <label>Allocation Method: </label>
              <select name="year" defaultValue={year}>
                {methodsOptions.map((option) => {
                  return (
                    <option
                      value={option.method}
                      selected={method === option.method}
                    >
                      {option.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="quota" onChange={(e) => setQuota(e.target.value)}>
              <label>Quota: </label>
              <select
                name="quota"
                defaultValue={quota}
                disabled={!["largestRemainderMethod"].includes(method)}
              >
                {quotaOptions.map((option) => {
                  return (
                    <option
                      value={option.type}
                      selected={quota === option.type}
                    >
                      {option.label}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <InformationButton method={method} />
        </section>
        <StateModal
          showModal={showModal}
          setShowModal={setShowModal}
          stateInfo={stateInfo}
        />
      </div>
      {winner && <OutcomeBanner winner={winner} year={year} />}
      {candidates && <CandidateTable candidates={candidates} />}
    </>
  );
}

export default Map;
