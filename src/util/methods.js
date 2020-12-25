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
    });
  });

  return outcome;
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
    };
  });

  while (allocated_electoral_votes < electoral_votes) {
    outcome.sort((a, b) => {
      return (
        b.votes / (b.electoral_votes + 1) - a.votes / (a.electoral_votes + 1)
      );
    });

    outcome[0].electoral_votes++;
    allocated_electoral_votes++;
  }

  return outcome;
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

    outcome[0].electoral_votes++;
    allocated_electoral_votes++;
  }

  return outcome;
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
      remainder: parseInt(candidate.votes) / quota - assured_votes,
    };
  });

  outcome.sort((a, b) => b.remainder - a.remainder);

  for (
    let i = 0;
    allocated_electoral_votes < electoral_votes;
    i = (i + 1) % outcome.length
  ) {
    outcome[i].electoral_votes++;
    allocated_electoral_votes++;
  }

  return outcome.map((result) => {
    return {
      candidate: result.candidate,
      party: result.party,
      votes: result.votes,
      electoral_votes: result.electoral_votes,
    };
  });
};
