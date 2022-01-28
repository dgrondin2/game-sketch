import React from 'react';
import PropTypes from 'prop-types';
import '../styles/css/Modal.css';

function Modal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <button className="close-btn" onClick={props.handleCloseModal}>X</button>
        {props.children}
      </div>
      <div className="modal-overlay" onClick={props.handleCloseModal}></div>
    </div>
  )
}

Modal.propTypes = {
  show: PropTypes.bool,
  handleCloseModal: PropTypes.func
};

export default Modal;