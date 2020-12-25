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
