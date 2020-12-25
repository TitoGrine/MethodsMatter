import React from "react";
import Modal from "react-modal";
import "./../assets/StateModal.scss";

function StateModal({ showModal, setShowModal, stateInfo }) {
  return (
    <Modal className="state_modal" isOpen={showModal}>
      {JSON.stringify(stateInfo)}
      <button onClick={() => setShowModal(false)}>Close Modal</button>
    </Modal>
  );
}

export default StateModal;
