import React, { useRef } from "react";
import "../newHate/newHate.css";
import HatesForm from "../hates/HatesForm";
import ModalHate from "./ModalHate";

function NewHate({ setShowModal }) {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return (
    <div className="newHate-wrapper" ref={modalRef} onClick={closeModal}>
      <div className="newHate-modal">
        <ModalHate setShowModal={setShowModal} />

        <button
          className="newHate-modal-button"
          onClick={() => setShowModal(false)}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default NewHate;
