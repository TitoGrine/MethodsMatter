import { winnerTakesAll } from "./methods";

var data = require("../docs/elections.json");

const states = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

export const getPartyColor = (party) => {
  switch (party) {
    case "republican":
      return "#E9141D";

    case "democrat":
      return "#0015BC";

    default:
      return "#AAAAAA";
  }
};

export const getOutcome = (year) => {
  let outcome = [];
  let candidates = {};

  states.forEach((state) => {
    let results = data[year][state];
    let state_outcome = winnerTakesAll(
      results.electoral_votes,
      results.total_votes,
      results.results
    );

    state_outcome.forEach((candidate) => {
      if (candidates[candidate.candidate]) {
        candidates[candidate.candidate].electoral_votes +=
          candidate.electoral_votes;
        candidates[candidate.candidate].votes += candidate.votes;
      } else {
        candidates[candidate.candidate] = {
          party: candidate.party,
          votes: candidate.votes,
          electoral_votes: candidate.electoral_votes,
        };
      }
    });

    outcome.push({
      state,
      outcome: state_outcome,
    });
  });

  return {
    candidates,
    outcome,
  };
};
