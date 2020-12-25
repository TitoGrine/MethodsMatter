import React from "react";
import Modal from "react-modal";
import "./../assets/StateModal.scss";
import CandidateTable from "./CandidateTable";

function StateModal({ showModal, setShowModal, stateInfo }) {
  return (
    <Modal
      className="state_modal"
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
    >
      <CandidateTable candidates={stateInfo} />
      <button onClick={() => setShowModal(false)}>X</button>
    </Modal>
  );
}

export default StateModal;
