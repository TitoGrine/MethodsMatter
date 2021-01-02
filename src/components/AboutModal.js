import React from "react";
import Modal from "react-modal";
import "./../assets/AboutModal.scss";

function AboutModal({ showModal, setShowModal }) {
  return (
    <Modal
      className="about_modal"
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
    >
      <button
        className="modal_close_button"
        onClick={() => setShowModal(false)}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.6499 13.1104C12.2593 13.5009 12.2593 14.1341 12.6499 14.5246L22.9005 24.7752L12.6499 35.0259C12.2593 35.4164 12.2593 36.0496 12.6499 36.4401L13.7925 37.5827C14.183 37.9732 14.8161 37.9732 15.2067 37.5827L25.4573 27.332L35.708 37.5827C36.0985 37.9732 36.7317 37.9732 37.1222 37.5827L38.2648 36.4401C38.6553 36.0496 38.6553 35.4164 38.2648 35.0259L28.0141 24.7752L38.2648 14.5246C38.6553 14.1341 38.6553 13.5009 38.2648 13.1104L37.1222 11.9678C36.7317 11.5773 36.0985 11.5773 35.708 11.9678L25.4573 22.2184L15.2067 11.9678C14.8162 11.5773 14.183 11.5773 13.7925 11.9678L12.6499 13.1104Z"
          />
        </svg>
      </button>
      <h2>About Methods Matter</h2>
      <h4>Description</h4>
      <p>
        Have you ever wondered what the outcome of US elections would be were
        they not to use the winner takes all seats approach? Specially after the
        2016 election it was evident that the current method wasn't the most
        representative, after Hillary Clinton won the popular vote by nearly 3
        million votes but failed to win the election.
      </p>
      <p>
        This website is therefore an attempt to estimate the outcome of US
        elections from 1976 to 2016 if other common methods of seat allocation
        were used instead.
      </p>
      <p>
        Of course, this is more of a though experiment than an actual depiction
        of what would happen, since both candiates and voters would have
        different strategies depending on how the elections work. For example,
        the existence of "flip" states is a consequence of the winner-take-all
        method, that allows all electoral votes from a state to go to only one
        candidate and therefore there is an clear advantage to campaing in these
        states far more than in states that are more partisan. Were the process
        different, then candidates would probably not be as incentivised to
        campaing in these states, and instead have a more broad reach approach.
      </p>
      <p>As such, don't take any of the results given here as facts!</p>
      <h4>How to Navigate</h4>
      <p>
        The website can be broken down into three parts: the US map, the
        settings and the outcome breakdown.
      </p>
      <p>
        The <strong>US map</strong> is an easy way to visualize and analyse the
        outcome in each state. The color represents the party that had the most
        electoral votes in that state, red being republican and blue being
        democrat. In the case of a tie, the color is of the party that had the
        popular vote, that is, the most votes. You can click any of the 50
        states to see a breakdown of the votes and electoral votes each
        candidate had according to the selected method.
      </p>
      <p>
        The <strong>settings</strong> is where you can set the parameters. The
        first dropdown allows you to choose and election year, from 1976 to
        2016. The second is where you can choose the seat allocation method. The
        default one is the Winner-Take-All method, currently the one used by
        most states in the presedential elections. If you select the Largest
        Remainder method, the third dropdown will enable you to choose the quota
        used in the algorithm. If you want to know how each method works and
        some of the countries that use it you can click the "Learn About Method"
        button, when the method you want to know about is selected. This
        includes an explanation of the quotas in the Largest Remainder method.
        Lastly you have the total percentage of residual votes given that seat
        allocation method. If you want to know more about residual votes click
        the information icon next to the value.
      </p>
      <p>
        The <strong>outcome breakdown</strong>, as the name suggests, contains
        information on the outcome of the election when using the given
        parameters. This inlcudes a banner telling you who the winner would be
        and the number of electoral votes had. If no candidate reached the 270
        electoral votes necessary to win the election, the banner suggests that
        either a coalition or a runoff wouldd need to happen.
        <br />
        Bellow the banner you have a table with all the candidates, their
        respective party, the total number of votes they had, the electoral
        votes they managed to have and the percentage of their votes that were
        residual.
      </p>
      <h4>Questions</h4>
      <ol>
        <li>
          Why are some the number of electoral votes allocated to each candidate
          different from reality when using the Winner-Take-All method?
        </li>
        <p>
          It's expected that when using the Winner-Take-All method the results
          would match the ones from the actual election. However, things are not
          that simples, even though most states use the the Winner-Take-All
          method, currently both Maine and Nebraska, have the possibility to
          split their electoral votes to multiple candidates. This is because
          they use the Winner-Take-All method on a district base, meaning if
          different parties win the popular vote in different districts, they
          both get electoral votes, eventhough only one of them won the popular
          vote in the state.
        </p>
        <p>
          This model doesn't contemplate this difference in these two states and
          therefore there are some instances where the electoral votes from
          these states should be split but is instead given to the candidate
          with most votes in the state.
        </p>
        <li>
          Why is forming a coalition or runoff the most common outcome when
          using other methods?
        </li>
        <p>
          Unlike the Winner-Take-All method, all other three methods are part of
          the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Party-list_proportional_representation"
            target="_blank"
            rel="noreferrer"
          >
            party-list proportional representation
          </a>{" "}
          type systems. In these systems, seats are distributed to each party in
          proportion to the number of votes each party receives. This makes it
          harder for a candidate to get a majority of the votes and therefore
          they're much less likely to reach the 270 electoral votes necessary to
          win on their own. All the methods tend to favor either small or large
          parties, but most tend to favor coalitions.
        </p>
        <p>
          It may be a strange concept in the USA to have a coalition in a
          presidential election but in other countries that use these methods,
          coalitions are very much a part of political strategy. However, many
          countries have both a president and a prime minister. Coalitions are
          common for elections that form a government and not when electing a
          president. In the latter, runoffs are most common.
        </p>
        <li>
          Why does the map stay the same even when I change the method that is
          used?
        </li>
        <p>
          All other methods allocate seats proportionally and therefore the
          party with the most votes will always have more or equal electoral
          votes than the second highest most voted party. If both get allocated
          the same number of seats, then the one with the popular vote will be
          the state "winner". Therefore, the color of a state is dictated by the
          party with the popular vote, no matter the method used, and as such
          the map will remain the same.
        </p>
        <li>
          Why is there no option for the 2020 election or elections prior to
          1976?
        </li>
        <p>
          You can check the Sources section next to see where I got the election
          data. The short answer is the source didn't have information regarding
          election prior to 1976 and the 2020 election is still to recent to
          have all the data organized and available to the public.
        </p>
        <p>
          If you have or know of a source of data for years that are not
          available get in contact with me or open an issue in the github
          project page and I'll see if I can add it!
        </p>
        <li>So, which is the best method?</li>
        <p>
          It all depends on the purpose of the elections and what the
          people/government prefers.
        </p>
        <p>
          The Winner-Take-All method is great for stability since it's almost
          guarenteed that a winner will come out with a majority with no need to
          form coalitions or have a runoff. Coalitions can bring a lot of
          instability to the election and governance process and in some cases
          they can't be formed and a new election must be called. Runoffs
          obvisouly have the downside of making the process longer and more
          expensive.
        </p>
        <p>
          On the other hand, the other methods are more representative of the
          people's will and as such can be seen as fairer. Coalitions can also
          be great to make reforms that would otherwise not happen under one
          party. As part of the caolition it's common that the smaller party
          approves or abstains from most of the proposals made by the larger
          party in exchange to pass some proposals of their own that can
          sometimes have a meaningful impact in people's life.
        </p>
      </ol>
      <h4>Sources</h4>
      <p>
        Most of the data regarding the elections came from the{" "}
        <a
          href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/42MVDX"
          target="_blank"
          rel="noreferrer"
        >
          MIT Election Data + Science Lab
        </a>{" "}
        dataset.
      </p>
      <p>
        Information regarding the number of electoral votes each state was
        conceded in the election years between 1976 and 2016 was taken from{" "}
        <a
          href="https://www.270towin.com/state-electoral-vote-history/"
          target="_blank"
          rel="noreferrer"
        >
          270toWin
        </a>
        .
      </p>
      <p>
        Information about each method was mostly gathered from Wikipedia and
        some papers. They can be found in the explanation of each method in the{" "}
        <strong>More Information</strong> section.
      </p>
      <h4>Technology</h4>
      <p>
        This website is built using React, bootstrapped using{" "}
        <a
          href="https://create-react-app.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          create-react-app
        </a>{" "}
        with{" "}
        <a
          href="https://sass-lang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sass
        </a>{" "}
        to help with the css. To get the Wikipedia pages of each candidate,
        calls to the Wikipedia API are made using the{" "}
        <a
          href="https://github.com/dijs/wiki"
          target="_blank"
          rel="noopener noreferrer"
        >
          wikijs
        </a>{" "}
        package. The US map representation is made using the{" "}
        <a
          href="https://github.com/gabidavila/react-usa-map"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-usa-map
        </a>{" "}
        package.
      </p>
      <p>
        It is currently being hosted on{" "}
        <a
          href="https://www.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
        .
      </p>
      <p>
        All the code from this site is public and available on GitHub{" "}
        <a
          href="https://github.com/TitoGrine/MethodsMatter"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        . If you encounter any bugs or have some suggestions to improve the site
        feel free to open an issue! If you liked the website, consider giving it
        a star{" "}
        <span role="img" aria-label="Friendly emoji.">
          😊
        </span>
        .
      </p>
      <div className="spacer" />
    </Modal>
  );
}

export default AboutModal;
