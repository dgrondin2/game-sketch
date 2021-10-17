import React from 'react';
import '../styles/css/Modal.css';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.show) {
      return null;
    }
    else {
      return (
        <div className="modal-wrapper">
          <div className="modal">
            <button className="close-btn" onClick={this.props.handleCloseModal}>X</button>
            {this.props.children}
          </div>
          <div className="modal-overlay" onClick={this.props.handleCloseModal}></div>
        </div>
      );
    }
  }
}