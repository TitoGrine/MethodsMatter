import React, { useCallback, useEffect, useState } from "react";
import wiki from "wikijs";

function CandidateTableRow({ name, party, votes, electoral_votes }) {
  const [wikiLink, setWikiLink] = useState(null);

  const getWikiPage = useCallback(async () => {
    if (!name.includes(",")) {
      setWikiLink(null);
      return;
    }

    let query = name.split(", ");

    query.forEach((term) => term.replace(/[%|+\-*\\[\]&<>.]/g, ""));

    if (query)
      wiki({ apiUrl: "https://en.wikipedia.org/w/api.php" })
        .page(`${query[1]} ${query[0]}`)
        .then((page) => setWikiLink(page.raw.fullurl))
        .catch(() => {
          wiki({ apiUrl: "https://en.wikipedia.org/w/api.php" })
            .page(`${query[0]}`)
            .then((page) => setWikiLink(page.raw.fullurl))
            .catch(() => {
              wiki({ apiUrl: "https://en.wikipedia.org/w/api.php" })
                .page(`${query[1]}`)
                .then((page) => setWikiLink(page.raw.fullurl))
                .catch(() => setWikiLink(null));
            });
        });
  }, [name]);

  const getName = () => {
    return wikiLink ? (
      <a href={wikiLink} target="_blank" rel="noreferrer">
        {name}
      </a>
    ) : (
      name
    );
  };

  useEffect(() => getWikiPage(), [getWikiPage]);

  return (
    <tr>
      <td>{name ? getName() : "-"}</td>
      <td>{party ? party.charAt(0).toUpperCase() + party.slice(1) : "-"}</td>
      <td>{votes}</td>
      <td>{electoral_votes}</td>
    </tr>
  );
}

export default CandidateTableRow;
