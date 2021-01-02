// Helper Functions

const calcAdvantageRatio = (
  party_seats,
  total_seats,
  party_votes,
  total_votes
) => party_seats / total_seats / (party_votes / total_votes);

const calcResidualVotes = (
  party_seats,
  total_seats,
  party_votes,
  total_votes,
  percentage_residual_votes
) =>
  Math.max(
    0,
    party_votes / total_votes -
      (1 - percentage_residual_votes) * (party_seats / total_seats)
  ) * total_votes;

const addResidualVotes = (outcome, electoral_votes, total_votes) => {
  let highest_advantage_ratio = 0;

  outcome.forEach(
    (candidate) =>
      (highest_advantage_ratio = Math.max(
        calcAdvantageRatio(
          candidate.electoral_votes,
          electoral_votes,
          candidate.votes,
          total_votes
        ),
        highest_advantage_ratio
      ))
  );

  const percentage_residual_votes = 1 - 1 / highest_advantage_ratio;

  outcome.forEach(
    (candidate) =>
      (candidate.residual_votes = calcResidualVotes(
        candidate.electoral_votes,
        electoral_votes,
        candidate.votes,
        total_votes,
        percentage_residual_votes
      ))
  );

  return outcome;
};

// Quota Functions

export const hareQuota = (total_votes, electoral_votes) =>
  total_votes / electoral_votes;

export const droopQuota = (total_votes, electoral_votes) =>
  Math.floor(1 + total_votes / (1 + electoral_votes));

// Allocation Algorithms

export const winnerTakesAll = (
  electoral_votes,
  total_votes,
  results,
  quotaFunc
) => {
  let maxVotes = -1;

  results.forEach((result) => {
    maxVotes = Math.max(maxVotes, parseInt(result.votes));
  });

  let outcome = [];

  results.forEach((result) => {
    outcome.push({
      candidate: result.candidate,
      party: result.party,
      votes: parseInt(result.votes),
      electoral_votes:
        maxVotes === parseInt(result.votes) ? parseInt(electoral_votes) : 0,
      residual_votes: 0,
    });
  });

  return addResidualVotes(outcome, electoral_votes, total_votes);
};

export const dHondtMethod = (
  electoral_votes,
  total_votes,
  results,
  quotaFunc
) => {
  let allocated_electoral_votes = 0;
  let outcome = results.map((candidate) => {
    return {
      candidate: candidate.candidate,
      party: candidate.party,
      votes: parseInt(candidate.votes),
      electoral_votes: 0,
      residual_votes: 0,
    };
  });

  while (allocated_electoral_votes < electoral_votes) {
    outcome.sort((a, b) => {
      return (
        b.votes / (b.electoral_votes + 1) - a.votes / (a.electoral_votes + 1)
      );
    });

    let i = 0;
    for (i; outcome[i].party === ""; i++) {}
    outcome[i].electoral_votes++;
    allocated_electoral_votes++;
  }

  return addResidualVotes(outcome, electoral_votes, total_votes);
};

export const websterSainteMethod = (
  electoral_votes,
  total_votes,
  results,
  quotaFunc
) => {
  let allocated_electoral_votes = 0;
  let outcome = results.map((candidate) => {
    return {
      candidate: candidate.candidate,
      party: candidate.party,
      votes: parseInt(candidate.votes),
      electoral_votes: 0,
    };
  });

  while (allocated_electoral_votes < electoral_votes) {
    outcome.sort((a, b) => {
      return (
        b.votes / (2 * b.electoral_votes + 1) -
        a.votes / (2 * a.electoral_votes + 1)
      );
    });

    let i = 0;
    for (i; outcome[i].party === ""; i++) {}
    outcome[i].electoral_votes++;
    allocated_electoral_votes++;
  }

  return addResidualVotes(outcome, electoral_votes, total_votes);
};

export const largestRemainderMethod = (
  electoral_votes,
  total_votes,
  results,
  quotaFunc
) => {
  let allocated_electoral_votes = 0;
  let quota = quotaFunc(parseInt(total_votes), parseInt(electoral_votes));
  let outcome = results.map((candidate) => {
    let assured_votes = Math.floor(parseInt(candidate.votes) / quota);
    allocated_electoral_votes += assured_votes;

    return {
      candidate: candidate.candidate,
      party: candidate.party,
      votes: parseInt(candidate.votes),
      electoral_votes: assured_votes,
      residual_votes: 0,
      remainder: parseInt(candidate.votes) / quota - assured_votes,
    };
  });

  outcome.sort((a, b) => b.remainder - a.remainder);

  for (
    let i = 0;
    allocated_electoral_votes < electoral_votes;
    i = (i + 1) % outcome.length
  ) {
    if (outcome[i].party !== "") {
      outcome[i].electoral_votes++;
      allocated_electoral_votes++;
    }
  }

  outcome = addResidualVotes(outcome, electoral_votes, total_votes);

  return outcome.map((result) => {
    return {
      candidate: result.candidate,
      party: result.party,
      votes: result.votes,
      electoral_votes: result.electoral_votes,
      residual_votes: result.residual_votes,
    };
  });
};
