import React from "react";

function CandidateTableRow({ name, party, votes, electoral_votes }) {
  return (
    <tr>
      <td>{name ? name : "-"}</td>
      <td>{party ? party.charAt(0).toUpperCase() + party.slice(1) : "-"}</td>
      <td>{votes}</td>
      <td>{electoral_votes}</td>
    </tr>
  );
}

export default CandidateTableRow;
