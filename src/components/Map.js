import React, { useEffect, useState } from "react";
import USAMap from "react-usa-map";
import { getOutcome, getPartyColor } from "../util/util";
import "./../assets/scss/Map.scss";
import CandidateTable from "./Table/CandidateTable";
import InformationButton from "./Button/InformationButton";
import OutcomeBanner from "./Misc/OutcomeBanner";
import ResidualVotesTooltip from "./Misc/ResidualVotesTooltip";
import StateModal from "./Modal/StateModal";

function Map() {
  const [year, setYear] = useState("2020");
  const [method, setMethod] = useState("winnerTakesAll");
  const [quota, setQuota] = useState("hareQuota");
  const [outcome, setOutcome] = useState([]);
  const [winner, setWinner] = useState(null);
  const [residualVotes, setResidualVotes] = useState(0);
  const [candidates, setCandidates] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [stateName, setStateName] = useState("");
  const [stateInfo, setStateInfo] = useState("");

  const yearOptions = [
    { year: "1976", label: "1976 election" },
    { year: "1980", label: "1980 election" },
    { year: "1984", label: "1984 election" },
    { year: "1988", label: "1988 election" },
    { year: "1992", label: "1992 election" },
    { year: "1996", label: "1996 election" },
    { year: "2000", label: "2000 election" },
    { year: "2004", label: "2004 election" },
    { year: "2008", label: "2008 election" },
    { year: "2012", label: "2012 election" },
    { year: "2016", label: "2016 election" },
    { year: "2020", label: "2020 election" },
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
  const DCHandler = () => {
    if (outcome.length > 0) {
      setStateInfo(outcome.find((state) => state.state === "DC").outcome);
      setStateName("District of Columbia");
      setShowModal(true);
    }
  };

  const getElectionWinner = (candidates) => {
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

  const getResidualVotes = (candidates) => {
    let totalVotes = 0;
    let totalResidualVotes = 0;

    candidates.forEach((candidate) => {
      totalVotes += candidate.votes;
      totalResidualVotes += candidate.residual_votes;
    });

    setResidualVotes(((totalResidualVotes / totalVotes) * 100).toFixed(1));
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

      stateConfig[state.state === "DC" ? "DC2" : state.state] = {
        fill: getPartyColor(winner.party),
        clickHandler: () => {
          setStateInfo(state.outcome);
          setStateName(state.name);
          setShowModal(true);
        },
      };
    });

    return stateConfig;
  };

  useEffect(() => {
    let data = getOutcome(year, method, quota);

    getElectionWinner(data.candidates);
    getResidualVotes(data.candidates);
    setOutcome(data.outcome);
    setCandidates(data.candidates);
  }, [year, method, quota]);

  return (
    <>
      <div className="map-section">
        <div className="map">
          <USAMap
            // width={"50vw"}
            customize={statesCustomConfig()}
            onClick={DCHandler}
          />
        </div>
        <section className="sidebar">
          <div className="settings">
            <div
              className="election_year"
              onChange={(e) => setYear(e.target.value)}
            >
              <label for="year">Election Year: </label>
              <select
                name="year"
                defaultValue={year}
                placeholder={`${year} election`}
              >
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
              <label for="year">Allocation Method: </label>
              <select name="method" defaultValue={method}>
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
              <label for="quota">Quota: </label>
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
          <h3>
            Total Residual Votes: <span>{residualVotes}%</span>
            <ResidualVotesTooltip verticalOffset={2} />
          </h3>
          <InformationButton method={method} />
        </section>
        <StateModal
          showModal={showModal}
          setShowModal={setShowModal}
          stateName={stateName}
          stateInfo={stateInfo}
        />
      </div>
      {winner && <OutcomeBanner winner={winner} year={year} />}
      {candidates && <CandidateTable candidates={candidates} />}
    </>
  );
}

export default Map;
