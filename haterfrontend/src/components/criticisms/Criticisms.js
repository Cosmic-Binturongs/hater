import React, { useRef } from 'react';
import '../criticisms/Criticisms.css';

function Criticisms({ setShowModal, hateData }) {

  // modal contents  

  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return (
    <div className="criticisms-wrapper" ref={modalRef} onClick={closeModal}>
      <div className="criticisms-modal">

        <div className='criticisms-contents'>
          Update Criticisms Crud
          
        </div>

        <button className="criticisms-modal-button"onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>
  )
};


export default Criticisms
