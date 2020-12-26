import React from "react";
import Modal from "react-modal";
import "./../assets/StateModal.scss";
import CandidateTable from "./CandidateTable";

function StateModal({ showModal, setShowModal, stateInfo }) {
  return (
    <Modal
      className="method_modal"
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
    >
      <CandidateTable candidates={stateInfo} />
      <button
        className="modal_close_button"
        onClick={() => setShowModal(false)}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 50 50"
          fill="#52ffb8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.6499 13.1104C12.2593 13.5009 12.2593 14.1341 12.6499 14.5246L22.9005 24.7752L12.6499 35.0259C12.2593 35.4164 12.2593 36.0496 12.6499 36.4401L13.7925 37.5827C14.183 37.9732 14.8161 37.9732 15.2067 37.5827L25.4573 27.332L35.708 37.5827C36.0985 37.9732 36.7317 37.9732 37.1222 37.5827L38.2648 36.4401C38.6553 36.0496 38.6553 35.4164 38.2648 35.0259L28.0141 24.7752L38.2648 14.5246C38.6553 14.1341 38.6553 13.5009 38.2648 13.1104L37.1222 11.9678C36.7317 11.5773 36.0985 11.5773 35.708 11.9678L25.4573 22.2184L15.2067 11.9678C14.8162 11.5773 14.183 11.5773 13.7925 11.9678L12.6499 13.1104Z"
            fill="#52ffb8"
          />
        </svg>
      </button>
    </Modal>
  );
}

export default StateModal;
