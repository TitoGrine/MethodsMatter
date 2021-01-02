import React, { useState } from "react";
import CandidateTableRow from "./CandidateTableRow";
import "./../assets/CandidateTable.scss";
import VisibilitySensor from "react-visibility-sensor";
import ResidualVotesTooltip from "./ResidualVotesTooltip";

function CandidateTable({ candidates, offset }) {
  const [visible, setVisible] = useState(true);

  const getStyle = () =>
    visible ? { position: "inherit" } : { position: "sticky", top: "0" };

  return (
    <table className="candidate_table">
      <VisibilitySensor
        onChange={setVisible}
        offset={offset ? { top: "20vh" } : { top: 0 }}
      >
        <thead>
          <tr>
            <th style={getStyle()}>Candidate</th>
            <th style={getStyle()}>Party</th>
            <th style={getStyle()}>Votes</th>
            <th style={getStyle()}>Electoral Votes</th>
            <th style={getStyle()}>
              <span>Residual Votes</span>
              <ResidualVotesTooltip verticalOffset={4} />
            </th>
          </tr>
        </thead>
      </VisibilitySensor>
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
