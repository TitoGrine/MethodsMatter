import React from "react";
import Modal from "react-modal";
import "./../../assets/scss/MethodModal.scss";

function MethodModal({ showModal, setShowModal, method }) {
  const getMethodInformation = () => {
    switch (method) {
      case "winnerTakesAll":
        return (
          <>
            <h2>Winner-Take-All method</h2>
            <h4>Description</h4>
            <p>
              The <strong>winner-take-all method</strong> or{" "}
              <strong>block voting</strong> is a non-proportional voting system
              where, in the case of the United States, the party that has the
              most votes in a state gets all the electoral votes from that
              state.
            </p>
            <p>
              This system is particularly vulnerable to tactical voting, since
              supporters of relatively unpopular third parties have a
              substancial incentive to avoid "wasted votes" and vote for a major
              party instead.
            </p>
            <h4>Examples</h4>
            <ul>
              <li>Lebanon</li>
              <li>Mauritius</li>
              <li>Mongolia</li>
              <li>Syria</li>
              <li>United Kingdom (some local elections)</li>
              <li>United States</li>
            </ul>
            <h4>More Information</h4>
            <p>
              If you want to learn more about this method visit{" "}
              <a
                href="https://en.wikipedia.org/wiki/Multiple_non-transferable_vote"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
            <div className="spacer" />
          </>
        );
      case "dHondtMethod":
        return (
          <>
            <h2>D'Hondt Method</h2>
            <h4>Description</h4>
            <p>
              The <strong>D'Hondt method</strong> or{" "}
              <strong>Jefferson method</strong> is a highest averages method and
              thus a proportional representation system. It has been proven to
              the unique consisten, monotone, stable, and balanced method that
              encourages coalitions.
            </p>
            <p>
              It works by calculating a quotient for each party. The quotient is
              given by the total number of votes that party received divided by
              the number of seats it has been allocated so far plus one. After
              all quotients have been calculated, the party with the highest one
              is given one seat, and its quotient is recalculated. This then
              repeats until all the state's electoral votes have been allocated.
            </p>
            <h4>Examples</h4>
            <ul>
              <li>Argentina</li>
              <li>Belgium</li>
              <li>Brazil</li>
              <li>Denmark</li>
              <li>Finland</li>
              <li>Iceland</li>
              <li>Israel</li>
              <li>Japan</li>
              <li>Mozambique</li>
              <li>Netherlands</li>
              <li>Portugal</li>
              <li>Spain</li>
            </ul>
            <h4>More Information</h4>
            <p>
              If you want to learn more about this method visit{" "}
              <a
                href="https://en.wikipedia.org/wiki/D'Hondt_method"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
            <div className="spacer" />
          </>
        );
      case "websterSainteMethod":
        return (
          <>
            <h2>Webster/Sainte-Laguë method</h2>
            <h4>Description</h4>
            <p>
              The <strong>Webster/Sainte-Laguë method</strong> is a highest
              quotient method in a proportional representation voting system. It
              gives similar results to the D'Hondt method, but tends to be less
              favorable to larger parties. It is generally seen as more
              proportional but risks an outcome where a party with more than
              half the votes can win fewer thant half the seats.
            </p>
            <p>
              Just like the D'Hondt mehthod, it works by calculating a quotient
              for each party. The quotient is given by the total number of votes
              that party received divided by two times the number of seats it
              has been allocated so far plus one. After all quotients have been
              calculated, the party with the highest one is given one seat, and
              its quotient is recalculated. This then repeats until all the
              state's electoral votes have been allocated.
            </p>
            <h4>Examples</h4>
            <ul>
              <li>Bosnia and Herzegovina</li>
              <li>Iraq</li>
              <li>Kosovo</li>
              <li>Latvia</li>
              <li>New Zealand</li>
              <li>Norway</li>
              <li>Sweden</li>
            </ul>
            <h4>More Information</h4>
            <p>
              If you want to learn more about this method visit{" "}
              <a
                href="https://en.wikipedia.org/wiki/Webster/Sainte-Lagu%C3%AB_method"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
            <div className="spacer" />
          </>
        );
      case "largestRemainderMethod":
        return (
          <>
            <h2>Largest Remainder Method</h2>
            <h4>Description</h4>
            <p>
              The <strong>largest remainder method</strong> or
              <strong>Hare-Niemeyer method</strong> is a proportional electoral
              system.
            </p>
            <p>
              It works by dividing each party's number of votes by a quota that
              represent the number of votes required for a seat. The integer
              part of this division is the party's assured seats. If some seats
              remain, then all parties are sorted by the fractional remainder of
              the division and the largest remainders are each allocated one
              seat until non remain.
            </p>
            <p>
              There are several possibilities for the quota. The two most common
              are the Hare quota and the Droop quota.
            </p>
            <p>
              The <strong>Hare quota</strong> is given by the total number of
              votes in the state divided by the total seats that state has.
            </p>
            <p>
              The <strong>Droop quota</strong> is given by one plus the fraction
              between the total number of votes in the state and the total seats
              that state has plus one.
            </p>
            <p>
              The Hare quota tends to be more generous to less popular parties
              whereas the Droop quota tends to favour popular parties. This
              makes the Hare quota arguably more proportionall than the Droop
              quota.
            </p>
            <p>
              Unlike highest averages methods, the largest remainder method is
              vulnerable to the{" "}
              <a
                href="https://en.wikipedia.org/wiki/Apportionment_paradox#Alabama_paradox"
                target="_blank"
                rel="noreferrer"
              >
                Alabama paradox
              </a>
              , where increasing the number of seats can actually cause a party
              to lose a seat.
            </p>
            <h4>Examples</h4>
            <ul>
              <li>Russia</li>
              <li>Ukraine</li>
              <li>Tunisia</li>
              <li>Namibia</li>
              <li>Hong Kong</li>
            </ul>
            <h4>More Information</h4>
            <p>
              If you want to learn more about this method visit{" "}
              <a
                href="https://en.wikipedia.org/wiki/Largest_remainder_method"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
            <div className="spacer" />
          </>
        );

      default:
        return;
    }
  };

  return (
    <Modal
      className="method_modal"
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
    >
      {getMethodInformation()}
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
    </Modal>
  );
}

export default MethodModal;
