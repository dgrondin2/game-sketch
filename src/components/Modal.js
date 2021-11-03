import React from 'react';
import '../styles/css/Modal.css';

function Modal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <button className="clone-btn" onClick={props.handleCloseModal}>X</button>
        {props.children}
      </div>
      <div className="modal-overlay" onClick={props.handleCloseModal}></div>
    </div>
  )
}

export default Modal;