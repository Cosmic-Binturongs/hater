import React, { useRef } from "react";
import '../newHate/newHate.css';

function NewHate ({ setShowModal }) {
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
        <h2>Post a new HAte</h2>
        <button className="newHate-modal-button"onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>
  )
};


export default NewHate
