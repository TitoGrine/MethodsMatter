export const winnerTakesAll = (electoral_votes, total_votes, results) => {
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

export const dHondtMethod = (electoral_votes, total_votes, results) => {
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
