import React, { useState } from "react";
import MethodModal from "../Modal/MethodModal";

function InformationButton({ method }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Learn About Method</button>
      <MethodModal
        showModal={showModal}
        setShowModal={setShowModal}
        method={method}
      />
    </>
  );
}

export default InformationButton;
