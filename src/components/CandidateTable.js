import React from "react";
import CandidateTableRow from "./CandidateTableRow";
import "./../assets/CandidateTable.scss";

function CandidateTable({ candidates }) {
  return (
    <table className="candidate_table">
      <thead>
        <tr>
          <th>Candidate</th>
          <th>Party</th>
          <th>Votes</th>
          <th>Electoral Votes</th>
          <th>Residual Votes</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((candidate) => {
          return (
            <CandidateTableRow
              name={candidate.candidate}
              party={candidate.party}
              votes={candidate.votes}
              electoral_votes={candidate.electoral_votes}
              residual_votes={candidate.residual_votes}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default CandidateTable;
