import {
  dHondtMethod,
  winnerTakesAll,
  websterSainteMethod,
  largestRemainderMethod,
  hareQuota,
  droopQuota,
} from "./methods";

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

const getMethod = (methodName) => {
  switch (methodName) {
    case "winnerTakesAll":
      return winnerTakesAll;
    case "dHondtMethod":
      return dHondtMethod;
    case "websterSainteMethod":
      return websterSainteMethod;
    case "largestRemainderMethod":
      return largestRemainderMethod;
    default:
      return () => 1;
  }
};

const getQuotaFunc = (quotaName) => {
  switch (quotaName) {
    case "hareQuota":
      return hareQuota;
    case "droopQuota":
      return droopQuota;
    default:
      return () => 1;
  }
};

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

export const getOutcome = (year, methodName, quotaName) => {
  let outcome = [];
  let candidates = {};

  let method = getMethod(methodName);
  let quotaFunc = getQuotaFunc(quotaName);

  states.forEach((state) => {
    let results = data[year][state];
    let state_outcome = method(
      results.electoral_votes,
      results.total_votes,
      results.results,
      quotaFunc
    );

    state_outcome.forEach((candidate) => {
      if (candidates[candidate.candidate]) {
        candidates[candidate.candidate].electoral_votes +=
          candidate.electoral_votes;
        candidates[candidate.candidate].votes += candidate.votes;
        candidates[candidate.candidate].residual_votes +=
          candidate.residual_votes;
      } else {
        candidates[candidate.candidate] = {
          party: candidate.party,
          votes: candidate.votes,
          electoral_votes: candidate.electoral_votes,
          residual_votes: candidate.residual_votes,
        };
      }
    });

    outcome.push({
      state,
      name: data[year][state].name,
      outcome: state_outcome,
    });
  });

  let merged_candidates = [];

  for (let candidate in candidates) {
    merged_candidates.push({
      candidate,
      party: candidates[candidate].party,
      votes: candidates[candidate].votes,
      electoral_votes: candidates[candidate].electoral_votes,
      residual_votes: candidates[candidate].residual_votes,
    });
  }

  merged_candidates.sort((a, b) => {
    let a_ev = a.electoral_votes;
    let b_ev = b.electoral_votes;

    return a_ev === b_ev ? b.votes - a.votes : b_ev - a_ev;
  });

  return {
    candidates: merged_candidates,
    outcome,
  };
};
